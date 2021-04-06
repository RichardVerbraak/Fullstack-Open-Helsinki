import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Warning from './components/Warning'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

const App = () => {
	const [countries, setCountries] = useState([])
	const [filtered, setFiltered] = useState('')
	const [search, setSearch] = useState('')

	const [warning, setWarning] = useState('')

	const [details, setDetails] = useState({})

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
		// Filter data based on search
		if (search) {
			const filteredCountries = countries.filter((country) => {
				return country.name.toLowerCase().includes(search.toLowerCase())
			})

			if (filteredCountries.length > 10) {
				setWarning('Too many results, please narrow down search')
			}

			if (filteredCountries.length > 0 && filteredCountries.length <= 10) {
				setFiltered(filteredCountries)
				setWarning('')
			}

			// Pass the object to CountryDetails and reset the filtered array so it only shows the details
			if (filteredCountries.length === 1) {
				setDetails(filteredCountries[0])
				setFiltered([])
				setWarning('')
			}
		}

		// Resets the filtered array, country details and the warning when input field is empty
		if (!search) {
			setFiltered([])
			setDetails({})
			setWarning('')
		}
	}, [search, countries])

	return (
		<div>
			<span>find countries</span>
			<input value={search} type='text' onChange={searchCountries} />
			{warning && <Warning warning={warning} />}

			<Countries countries={filtered} setDetails={setDetails} />

			{Object.keys(details).length !== 0 && (
				<CountryDetails details={details} />
			)}
		</div>
	)
}

export default App
