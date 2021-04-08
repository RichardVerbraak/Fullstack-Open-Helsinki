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
		console.log('Deleted')
	})
}

const updatePerson = ({ id, name, number }) => {
	const request = axios.put(`http://localhost:3001/persons/${id}`, {
		name,
		number,
	})
	return request.then((response) => {
		return response.data
	})
}

export { getAllPersons, savePerson, deletePerson, updatePerson }
