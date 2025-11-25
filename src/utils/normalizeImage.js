// Small helper to normalize image source values coming from API or mocks.
// Returns a string suitable for next/image: either an absolute URL (http/https)
// or a path starting with '/'. If input is falsy, returns a placeholder path.
export function normalizeImageSrc(raw) {
  const placeholder = '/placeholder.png'; // ensure you have this in /public or change

  if (raw === undefined || raw === null || raw === '') return placeholder;

  // If it's already a string, handle it directly
  if (typeof raw === 'string') {
    const s = raw.trim();
    if (!s) return placeholder;
    // If it's an absolute URL with protocol, keep it
    if (/^https?:\/\//i.test(s)) return s; // absolute URL

    // If it's protocol-relative (//host/path), assume http
    if (/^\/\//.test(s)) return 'http:' + s;

    // If it's like 'hostname:port/...' (no protocol), prepend http://
    // e.g. 'localhost:3333/public/...' should become 'http://localhost:3333/public/...'
    if (/^[^\/]+:\d+\//.test(s) || /^[^\/]+:\d+$/.test(s)) {
      return 'http://' + s;
    }
    // remove a possível prefixo '/public' que algumas APIs retornam
    // (em Next, arquivos em /public são servidos a partir da raiz '/')
    const noPublic = s.startsWith('/public/') ? s.replace('/public', '') : s.replace(/^public\//, '/');
    return noPublic.startsWith('/') ? noPublic : '/' + noPublic; // ensure leading slash
  }

  // If it's an object (e.g. imported image, or { url: '...' }) try common fields
  if (typeof raw === 'object') {
    const candidate = raw.url || raw.src || raw.default || raw.path || '';
    return normalizeImageSrc(candidate);
  }

  // Fallback: coerce to string
  try {
    const s = String(raw);
    return normalizeImageSrc(s);
  } catch (err) {
    return placeholder;
  }
}
