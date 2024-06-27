export const toEpochDay = (d) => Math.floor(new Date(d) / 8.64e7)
export const fromEpochDay = (d) => new Date(d * 8.64e7)
export const todayEpoch = toEpochDay(new Date())

const api = 'https://api.airtable.com/v0'

const defaults = {
	base: 'appQUkCToplaX7tgp',
	table: 'tbllOILS4y1oobsEt',
}

const token =
	'patEHgBf1N10JSmej.4aa1e42cfb5e2cd91abdb8d1b4e765aa57a7d37526cca8f663d7626f0976394e'

export const getRecords = (options) => {
	const { base, table } = { ...defaults, ...options }
	return fetch([api, base, table].join('/'), {
		headers: { Authorization: `Bearer ${token}` },
	})
		.then((r) => r.json())
		.then((r) => r.records)
}

export const getTable = (options) => {
	const { base, table } = { ...defaults, ...options }
	return fetch([api, 'meta/bases', base, 'tables'].join('/'), {
		headers: { Authorization: `Bearer ${token}` },
	})
		.then((r) => r.json())
		.then((r) => r.tables.find((t) => t.name === table))
}

export const updateRecord = (options) => {
	const { base, table, fields, id } = { ...defaults, ...options }
	fetch([api, base, table, id].join('/'), {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ fields }),
	})
}

export const addRecord = (options) => {
	const { base, table, fields } = { ...defaults, ...options }
	fetch([api, base, table].join('/'), {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ fields }),
	})
}

export const deleteRecord = (options) => {
	const { base, table, id } = { ...defaults, ...options }
	fetch([api, base, table, id].join('/'), {
		method: 'DELETE',
		headers: { Authorization: `Bearer ${token}` },
	})
}
