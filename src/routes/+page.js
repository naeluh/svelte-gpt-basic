export async function load({ fetch }) {
	const url = `/.netlify/functions/cats`;
	const res = await fetch(url);
	if (res.ok) {
		const data = await res.json();
		console.log(data);
		return {
			props: {
				cats: data
			}
		};
	}
	return {
		status: res.status,
		error: new Error(`Could not load ${url}`)
	};
}
