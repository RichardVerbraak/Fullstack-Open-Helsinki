import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
	const [firstPart, secondPart, thirdPart] = parts

	return (
		<div>
			<Part part={firstPart} />
			<Part part={secondPart} />
			<Part part={thirdPart} />
		</div>
	)
}

export default Content
