import React from 'react'

const CountryDetails = ({ details }) => {
	return (
		<div>
			{details &&
				details.map((country) => {
					return (
						<div key={country.name}>
							<h1>{country.name}</h1>
							<div>
								<p>capital {country.capital}</p>
								<p>population {country.population}</p>
							</div>
							<div>
								<h2>languages</h2>
								<ul>
									{country.languages.map((language) => {
										return <li key={language.iso639_1}>{language.name}</li>
									})}
								</ul>
							</div>
							<img
								width={125}
								src={country.flag}
								alt={`Flag of ${country.name}`}
							/>
						</div>
					)
				})}
		</div>
	)
}

export default CountryDetails
