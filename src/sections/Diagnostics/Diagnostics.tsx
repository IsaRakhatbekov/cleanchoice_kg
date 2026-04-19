import styles from './Diagnostics.module.scss'

const Diagnostics = () => {
	return (
		<div className={styles.Diagnostics}>
			<div className={`${styles.container} container`}>
				<div className={styles.leftSide}>
					<h2 className={styles.title}>Подходит ли это решение вам?</h2>
					<h3 className={styles.subtitle}>
						Тепловой насос — не универсальный ответ. Но если вы узнаёте себя в
						этих пунктах, стоит разобраться подробнее.
					</h3>
					<ul>
						<li className={styles.item}>
							<p className={styles.text}>
								Строите дом или планируете менять систему отопления
							</p>
						</li>
						<li className={styles.item}>
							<p className={styles.text}>
								Хотите стабильную температуру без постоянного контроля
							</p>
						</li>
						<li className={styles.item}>
							<p className={styles.text}>
								Устали от хранения и доставки топлива
							</p>
						</li>
						<li className={styles.item}>
							<p className={styles.text}>
								Хотите снизить расходы на отопление в долгосрочной перспективе
							</p>
						</li>
						<li className={styles.item}>
							<p className={styles.text}>
								Готовы разобраться в вопросе, прежде чем принимать решение
							</p>
						</li>
					</ul>
				</div>
				<div className={styles.rightSide}>
					<h3 className={styles.rightSideTitle}>Не уверенны?</h3>
					<p className={styles.rightSideText}>
						Пройдите нашу 2-х минутную диагностику, что бы подобрать систему,
						которая подходит именно вам!
					</p>
					<button className={styles.btn}>Начать диагностику</button>
				</div>
			</div>
		</div>
	)
}

export default Diagnostics
