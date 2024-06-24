import { create, css, html } from '//unpkg.com/cuick-dev'

create('nav', {
	template: () => html`
		<nav>
			<div>
				<button aria-label="Friends" title="Friends">
					<c-icon name="user" />
				</button>
				<c-select>
					<select>
						<option>James</option>
					</select>
				</c-select>
			</div>
			<div style="gap: 0.5rem">
				<button aria-label="Add task" title="Add task">
					<c-icon name="friends" />
				</button>
				<button aria-label="Settings" title="Settings">
					<c-icon name="settings" />
				</button>
			</div>
		</nav>
		<main>
			<slot />
		</main>
		<footer></footer>
	`,
	styles: css`
		nav {
			align-items: center;
			display: flex;
			font-weight: bold;
			gap: 1rem;
			justify-content: space-between;
			padding: 0.5rem;
		}
		div {
			align-items: center;
			display: flex;
		}
		button {
			background: transparent;
			border: 0;
			padding: 0.5rem;
		}
		svg {
			display: block;
			fill: currentcolor;
			width: 1.5rem;
		}
		main {
			margin: 0 auto;
			max-width: 60ch;
			padding: 1rem;
		}
	`,
})
