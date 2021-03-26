import React from 'react'

const Statistics = ({ good, neutral, bad, all }) => {
	return (
		<div>
			<h3>statistics</h3>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {all}</p>
			<p>average {all && (good + neutral * 0 + bad * -1) / all}</p>
			<p>positive {(good / all) * 100} %</p>
		</div>
	)
}

export default Statistics
