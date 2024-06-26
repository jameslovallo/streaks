export default async (request, context) => {
	const meditation = await fetch(
		'https://saa-recovery.org/daily-meditation-from-voices-of-recovery/'
	)
	return meditation
}
