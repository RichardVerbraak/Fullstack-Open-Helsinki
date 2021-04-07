import React from 'react'

const Weather = ({ weather }) => {
	const { current, location } = weather

	return (
		<div>
			<h2>Weather in {location.name}</h2>
			<p>
				<strong>temperature: </strong>
				<span>{current.temperature} celsius</span>
			</p>
			<img
				width={50}
				src={current.weather_icons[0]}
				alt={current.weather_descriptions[0]}
			/>
			<p>
				<strong>wind: </strong>
				<span>
					{current.wind_speed} direction {current.wind_dir}
				</span>
			</p>
		</div>
	)
}

export default Weather
