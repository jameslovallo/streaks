import { create, css, html } from '//unpkg.com/cuick-dev'

create('input', {
	placeholder: '',
	template({ placeholder, $value }) {
		return html`
			<input
				placeholder=${placeholder}
				@keydown=${({ key, target }) => {
					if (key === 'Enter' && target.value) {
						this.dispatchEvent(
							new CustomEvent('enter', { detail: target.value })
						)
						target.value = ''
					}
				}}
			/>
		`
	},
	styles: css`
		input {
			background: var(--app-bg);
			border: 1px solid #cfd8dc;
			border-radius: 0.5rem;
			display: block;
			padding: 0.5rem;
			width: 100%;
		}
	`,
})
