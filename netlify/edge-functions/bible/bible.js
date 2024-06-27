export default async (request, context) => {
	const meditation = await fetch(
		'https://www.bible.com/_next/data/O77dtbkonlQ1VaMMrneOV/en.json'
	)
	return meditation
}
