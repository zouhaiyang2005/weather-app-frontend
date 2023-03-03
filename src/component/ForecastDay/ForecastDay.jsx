import ReactAnimatedWeather from "react-animated-weather"
import "./ForecastDay.css"

export default function ForecastDay(props) {
  const {  day, temp, weatherDescription } = props

  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 70,
    animate: true,
  }

const weatherMapping = {
  "Sunny":"CLEAR_DAY",
  "Cloudy":"CLOUDY",
  "Raining":"RAIN",
}
  return (
    <div className="ForecastDay">
      <h2>{day}</h2>
      <ReactAnimatedWeather
        icon={weatherMapping[weatherDescription]}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      <p>{temp}</p>
      <p>{weatherDescription}</p>
    </div>
  )
}
