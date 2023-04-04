const key = process.env.GPT_API_KEY;
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
	apiKey: key
});
const openai = new OpenAIApi(configuration);

const handler = async (event) => {
	const prompt = `Generate 5 objects of mock data in JSON format`;
	try {
		const completion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: prompt }]
		});
		return {
			statusCode: 200,
			body: JSON.stringify(completion.data.choices[0].message.content),
			message: 'Successful',
			response: completion.data.choices[0].message.content
		};
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Failed fetching data' })
		};
	}
};

export { handler };
