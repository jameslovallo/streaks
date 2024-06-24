import { create, css, html } from '//unpkg.com/cuick-dev'

create('list', {
	name: 'Work',
	template: ({ name }) => html`
		<div>
			<c-select>
				<select>
					<option>${name}</option>
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
			${Array(5)
				.fill()
				.map(
					(_) =>
						html`
							<li>
								<div>
									Task Name
									<small>
										<c-select>
											<select>
												<option>Category (datalist?)</option>
											</select>
										</c-select>
										<span>Due: Today</span>
									</small>
								</div>
								<c-icon name="check" size="20" />
							</li>
						`
				)}
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
			font-size: 12px;
			gap: 1rem;
		}
	`,
})
