import { i18n } from '../src/i18n.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

create('bible', {
	$vodImage: '',
	$vod: '',
	$vodRef: '',
	$chapterLink: '',
	$chapterAudioLink: '',
	setup({ $vodImage, $vod, $vodRef, $chapterLink, $chapterAudioLink }) {
		const bibleRoot = 'https://www.bible.com'
		const parser = new DOMParser()
		fetch('/bible')
			.then((res) => res.text())
			.then((text) => {
				const doc = parser.parseFromString(text, 'text/html')
				const data = doc.querySelector('#__NEXT_DATA__').textContent
				const json = JSON.parse(data)
				// https://www.bible.com/bible/111/1PE.5.NIV
				// https://www.bible.com/audio-bible/111/1PE.5.NIV
				const {
					props: {
						pageProps: {
							verseOfTheDay: {
								content,
								reference: { human, usfm, version_id },
							},
							verseOfTheDayImageURL,
						},
					},
				} = json
				const [book, chapter] = usfm[0].split('.')
				const ref = `/${version_id}/${book}.${chapter}`
				$vodImage.value = verseOfTheDayImageURL
				$vod.value = content
				$vodRef.value = human
				$chapterLink.value = `${bibleRoot}/bible${ref}`
				$chapterAudioLink.value = `${bibleRoot}/audio-bible${ref}`
			})
	},
	template: ({
		$vodImage,
		$vod,
		$vodRef,
		$chapterLink,
		$chapterAudioLink,
	}) => html`
		<c-heading heading="Bible" />
		<c-card>
			<header>
				<img src=${$vodImage.value} />
				<div>
					<h3>${$vodRef.value}</h3>
					<div>
						<a href=${$chapterLink.value} target="_blank">
							<c-icon name="bible" size="16" />
							${i18n.read}
						</a>
						<a href=${$chapterAudioLink.value} target="_blank">
							<c-icon name="play" size="20" />
							${i18n.listen}
						</a>
					</div>
				</div>
			</header>
			<p>${$vod.value}</p>
		</c-card>
	`,
	styles: css`
		c-card {
			gap: 1.5rem;
		}
		header {
			align-items: end;
			display: grid;
			gap: 1rem;
			grid-template-columns: 10ch 1fr;
		}
		img {
			border-radius: 0.75rem;
		}
		header > div {
			display: grid;
			gap: 0.5rem;
		}
		header > div > div {
			display: flex;
			gap: 0.5rem;
		}
		h3,
		h4,
		p {
			margin: 0;
		}
		a {
			align-items: center;
			background: var(--app-bg);
			color: black;
			border-radius: 0.25rem;
			display: flex;
			font-size: 1rem;
			gap: 0.5rem;
			padding: 0.25rem 0.75rem 0.25rem 0.5rem;
			text-decoration: none;
		}
	`,
})
