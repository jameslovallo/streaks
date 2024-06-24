import { create, css, html } from '//unpkg.com/cuick-dev'

create('slider', {
	checked: false,
	template({ checked }) {
		return html`
			<div
				part="track"
				style=${`--state: ${checked ? '#c00' : '#0a0'}`}
				@scroll=${({ target: { scrollLeft } }) => {
					if (scrollLeft === 0) {
						this.checked = !checked
						this.dispatchEvent(new Event('toggle'))
					}
				}}
			>
				<c-icon name=${checked ? 'close' : 'check'} />
				<slot part="slider">Slide</slot>
			</div>
		`
	},
	styles: css`
		:host {
			display: block;
			position: relative;
		}
		@keyframes swipe {
			to {
				background: var(--state);
			}
		}
		[part='track'] {
			animation: swipe auto linear both;
			animation-range: 0% 100%;
			animation-timeline: scroll(x self);
			background: transparent;
			display: flex;
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			scrollbar-width: none;
		}
		[part='track'] > svg {
			fill: white;
			display: block;
			position: absolute;
			right: 1rem;
			top: calc(50% - 0.75rem);
			width: 1.5rem;
		}
		[part='slider'] {
			background: white;
			display: block;
			margin-right: 33%;
			min-width: 100%;
			padding: 0.75rem;
			position: relative;
			scroll-snap-align: center;
		}
	`,
})
