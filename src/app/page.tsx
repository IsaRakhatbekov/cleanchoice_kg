import AboutHeatPump from '../sections/AboutHeatPump/AboutHeatPump'
import Benefits from '../sections/Benefits/Benefits'
import Contractor from '../sections/Contractor/Contractor'
import Diagnostics from '../sections/Diagnostics/Diagnostics'
import FAQ from '../sections/FAQ/FAQ'
import Footer from '../sections/Footer/Footer'
import Header from '../sections/Header/Header'
import HeatPumpProcess from '../sections/HeatPumpProcess/HeatPumpProcess'
import Hero from '../sections/Hero/Hero'
import Partners from '../sections/Partners/Partners'
import Statistics from '../sections/Statistics/Statistics'
import Types from '../sections/Types/Types'

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<Hero />
				<Statistics />
				<Benefits />
				<AboutHeatPump />
				<HeatPumpProcess />
				<Types />
				<Diagnostics />
				<Contractor />
				<FAQ />
				<Partners />
			</main>
			<Footer />
		</div>
	)
}
