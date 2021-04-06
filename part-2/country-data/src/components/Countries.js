import React from 'react'

const Countries = ({ countries, setDetails }) => {
	return (
		<div>
			{countries &&
				countries.map((country) => {
					return (
						<div key={country.name}>
							<span>{country.name}</span>
							<button
								onClick={() => {
									setDetails(country)
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
