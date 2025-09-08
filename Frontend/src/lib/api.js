const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function api(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    credentials: 'include',
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || `Request failed: ${res.status}`);
  return data;
}
