import React from 'react'

const Total = ({ parts }) => {
	const [firstPart, secondPart, thirdPart] = parts

	return (
		<div>
			<p>
				Number of exercises{' '}
				{firstPart.exercises + secondPart.exercises + thirdPart.exercises}
			</p>
		</div>
	)
}

export default Total
