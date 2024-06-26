import { create, css, html } from '//unpkg.com/cuick-dev'

create('check', {
	template: () =>
		html`<input type="checkbox" /><c-icon name="check" size="16" />`,
	styles: css`
		:host {
			border-radius: 0.25rem;
			color: transparent;
			display: grid;
			place-items: center;
		}
		input,
		c-icon {
			grid-area: 1/-1;
			position: relative;
		}
		input {
			appearance: none;
			background: var(--app-bg);
			border: 1px solid #cfd8dc;
			border-radius: 50%;
			cursor: pointer;
			height: 24px;
			width: 24px;
		}
		c-icon {
			pointer-events: none;
		}
		input:hover {
			background: #b9f6ca;
			border-color: #00c853;
		}
		input:hover + c-icon {
			color: #00c853;
		}
		input:checked {
			background: #00c853;
			border-color: #00c853;
		}
		input:checked + c-icon {
			color: white;
		}
	`,
})
