import axios from 'axios'

const getAllPersons = () => {
	const request = axios.get('http://localhost:3001/persons')
	return request.then((response) => {
		return response.data
	})
}

const savePerson = (person) => {
	const request = axios.post('http://localhost:3001/persons', person)
	return request.then((response) => {
		return response.data
	})
}

const deletePerson = (id) => {
	const request = axios.delete(`http://localhost:3001/persons/${id}`)
	return request.then((response) => {
		console.log(response)
	})
}

export { getAllPersons, savePerson, deletePerson }
