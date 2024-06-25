import { create, css, html } from '//unpkg.com/cuick-dev'

create('card', {
	template: () => html`<slot />`,
	styles: css`
		:host {
			background: white;
			border-radius: 1.25rem;
			box-shadow: 0 1px 2px #8888;
			display: grid;
			gap: 1rem;
			padding: 1rem;
		}
	`,
})
