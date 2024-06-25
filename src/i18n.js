const locales = {
	en: {
		today: 'Today',
		habits: 'Habits',
		tasks: 'Tasks',
		addTask: 'Add Task',
		gratitude: 'Gratitude',
		gratitudePrompt: "I'm grateful for...",
	},
	es: {
		today: 'Hoy',
		habits: 'Habitos',
		tasks: 'Tareas',
		addTask: 'Anadir Tarea',
		gratitude: 'Agradecimientos',
		gratitudePrompt: 'Estoy agradecido por...',
	},
}

export const i18n = locales[navigator.language.split('-')[0]]
