import { create, css, html } from '//unpkg.com/cuick-dev'

create('select', {
	$label: '',
	setup({ children, $label }) {
		$label.value = children[0].value
		children[0].addEventListener('change', ({ target: { value } }) => {
			$label.value = value
		})
	},
	template: ({ $label }) => html`
		<slot />
		<span>${$label.value}<c-icon name="chevronDown" /></span>
	`,
	styles: css`
		:host {
			display: inline-grid;
		}
		slot,
		span {
			display: block;
			grid-area: 1/-1;
		}
		slot::slotted(select) {
			appearance: none;
			background: none;
			border: 0;
			outline: 0;
			opacity: 0;
		}
		span {
			align-items: center;
			display: flex;
			pointer-events: none;
		}
	`,
})
