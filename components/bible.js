import { create, css, html } from '//unpkg.com/cuick-dev'

create('bible', {
	$vod: '',
	$vodRef: '',
	$vodLink: '',
	$vodImage: '',
	setup({ $vod, $vodRef, $vodLink, $vodImage }) {
		fetch('/bible')
			.then((res) => res.json())
			.then(
				({
					pageProps: {
						verseOfTheDayImageURL,
						verseOfTheDay: {
							content,
							reference: { human },
						},
					},
				}) => {
					$vodImage.value = verseOfTheDayImageURL
					$vod.value = content
					$vodRef.value = human
					$vodLink.value = 'https://www.bible.com/verse-of-the-day'
				}
			)
	},
	template: ({ $vodImage, $vod, $vodRef, $vodLink }) => html`
		<c-heading heading="Bible" />
		<c-card>
			<img src=${$vodImage.value} />
			<div>
				<div>
					<h3>${$vodRef.value}</h3>
					<a href=${$vodLink.value} target="_blank">Read More</a>
				</div>
				<p>${$vod.value}</p>
			</div>
		</c-card>
	`,
	styles: css`
		c-card {
			display: grid;
			gap: 1.5rem;
		}
		img {
			border: 1px solid #cfd8dc;
			border-radius: 0.75rem;
			width: 100px;
		}
		div {
			display: grid;
			gap: 1rem;
		}
		div > div {
			align-items: baseline;
			display: flex;
			gap: 1rem;
		}
		h3,
		p {
			margin: 0;
		}
		a {
			text-decoration: none;
		}
	`,
})
