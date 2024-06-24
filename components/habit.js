import { updateRecord } from '../src/api.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

create('habit', {
	id: '',
	name: 'Lift Weights',
	icon: '',
	week: '',
	streak: 0,
	last: 0,
	template({ id, name, icon, week, streak, last }) {
		const today = new Date().getDay()
		const todayEpoch = Math.floor(new Date() / 8.64e7)
		const weekArray = week ? JSON.parse(week) : []
		const update = () => {
			this.week = JSON.stringify(weekArray)
			updateRecord({
				table: 'Habits',
				id,
				fields: { week: this.week, streak: this.streak, last: this.last },
			})
		}
		return html`
			<div part="container">
				<c-progress specific=${week} reserved="80"></c-progress>
				${icon ? html`<img src=${icon} />` : ''}
				<div part="streak-container">
					<span part="streak"><c-icon name="fire" size="16" />${streak}</span>
				</div>
				<input
					id=${name}
					type="checkbox"
					checked=${weekArray[today] === 1}
					@input=${({ target: { checked } }) => {
						checked ? this.streak++ : this.streak--
						checked && last ? (this.last = todayEpoch) : this.last--
						weekArray[today] = checked ? 1 : 0
						update()
					}}
				/>
			</div>
			<label for=${name}>${name}</label>
		`
	},
	styles: css`
		:host {
			display: grid;
			gap: 0.5rem;
			width: 100%;
		}
		[part='container'] {
			aspect-ratio: 1;
			display: grid;
			place-items: center;
		}
		[part='container'] > *:not(label) {
			aspect-ratio: 1;
			grid-area: 1/-1;
			position: relative;
			width: 100%;
		}
		[part='container'] > img {
			width: 50%;
		}
		c-progress {
			--progress-bg: var(--app-bg);
		}
		[part='streak-container'] {
			align-items: end;
			display: flex;
			justify-content: center;
		}
		[part='streak'] {
			align-items: center;
			color: #ef6c00;
			display: flex;
			font-size: 14px;
			font-weight: bold;
		}
		svg {
			fill: currentcolor;
			display: block;
			width: 1rem;
		}
		input {
			appearance: none;
			cursor: pointer;
		}
		label {
			text-align: center;
			user-select: none;
		}
	`,
})
