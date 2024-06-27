export default async (request, context) => {
	const bibleHomepage = await fetch('https://www.bible.com')
	return bibleHomepage
}
