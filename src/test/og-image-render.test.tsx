import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

/**
 * Guards the two failure modes that took the OG images down in production.
 *
 * 1. Satori throws at render time ("Expected <div> to have explicit
 *    display: flex or display: none if it has more than one child node"), so
 *    the only way to catch it is to actually render each image.
 * 2. Satori silently ignores the camelCase `-webkit-` text-clipping props, so
 *    a gradient headline renders as a solid block behind opaque text instead
 *    of clipping to the glyphs. Nothing throws — it just looks broken.
 */

const APP_DIR = resolve(__dirname, "../../app");

function findOgImageRoutes(): { route: string; file: string }[] {
  return readdirSync(APP_DIR, { recursive: true, encoding: "utf8" })
    .filter((entry) => entry.endsWith("opengraph-image.tsx"))
    .map((entry) => ({
      route: entry.replace(/\/opengraph-image\.tsx$/, ""),
      file: join(APP_DIR, entry),
    }))
    .sort((a, b) => a.route.localeCompare(b.route));
}

const routes = findOgImageRoutes();

describe("opengraph-image routes", () => {
  it("finds the OG image routes to check", () => {
    expect(routes.length).toBeGreaterThan(0);
  });

  for (const { route, file } of routes) {
    it(`${route} renders a valid PNG`, async () => {
      const mod = await import(/* @vite-ignore */ file);
      const response = await mod.default();
      const body = new Uint8Array(await response.arrayBuffer());

      expect(response.status).toBe(200);
      expect(response.headers.get("content-type")).toBe("image/png");
      // PNG magic number — proves Satori + resvg produced a real image.
      expect(Array.from(body.slice(0, 4))).toEqual([0x89, 0x50, 0x4e, 0x47]);
      expect(body.byteLength).toBeGreaterThan(1000);
      expect(mod.size).toEqual({ width: 1200, height: 630 });
    }, 60_000);

    it(`${route} avoids -webkit- props Satori ignores`, () => {
      const source = readFileSync(file, "utf8");

      // Use `backgroundClip: "text"` + `color: "transparent"` instead.
      expect(source).not.toContain("WebkitBackgroundClip");
      expect(source).not.toContain("WebkitTextFillColor");
    });
  }
});
