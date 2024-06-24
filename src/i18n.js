const locales = {
	en: {
		today: 'Today',
		habits: 'Habits',
		tasks: 'Tasks',
		youCanDoThis: 'You can do this',
		thisWeek: 'This week',
		nextReward: (v) => `Next reward in ${v} days`,
	},
	es: {
		today: 'Hoy',
		habits: 'Habitos',
		tasks: 'Tareas',
		youCanDoThis: 'Puedes hacer esto',
		thisWeek: 'Esta semana',
		nextReward: (v) => `Próxima recompensa en ${v} días`,
	},
}

export const i18n = locales[navigator.language.split('-')[0]]
