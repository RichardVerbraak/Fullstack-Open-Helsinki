import React, { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-1234567' },
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const addName = (e) => {
		setNewName(e.target.value)
	}

	console.log(newName)

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
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={addName} />
				</div>
				<div>
					number: <input value={newNumber} onChange={addNumber} />
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person, i) => {
				return (
					<p key={person.name}>
						{person.name} <span>{person.number}</span>
					</p>
				)
			})}
		</div>
	)
}

export default App
