import { getRecords, getTable } from '../src/api.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

const taskTable = await getTable({ table: 'Tasks' })
const tasks = await getRecords({ table: 'Tasks' })

const { choices: categories } = taskTable.fields.find(
	(f) => f.name === 'category'
).options

console.log(categories)

create('list', {
	$filter: 'All',
	template: ({ $filter }) => html`
		<div>
			<c-select>
				<select @change=${({ target: { value } }) => ($filter.value = value)}>
					<option>All</option>
					${categories.map(({ name }) => html`<option>${name}</option>`)}
				</select>
			</c-select>
			<button>
				<c-icon name="checkAll" size="20" />
			</button>
			<button>
				<c-icon name="plus" />
			</button>
		</div>
		<ul>
			${tasks.map(({ id, fields: { name, category, due } }) => {
				const date = () => {
					const todayEpoch = Math.floor(new Date() / 8.64e7)
					if (due === todayEpoch) {
						return 'Today'
					} else if (due < todayEpoch - 1) {
						return 'Overdue'
					} else {
						const d = new Date(due * 8.64e7)
						return d.getMonth() + 1 + '/' + d.getDate()
					}
				}
				return ['All', category].includes($filter.value)
					? html`
							<li>
								<div>
									${name}
									<small>
										<span>${category}</span>
										<span>Due: ${date()}</span>
									</small>
								</div>
								<c-icon name="check" size="20" />
							</li>
					  `
					: html``
			})}
		</ul>
	`,
	styles: css`
		:host {
			background: white;
			border-radius: 1.25rem;
			box-shadow: 0 1px 2px #8888;
			display: grid;
			gap: 1rem;
			padding: 0.75rem 0 1rem;
		}
		:host > div {
			align-items: center;
			display: flex;
			font-weight: bold;
			gap: 0.5rem;
			padding: 0 0.5rem 0 0.75rem;
		}
		button {
			background: none;
			border: 0;
			padding: 0.25rem;
		}
		c-select:first-of-type {
			margin-right: auto;
		}
		ul {
			display: grid;
			gap: 0.75rem;
			list-style: none;
			margin: 0;
			padding: 0;
		}
		li {
			align-items: center;
			display: flex;
			gap: 0.5rem;
			justify-content: space-between;
			padding: 0 1rem;
		}
		li > div {
			display: grid;
			font-size: 14px;
			gap: 0.25rem;
		}
		li > div > small {
			color: #546e7a;
			display: flex;
			font-family: monospace;
			font-size: 12px;
			gap: 1rem;
		}
	`,
})
