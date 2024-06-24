import { create, css, html } from '//unpkg.com/cuick-dev'

create('heading', {
	heading: 'Heading',
	template: ({ heading }) => html`
		<h2>${heading}</h2>
		<slot />
	`,
	styles: css`
		:host {
			align-items: center;
			display: flex;
			margin: 2.5rem 0 1rem;
		}
		h2 {
			margin: 0 auto 0 0;
		}
		slot::slotted(button) {
			background: transparent;
			border: 0;
			padding: 0.5rem;
		}
	`,
})
