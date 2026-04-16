import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<div className={styles.hero}>
			<h1 className={styles.title}>
				Тепло без хлопот. Узнайте, как это работает.
			</h1>
			<p className={styles.subtitle}>
				Тепловой насос — современная альтернатива привычному отоплению.
				Разберитесь за 3 минуты, подходит ли это вашему дому.
			</p>
			<div className={styles.btnWrapper}>
				<button className={styles.btnWhite}>Как это работает</button>
				<button className={styles.btnOrange}>Подобрать решение</button>
			</div>
		</div>
	)
}

export default Hero
