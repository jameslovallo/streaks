import { getRecords, updateRecord } from '../src/api.js'
import { i18n } from '../src/i18n.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

const today = new Date().getDay()
const response = await getRecords({ table: 'Habits' })

response.forEach(({ id, fields: { week, last } }, i) => {
	// if on sunday
	if (today === 0) {
		const weekArray = JSON.parse(week)
		const weekSum = weekArray.reduce((a, v) => a + v, 0)
		// if old week data
		if (weekSum > 1 && weekArray[0] !== 1) {
			const newWeek = '[0,0,0,0,0,0,0]'
			response[i].fields.week = newWeek
			updateRecord({ table: 'Habits', id, fields: { week: newWeek } })
		}
	}
	// check days since last completion
	const todayEpoch = Math.floor(new Date() / 8.64e7)
	if (last && todayEpoch - last > 1) {
		response[i].fields.streak = 0
		updateRecord({ table: 'Habits', id, fields: { streak: 0, last: null } })
	}
})

create('habits', {
	template: () => {
		return html` <c-heading heading=${i18n.habits}>
				<button><c-icon name="plus" /></button>
			</c-heading>
			<div part="grid">
				${response.map(
					({ id, fields: { name, icon, week, streak, last } }) => html`
						<c-habit
							id=${id}
							name=${name}
							icon=${icon}
							week=${week}
							streak=${streak}
							last=${last}
						>
							<img src="https://img.icons8.com/?size=100&id=12975&format=png" />
						</c-habit>
					`
				)}
			</div>`
	},
	styles: css`
		[part='grid'] {
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(auto-fill, minmax(10ch, 1fr));
			justify-content: center;
		}
	`,
})
