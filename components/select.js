import { create, css, html } from '//unpkg.com/cuick-dev'

create('select', {
	$label: '',
	setup({ $label, children }) {
		$label.value = children[0].value
	},
	template({ $label, children }) {
		return html`
			<select
				@change=${({ target: { value } }) => {
					$label.value = value
					this.dispatchEvent(new CustomEvent('change', { detail: { value } }))
				}}
			>
				${[...children].map(({ value }) => html`<option>${value}</option>`)}
			</select>
			<span>${$label.value}<c-icon name="chevronDown" /></span>
		`
	},
	styles: css`
		:host {
			position: relative;
		}
		select {
			display: block;
			height: 100%;
			left: 0;
			opacity: 0;
			outline: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}
		span {
			align-items: center;
			display: flex;
			pointer-events: none;
		}
	`,
})
