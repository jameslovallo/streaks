import { i18n } from '../i18n.js'
import { create, html } from '//unpkg.com/cuick-dev'

create('home', {
	template: () => html`
		<h1>${i18n.today}</h1>
		<c-heading heading=${i18n.habits}>
			<button><c-icon name="plus" /></button>
		</c-heading>
		<c-habit-list></c-habit-list>
		<c-heading heading=${i18n.tasks}>
			<button><c-icon name="plus" /></button>
		</c-heading>
		<c-list></c-list>
	`,
})
