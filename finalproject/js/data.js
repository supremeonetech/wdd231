export async function fetchTrends(url = 'data/trends.json') {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}