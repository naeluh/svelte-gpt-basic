// export async function load({ fetch }) {
// 	const url = `/.netlify/functions/cats`;
// 	try {
// 		const res = await fetch(url);

// 		if (res.ok) {
// 			const data = await res.json();
// 			console.log(data);
// 			return {
// 				status: 200,
// 				props: data
// 			};
// 		}
// 	} catch (error) {
// 		return {
// 			status: 500,
// 			error: new Error(`Could not load ${url}`)
// 		};
// 	}
// 	const res = await fetch(url);
// 	if (res.ok) {
// 		const data = await res.json();
// 		console.log(data);
// 		return {
// 			status: res.status,
// 			body: data
// 		};
// 	}
// 	return {
// 		status: res.status,
// 		error: new Error(`Could not load ${url}`)
// 	};
// }
