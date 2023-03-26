//Promise<T | T[]>
export type Data = {
  id: number,
  species: string,
  name:string
}

export type Completo = {
  id: number,
  name: string
}

export async function fetchData<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
