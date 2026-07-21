import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  toAbsoluteUrl,
  submitToIndexNow,
  INDEXNOW_KEY,
  INDEXNOW_HOST,
  INDEXNOW_KEY_LOCATION,
} from '@/lib/indexNow';

describe('indexNow.toAbsoluteUrl', () => {
  it('expands site-relative paths', () => {
    expect(toAbsoluteUrl('/blog/foo')).toBe('https://mindpeakinstitute.com/blog/foo');
    expect(toAbsoluteUrl('blog/foo')).toBe('https://mindpeakinstitute.com/blog/foo');
  });

  it('keeps well-formed absolute URLs on our host', () => {
    expect(toAbsoluteUrl('https://mindpeakinstitute.com/x')).toBe(
      'https://mindpeakinstitute.com/x',
    );
  });

  it('rejects foreign hosts, patterns, and empties', () => {
    expect(toAbsoluteUrl('https://evil.com/x')).toBeNull();
    expect(toAbsoluteUrl('/blog/[slug]')).toBeNull();
    expect(toAbsoluteUrl('/tag/*')).toBeNull();
    expect(toAbsoluteUrl('')).toBeNull();
    expect(toAbsoluteUrl('   ')).toBeNull();
  });

  it('key location points at the hosted key file', () => {
    expect(INDEXNOW_KEY_LOCATION).toBe(`https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`);
  });
});

describe('indexNow.submitToIndexNow', () => {
  afterEach(() => vi.restoreAllMocks());

  it('posts a well-formed payload and reports success', async () => {
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(null, { status: 200 }));

    const result = await submitToIndexNow(['/a', '/b', '/a']); // dupes collapse
    expect(result.ok).toBe(true);
    expect(result.status).toBe(200);
    expect(result.submitted).toBe(2);

    const [endpoint, init] = fetchMock.mock.calls[0];
    expect(endpoint).toBe('https://api.indexnow.org/indexnow');
    const body = JSON.parse((init as RequestInit).body as string);
    expect(body.host).toBe(INDEXNOW_HOST);
    expect(body.key).toBe(INDEXNOW_KEY);
    expect(body.keyLocation).toBe(INDEXNOW_KEY_LOCATION);
    expect(body.urlList).toEqual([
      'https://mindpeakinstitute.com/a',
      'https://mindpeakinstitute.com/b',
    ]);
  });

  it('never calls the network when there is nothing valid to submit', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const result = await submitToIndexNow(['/blog/[slug]', 'https://evil.com/x']);
    expect(result.ok).toBe(false);
    expect(result.submitted).toBe(0);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('does not throw when the network fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('network down'));
    const result = await submitToIndexNow('/a');
    expect(result.ok).toBe(false);
    expect(result.error).toContain('network down');
  });
});
