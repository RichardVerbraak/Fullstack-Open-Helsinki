import React from 'react'

const Persons = ({ persons, filter }) => {
	return (
		<div>
			{persons
				.filter((person) => {
					return person.name.toLowerCase().includes(filter.toLowerCase())
				})
				.map((person) => {
					return (
						<p key={person.name}>
							{person.name} <span>{person.number}</span>
						</p>
					)
				})}
		</div>
	)
}

export default Persons
