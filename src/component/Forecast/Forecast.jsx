import './Forecast.css'
import ForecastDay from "../ForecastDay/ForecastDay"

const result = [{
  id: 1,
  day: "Mon",
  icon: "abc",
  temp:"9℃",
  weatherDescription:"Cloudy"
},{
  id: 5,
  day: "Mon",
  icon: "abc",
  temp:"9℃",
  weatherDescription:"Raining"
},{
  id: 4,
  day: "Mon",
  icon: "abc",
  temp:"9℃",
  weatherDescription:"Cloudy"
},{
  id: 3,
  day: "Mon",
  icon: "abc",
  temp:"9℃",
  weatherDescription:"Raining"
},{
  id: 2,
  day: "Mon",
  icon: "abc",
  temp:"9℃",
  weatherDescription:"Sunny"
}]

export default function Forecast() {
  return (
    <div className='Forecast'>
      {result.map(({ id, day, temp, weatherDescription }) =><div key={id.toString()}>
      <ForecastDay
      day={day}
      temp={temp}
      weatherDescription={weatherDescription}
      />
      </div>)}
   </div>
  )
}
