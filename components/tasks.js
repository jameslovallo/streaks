import { fromEpochDay, getRecords, getTable, todayEpoch } from '../src/api.js'
import { i18n } from '../src/i18n.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

const taskTable = await getTable({ table: 'Tasks' })
const tasks = await getRecords({ table: 'Tasks' })

const { choices: categories } = taskTable.fields.find(
	(f) => f.name === 'category'
).options

create('tasks', {
	$filter: 'All',
	$taskCount: tasks.length,
	template: ({ $filter, $taskCount }) => html`
		<c-heading heading=${i18n.tasks}>
			<c-select @change=${({ detail: { value } }) => ($filter.value = value)}>
				<option>All</option>
				${categories.map(({ name }) => html`<option>${name}</option>`)}
			</c-select>
		</c-heading>
		<c-card>
			<c-input
				placeholder=${i18n.addTask}
				@enter=${({ detail }) => {
					const task = {
						fields: {
							name: detail,
							category: $filter.value,
							due: todayEpoch,
						},
					}
					tasks.push(task)
					$taskCount.value = tasks.length
				}}
			/>
			<ul data-task-count=${$taskCount.value}>
				${tasks.map(({ id, fields: { name, category, due } }) => {
					const date = () => {
						if (due === todayEpoch) {
							return 'Today'
						} else if (due < todayEpoch - 1) {
							return 'Overdue'
						} else {
							const d = fromEpochDay(due)
							const day = d.toLocaleString('default', { weekday: 'long' })
							return day + ', ' + (d.getMonth() + 1) + '/' + d.getDate()
						}
					}
					return ['All', category].includes($filter.value)
						? html`
								<li>
									<div>
										${name}
										<small>
											<span>
												<c-icon name="tag" size="16" />
												${category}
											</span>
											<span>
												<c-icon name="bullseye" size="16" />${date()}
											</span>
										</small>
									</div>
									<c-check />
								</li>
						  `
						: html``
				})}
			</ul>
		</c-card>
	`,
	styles: css`
		button {
			background: none;
			border: 0;
			padding: 0.25rem;
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
		}
		li > div {
			display: grid;
			gap: 0.25rem;
		}
		li > div > small {
			color: #546e7a;
			display: flex;
			font-family: monospace;
			font-size: 14px;
			gap: 1rem;
		}
		li > div > small > span {
			align-items: center;
			display: flex;
			gap: 0.25rem;
		}
	`,
})
