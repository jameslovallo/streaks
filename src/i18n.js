const locales = {
	en: {
		today: 'Today',
		habits: 'Habits',
		tasks: 'Tasks',
		gratitude: 'Gratitude',
	},
	es: {
		today: 'Hoy',
		habits: 'Habitos',
		tasks: 'Tareas',
		gratitude: 'Agradecimientos',
	},
}

export const i18n = locales[navigator.language.split('-')[0]]
