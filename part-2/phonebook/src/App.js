import React, { useState } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'
import Search from './components/Search'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' },
	])

	const [filter, setFilter] = useState('')

	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const filterPersons = (e) => {
		setFilter(e.target.value)
	}

	const addName = (e) => {
		setNewName(e.target.value)
	}

	const addPerson = (e) => {
		e.preventDefault()

		// Finds person with the same name and return said object
		const exists = persons.find((person) => {
			return person.name === newName
		})

		// If the person was found AND it's name property is the same as the one in state ? Alert : add to array
		if (exists && exists.name === newName) {
			alert(`${newName} already exists in the phonebook`)
		} else {
			setPersons([...persons, { name: newName, number: newNumber }])
		}
	}

	const addNumber = (e) => {
		setNewNumber(e.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Search filter={filter} filterPersons={filterPersons} />

			<h2>add a new</h2>
			<Form
				addPerson={addPerson}
				addName={addName}
				addNumber={addNumber}
				newName={newName}
				newNumber={newNumber}
			/>

			<h2>Numbers</h2>
			<Persons persons={persons} filter={filter} />
		</div>
	)
}

export default App
