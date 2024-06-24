import { create, css, html } from '//unpkg.com/cuick-dev'

create('select', {
	template: () => html`<slot /><c-icon name="chevronDown" />`,
	styles: css`
		:host {
			align-items: center;
			display: flex;
		}
		slot::slotted(select) {
			appearance: none;
			background: none;
			border: 0;
			padding: 0 1.25rem 0 0.25rem;
		}
		c-icon {
			margin-left: -1.25rem;
		}
	`,
})
