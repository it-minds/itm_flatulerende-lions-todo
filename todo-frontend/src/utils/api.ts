const BASE_PATH = "https://localhost:7277";

export async function getTodos() {
	fetch(`${BASE_PATH}/todoitems`)
		.then((response) => response.json())
		.then((data) => console.log(data));
}

export async function getTodo(id: number) {
	const response: Response = await fetch(`${BASE_PATH}/todoitems/${id}`);

	const data: JSON = await response.json();

	if (response.ok) {
		return data;
	}
	return false;
}
