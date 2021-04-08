import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'
import Search from './components/Search'

import {
	getAllPersons,
	savePerson,
	deletePerson,
	updatePerson,
} from './services'

const App = () => {
	const [persons, setPersons] = useState([])

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
		const samePerson = persons.find((person) => {
			return person.name === newName
		})

		// If the person was found AND it's name property is the same as the one in state ? Alert : add to array
		if (samePerson && samePerson.name === newName) {
			if (
				window.confirm(
					`${newName} already exists in the phonebook, replace the old number with a new one?`
				)
			) {
				const updatedPerson = {
					name: samePerson.name,
					number: newNumber,
					id: samePerson.id,
				}
				updatePerson(updatedPerson).then((person) => {
					getAllPersons().then((persons) => {
						setPersons(persons)
					})
				})
			}
		} else {
			const person = { name: newName, number: newNumber }

			savePerson(person).then((person) => {
				setPersons([...persons, person])
			})
		}
	}

	const removePerson = (id) => {
		deletePerson(id).then(() => {
			const filtered = persons.filter((person) => {
				return person.id !== id
			})
			setPersons(filtered)
		})
	}

	const addNumber = (e) => {
		setNewNumber(e.target.value)
	}

	useEffect(() => {
		getAllPersons().then((persons) => {
			setPersons(persons)
		})
	}, [])

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
			<Persons persons={persons} filter={filter} removePerson={removePerson} />
		</div>
	)
}

export default App
