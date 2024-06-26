import { create, css, html } from '//unpkg.com/cuick-dev'

create('meditation', {
	$meditation: '',
	setup({ $meditation }) {
		fetch('/saa')
			.then((res) => res.text())
			.then((res) => {
				$meditation.value = res
					.split('class="Basic-Text-Frame">')[1]
					.split('</div>')[0]
					.replace('Quotation">“', 'Quotation">')
					.replace('Citation">“', 'Citation">')
					.replaceAll('”</p>', '</p>')
			})
	},
	template: ({ $meditation }) =>
		html`
			<c-heading heading="Daily Meditation" />
			<c-card style="padding: 0 1rem">
				<div>${html([$meditation.value])}</div>
			</c-card>
		`,
	styles: css`
		c-card {
			line-height: 1.5;
		}
		.Literature-Citation {
			font-weight: bold;
		}
	`,
})
