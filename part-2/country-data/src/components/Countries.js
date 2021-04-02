import React from 'react'

const Countries = ({ countries }) => {
	return (
		<div>
			{countries &&
				countries.map((country) => {
					return <p key={country.numericCode}>{country.name}</p>
				})}
		</div>
	)
}

export default Countries
