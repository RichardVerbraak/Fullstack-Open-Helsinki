import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import Weather from './components/Weather'

const App = () => {
	const [countries, setCountries] = useState([])
	const [search, setSearch] = useState('')

	const [filtered, setFiltered] = useState([])
	const [countryDetails, setCountryDetails] = useState()
	const [weather, setWeather] = useState()

	const [warning, setWarning] = useState('')

	const searchCountries = (e) => {
		setSearch(e.target.value)
	}

	useEffect(() => {
		// Fetch data once
		axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
			const { data } = response

			setCountries(data)
		})
	}, [])

	useEffect(() => {
		if (search) {
			const filtered = countries.filter((country) => {
				return country.name.toLowerCase().includes(search.toLowerCase())
			})

			// Reset filtered array whenever there are too many results
			if (filtered.length > 10) {
				setFiltered([])
				setWarning('Too many results, please narrow down search')
			}

			if (filtered.length > 1 && filtered.length <= 10) {
				setFiltered(filtered)
				setWarning('')
			}

			// Set the details to the first and only item of the filtered array --> Don't show filtered array && warning anymore
			// Else always set the details state to empty
			if (filtered.length === 1) {
				setCountryDetails(filtered[0])
				setFiltered([])
				setWarning('')
			} else {
				setCountryDetails()
				setWeather()
			}
		}

		// Remove warning when no search input
		if (!search) {
			setWarning('')
		}
	}, [search, countries])

	useEffect(() => {
		if (countryDetails) {
			axios
				.get(
					`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${countryDetails.name}`
				)
				.then((response) => {
					const { data } = response
					setWeather(data)
				})
		}
	}, [countryDetails])

	return (
		<div>
			<span>find countries</span>
			<input value={search} type='text' onChange={searchCountries} />
			{warning && <p>{warning}</p>}

			{filtered && (
				<Countries countries={filtered} setCountryDetails={setCountryDetails} />
			)}

			{countryDetails && <CountryDetails country={countryDetails} />}

			{weather && <Weather weather={weather} />}
		</div>
	)
}

export default App
