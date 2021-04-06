import React from 'react'

const CountryDetails = ({ details }) => {
	return (
		<div>
			{details && (
				<div>
					<div>
						<h1>{details.name}</h1>
						<div>
							<p>capital {details.capital}</p>
							<p>population {details.population}</p>
						</div>
						<div>
							<h2>languages</h2>
							<ul>
								{details.languages &&
									details.languages.map((language) => {
										return <li key={language.iso639_1}>{language.name}</li>
									})}
							</ul>
						</div>
						<img
							width={125}
							src={details.flag}
							alt={`Flag of ${details.name}`}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default CountryDetails
