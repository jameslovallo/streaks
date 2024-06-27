import {
	addRecord,
	deleteRecord,
	getRecords,
	todayEpoch,
	toEpochDay,
} from '../src/api.js'
import { i18n } from '../src/i18n.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

const items = await getRecords({ table: 'Gratitude' })
items.forEach(({ id, createdTime }) => {
	const date = toEpochDay(createdTime)
	if (todayEpoch > date) {
		deleteRecord({ table: 'Gratitude', id })
	}
})

create('gratitude', {
	$itemCount: items.length,
	template: ({ $itemCount }) => html`
		<c-heading heading=${i18n.gratitude}> </c-heading>
		<c-card>
			<c-input
				placeholder=${i18n.gratitudePrompt}
				@enter=${({ detail }) => {
					items.push({ fields: { name: detail } })
					$itemCount.value = items.length
					addRecord({
						table: 'Gratitude',
						fields: { name: detail },
					})
				}}
			/>
			<ol data-item-count=${$itemCount.value}>
				${!items.length
					? html`<li />`
					: items.map(({ fields: { name } }) => html`<li>${name}</li>`)}
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
