const BASE_PATH = "https://localhost:7277";

export async function getTodos() {
	fetch(`${BASE_PATH}/todoitems`)
		.then((response) => response.json())
		.then((data) => console.log(data));
}

export async function getTodo(id: number) {
	fetch(`${BASE_PATH}/todoitems/${id}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
}
