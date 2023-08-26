import { OPENAI_API_KEY } from '$env/static/private';
const API_URL = 'https://api.openai.com/v1/chat/completions';

export async function load({ params }) {
	const model = 'gpt-3.5-turbo';
	const messages: any[] = [
		{ role: 'system', content: `Write an article on the following topic. Use around 1000 words. Format in html using only h1, h2, and p tags.` },
		{ role: 'user', content: `Life on earth` }
	];
	const request = { model, messages };
	const method = 'POST';
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${OPENAI_API_KEY}`
	};
	const body = JSON.stringify(request);
	const content = await fetch(API_URL, { method, headers, body })
		.then((response) => response.json())
		.then((data) => data.choices[0]);

	console.log(content);
	return {
		result: 'ok'
	};
}
