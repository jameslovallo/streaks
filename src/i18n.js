const locales = {
	en: {
		today: 'Today',
		habits: 'Habits',
		tasks: 'Tasks',
		addTask: 'Add Task',
		gratitude: 'Gratitude',
		gratitudePrompt: "I'm grateful for...",
		spendTime: "Spend time in God's word",
		read: 'Read',
		listen: 'Listen',
	},
	es: {
		today: 'Hoy',
		habits: 'Habitos',
		tasks: 'Tareas',
		addTask: 'Anadir Tarea',
		gratitude: 'Agradecimientos',
		gratitudePrompt: 'Estoy agradecido por...',
		spendTime: 'Gastar tiempo en la palabra de Dios',
		read: 'Leer',
		listen: 'Escuchar',
	},
}

export const i18n = locales[navigator.language.split('-')[0]]
