import icons from '../src/icons.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

create('icon', {
	name: 'user',
	color: 'currentcolor',
	size: 24,
	template: ({ name, color, size }) => html`
		<svg viewBox="0 0 24 24" style=${`fill: ${color}; width: ${size}px`}>
			<path d=${icons[name]} />
		</svg>
	`,
	styles: css`
		svg {
			display: block;
		}
	`,
})
