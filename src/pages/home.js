import { i18n } from '../i18n.js'
import { create, html } from '//unpkg.com/cuick-dev'

create('home', {
	template: () => html`
		<h1>${i18n.today}</h1>
		<p>${i18n.youCanDoThis}</p>
		<c-heading heading=${i18n.habits}>
			<button><c-icon name="plus" /></button>
		</c-heading>
		<c-habit-list></c-habit-list>
		<c-heading heading=${i18n.lists}>
			<button><c-icon name="plus" /></button>
		</c-heading>
		<c-task-list></c-task-list>
	`,
})
