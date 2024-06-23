import { create, css, html } from '//unpkg.com/cuick-dev'

create('progress', {
	steps: 7,
	completed: 5,
	specific: '',
	gap: 6,
	offset: 6,
	reserved: 90,
	template: ({ steps, completed, specific, gap, offset, reserved }) => {
		const stepDegrees = (360 - reserved) / steps
		const spin = 180 + reserved / 2
		if (specific) specific = JSON.parse(specific)

		const gradient = () =>
			Array(steps)
				.fill()
				.map((_, i) => {
					const start = stepDegrees * i
					const end = start + stepDegrees - gap / 2
					const active = specific ? specific[i] === 1 : i < completed
					const color = `var(--progress-${active ? '' : 'in'}active)`
					return `
						${color} ${start}deg ${end}deg,
						transparent ${end}deg ${end + gap}deg
					`
				})
				.join(', ')
		return html`
			<div
				part="circle"
				style=${`--gradient: ${gradient()}; --spin: ${spin}deg`}
			/>
			<div part="circle-cover" style=${`--offset: ${offset}px`} />
		`
	},
	styles: css`
		:host {
			--progress-bg: white;
			--progress-inactive: #b0bec5;
			--progress-active: #00c853;
			aspect-ratio: 1;
			background: var(--progress-bg);
			display: grid;
		}
		:host > * {
			border-radius: 50%;
			grid-area: 1/-1;
			position: relative;
		}
		[part='circle'] {
			background: conic-gradient(var(--gradient));
			transform: rotate(var(--spin));
		}
		[part='circle-cover'] {
			background: var(--progress-bg);
			background-clip: content-box;
			padding: var(--offset);
		}
	`,
})
