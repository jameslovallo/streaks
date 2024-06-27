import { i18n } from '../src/i18n.js'
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
			<div part="vod">
				<img src=${$vodImage.value} />
				<div part="vod-content">
					<h3>${$vodRef.value}</h3>
					<p>${$vod.value}</p>
				</div>
			</div>
			<div part="actions">
				<a href=${$vodLink.value}>
					<c-icon name="bible" />
					${i18n.readMore}
				</a>
				<a href="https://www.bible.com/users/lovalloj/reading-plans">
					${i18n.plans}
				</a>
			</div>
		</c-card>
	`,
	styles: css`
		c-card {
			gap: 1.5rem;
		}
		img {
			border-radius: 0.75rem;
			width: 100px;
		}
		[part='vod'] {
			align-items: end;
			display: flex;
			gap: 1rem;
		}
		[part='vod-content'] {
			display: grid;
			gap: 0.5rem;
		}
		[part='actions'] {
			display: flex;
			gap: 1rem;
		}
		h3,
		h4,
		p {
			margin: 0;
		}
		a {
			text-decoration: none;
		}
	`,
})
