import styles from './HeatPumpProcess.module.scss'

const HeatPumpProcess = () => {
	return (
		<section className={styles.HeatPumpProcess}>
			<div className={`${styles.container} container`}>
				<h2 className={styles.title}>Как тепловой насос обогревает дом</h2>
				<p className={styles.subtitle}>
					4 простых шага — от энергии природы до тепла в вашем доме
				</p>
				<ul className={styles.list}>
					<li className={styles.item}>
						<h3 className={styles.innerTitle}>Забирает тепло</h3>
						<p className={styles.text}>
							Из воздуха, воды или земли — зависит от типа системы
						</p>
					</li>
					<li className={styles.item}>
						<h3 className={styles.innerTitle}>Повышает температуру</h3>
						<p className={styles.text}>
							Встроенный компрессор доводит тепло до нужного уровня
						</p>
					</li>
					<li className={styles.item}>
						<h3 className={styles.innerTitle}>Передаёт в дом</h3>
						<p className={styles.text}>
							Через радиаторы или тёплый пол — как привычное отопление
						</p>
					</li>
					<li className={styles.item}>
						<h3 className={styles.innerTitle}>Работает автоматически</h3>
						<p className={styles.text}>
							Поддерживает комфортную температуру без вашего участия
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default HeatPumpProcess
