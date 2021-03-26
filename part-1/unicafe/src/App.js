import React, { useState } from 'react'
import Statistics from './components/Statistics'

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const [all, setAll] = useState(0)

	const [average, setAverage] = useState(0)

	return (
		<div>
			<div>
				<h3>give feedback</h3>
				<button
					onClick={() => {
						setGood(good + 1)
						setAll(all + 1)
					}}
				>
					good
				</button>
				<button
					onClick={() => {
						setNeutral(neutral + 1)
						setAll(all + 1)
					}}
				>
					neutral
				</button>
				<button
					onClick={() => {
						setBad(bad + 1)
						setAll(all + 1)
					}}
				>
					bad
				</button>
			</div>

			<Statistics good={good} neutral={neutral} bad={bad} all={all} />
		</div>
	)
}

export default App
