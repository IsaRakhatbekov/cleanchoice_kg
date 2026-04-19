import styles from './Statistics.module.scss'

const Statistics = () => {
	return (
		<section className={styles.Statistics}>
			<div className={`${styles.container} container`}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<h2 className={styles.title}>30+</h2>
						<p className={styles.text}>стран используют технологию</p>
					</li>
					<li className={styles.item}>
						<h2 className={styles.title}>до 70% </h2>
						<p className={styles.text}>экономия на отоплении</p>
					</li>
					<li className={styles.item}>
						<h2 className={styles.title}>15–25 лет</h2>
						<p className={styles.text}>лет службы системы</p>
					</li>
					<li className={styles.item}>
						<h2 className={styles.title}>2–4x </h2>
						<p className={styles.text}>эффективнее электрического отопления</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Statistics
