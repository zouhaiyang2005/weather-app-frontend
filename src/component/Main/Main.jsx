import SocialMedia from'../SocialMedia/SocialMedia'
import CardHeader from'../CardHeader/CardHeader'
import Forecast from'../Forecast/Forecast'
import './Main.css'

export default function Main() {
  return (
    <div className='Main'>
      <CardHeader />
      <div className='flex details'>
        <SocialMedia />
        <Forecast/>
      </div>
    </div>
  )
}
