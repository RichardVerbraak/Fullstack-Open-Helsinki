import React from 'react'

const CountryDetails = ({ country }) => {
	return (
		<div>
			<div>
				<div>
					<h1>{country.name}</h1>
					<div>
						<p>capital {country.capital}</p>
						<p>population {country.population}</p>
					</div>
					<div>
						<h2>languages</h2>
						<ul>
							{country.languages &&
								country.languages.map((language) => {
									return <li key={language.iso639_1}>{language.name}</li>
								})}
						</ul>
					</div>
					<img width={125} src={country.flag} alt={`Flag of ${country.name}`} />
				</div>
			</div>
		</div>
	)
}

export default CountryDetails
