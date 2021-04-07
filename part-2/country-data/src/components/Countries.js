import React from 'react'

const Countries = ({ countries, setCountryDetails }) => {
	return (
		<div>
			{countries &&
				countries.map((country) => {
					return (
						<div key={country.name}>
							<span>{country.name}</span>
							<button
								onClick={() => {
									setCountryDetails(country)
								}}
							>
								show
							</button>
						</div>
					)
				})}
		</div>
	)
}

export default Countries
