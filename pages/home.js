import { i18n } from '../src/i18n.js'
import { create, html } from '//unpkg.com/cuick-dev'

create('home', {
	template: () => html`
		<h1>${i18n.today}</h1>
		<c-habits />
		<c-tasks />
		<c-gratitude />
		<c-meditation />
	`,
})
