const BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:58044/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || 'Request failed');
  }
  if (res.status === 204) return null;
  return res.json();
}

export const productsApi = {
  getAll: (category) => request(`/products${category ? `?category=${category}` : ''}`),
};

export const ordersApi = {
  place: (data) => request('/orders', { method: 'POST', body: JSON.stringify(data) }),
};
