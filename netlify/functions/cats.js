const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';
const fetch = require('node-fetch');

exports.handler = async (event) => {
	try {
		const response = await fetch(API_ENDPOINT);
		const data = await response.json();
		return { statusCode: 200, body: JSON.stringify({ data }) };
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Failed fetching data' })
		};
	}
};
