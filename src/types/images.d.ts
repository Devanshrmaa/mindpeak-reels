/**
 * Image module declarations.
 * In Vite, importing images returns a string URL.
 * In Next.js, importing images returns StaticImageData.
 * This declaration keeps the Vite-compatible string type
 * for existing <img src={logo} /> patterns.
 */
declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}
