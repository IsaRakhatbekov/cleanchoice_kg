import Statistics from '@/src/sections/Statistics/Statistics'
import AboutHeatPump from '../sections/AboutHeatPump/AboutHeatPump'
import Benefits from '../sections/Benefits/Benefits'
import HeatPumpProcess from '../sections/HeatPumpProcess/HeatPumpProcess'
import Hero from '../sections/Hero/Hero'
import Types from '../sections/Types/Types'

export default function Home() {
	return (
		<div>
			<main>
				<Hero />
				<Statistics />
				<Benefits />
				<AboutHeatPump />
				<HeatPumpProcess />
				<Types />
			</main>
		</div>
	)
}
