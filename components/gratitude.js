import { i18n } from '../src/i18n.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

const items = []

create('gratitude', {
	$itemCount: items.length,
	template: ({ $itemCount }) => html`
		<c-heading heading=${i18n.gratitude}> </c-heading>
		<c-card>
			<c-input
				placeholder=${i18n.gratitudePrompt}
				@enter=${({ detail }) => {
					items.push(detail)
					$itemCount.value = items.length
				}}
			/>
			<ol data-item-count=${$itemCount.value}>
				${items.map((item) => html`<li>${item}</li>`)}
				${!items.length ? html`<li />` : ''}
			</ol>
		</c-card>
	`,
	styles: css`
		ol {
			display: grid;
			gap: 0.5rem;
			margin: 0 0 0 1rem;
			padding: 0;
		}
	`,
})
