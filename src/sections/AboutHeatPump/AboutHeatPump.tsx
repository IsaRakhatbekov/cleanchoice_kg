import Image from 'next/image'
import styles from './AboutHeatPump.module.scss'

import AboutHeatPump1 from '@/public/AboutHeatPump1.png'
import AboutHeatPump2 from '@/public/AboutHeatPump2.png'
import AboutHeatPump3 from '@/public/AboutHeatPump3.png'
import AboutHeatPump4 from '@/public/AboutHeatPump4.png'

const AboutHeatPump = () => {
	return (
		<section className={styles.AboutHeatPump}>
			<div className={`${styles.container} container`}>
				<div className={styles.top}>
					<h2 className={styles.title}>Что такое тепловой насос</h2>
					<p className={styles.subtitle}>
						Система, которая берёт бесплатное тепло из воздуха, земли или воды —
						и передаёт его в ваш дом. Принцип как у холодильника, только
						наоборот.
					</p>
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={AboutHeatPump1} alt='#' width={300} height={260} />
						</div>
						<h3 className={styles.innerTitle}>Три функции в одной системе</h3>
						<p className={styles.text}>
							Может отапливать, подавать горячую воду и даже охлаждать летом
						</p>
					</li>
					<li className={styles.item}>
						<h3 className={styles.innerTitle}>Бесплатное тепло вокруг вас</h3>
						<p className={styles.text}>
							Берёт энергию из воздуха, грунта или воды — бесплатные источники
							тепла
						</p>
						<div className={styles.imgWrapper}>
							<Image src={AboutHeatPump2} alt='#' width={300} height={179} />
						</div>
					</li>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={AboutHeatPump3} alt='#' width={300} height={210} />
						</div>
						<h3 className={styles.innerTitle}>Не всем одинаково</h3>
						<p className={styles.text}>
							Требует правильного подбора — не универсальное решение, а точечное
						</p>
					</li>
					<li className={styles.item}>
						<h3 className={styles.innerTitle}>Включил и забыл</h3>
						<p className={styles.text}>
							Работает автоматически — без ручного контроля и обслуживания
							топлива
						</p>
						<div className={styles.imgWrapper}>
							<Image src={AboutHeatPump4} alt='#' width={300} height={197} />
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default AboutHeatPump
