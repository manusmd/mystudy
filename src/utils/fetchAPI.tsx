export default async function fetchAPI(url: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
    },
  });
  const body = await response.json();
  return body;
}
