import React from 'react'

const Statistics = ({ good, neutral, bad, all }) => {
	return (
		<div>
			<h3>statistics</h3>
			{!all ? (
				<p>No feedback given</p>
			) : (
				<table>
					<tbody>
						<tr>
							<td>good </td>
							<td>{good}</td>
						</tr>

						<tr>
							<td>neutral </td>
							<td>{neutral}</td>
						</tr>

						<tr>
							<td>bad </td>
							<td>{bad}</td>
						</tr>

						<tr>
							<td>all </td>
							<td>{all}</td>
						</tr>

						<tr>
							<td>average </td>
							<td>{(good + neutral * 0 + bad * -1) / all}</td>
						</tr>

						<tr>
							<td>positive </td>
							<td>{(good / all) * 100} %</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Statistics
