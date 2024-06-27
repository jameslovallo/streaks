const locales = {
	en: {
		today: 'Today',
		habits: 'Habits',
		tasks: 'Tasks',
		addTask: 'Add Task',
		gratitude: 'Gratitude',
		gratitudePrompt: "I'm grateful for...",
		spendTime: "Spend time in God's word",
		readMore: 'Read More',
		plans: 'My Reading Plans',
	},
	es: {
		today: 'Hoy',
		habits: 'Habitos',
		tasks: 'Tareas',
		addTask: 'Anadir Tarea',
		gratitude: 'Agradecimientos',
		gratitudePrompt: 'Estoy agradecido por...',
		spendTime: 'Gastar tiempo en la palabra de Dios',
		readMore: 'Leer Mas',
		plans: 'Mis planes de lectura',
	},
}

export const i18n = locales[navigator.language.split('-')[0]]
