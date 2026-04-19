import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={`${styles.container} container`}>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>
						Тепло без хлопот. Узнайте, как это работает.
					</h1>
					<p className={styles.subtitle}>
						Тепловой насос — современная альтернатива привычному отоплению.
						Разберитесь за 3 минуты, подходит ли это вашему дому.
					</p>
					<div className={styles.btnWrapper}>
						<button className={styles.btnWhite}>
							<span className={styles.whitBtnIcon}>
								<svg
									viewBox='0 0 19 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.16671 17.5C13.7691 17.5 17.5 13.769 17.5 9.16665C17.5 4.56427 13.7691 0.833313 9.16671 0.833313C4.56433 0.833313 0.833374 4.56427 0.833374 9.16665C0.833374 13.769 4.56433 17.5 9.16671 17.5Z'
										stroke='#A4A7AE'
										strokeWidth='1.66667'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M7.08337 6.63776C7.08337 6.24002 7.08337 6.04115 7.16649 5.93013C7.23893 5.83338 7.3498 5.77284 7.47036 5.76423C7.60869 5.75435 7.77598 5.86189 8.11055 6.07697L12.0444 8.60586C12.3347 8.7925 12.4799 8.88581 12.53 9.00447C12.5738 9.10815 12.5738 9.22514 12.53 9.32882C12.4799 9.44748 12.3347 9.5408 12.0444 9.72743L8.11055 12.2563C7.77598 12.4714 7.60869 12.5789 7.47036 12.5691C7.3498 12.5604 7.23893 12.4999 7.16649 12.4032C7.08337 12.2921 7.08337 12.0933 7.08337 11.6955V6.63776Z'
										stroke='#A4A7AE'
										strokeWidth='1.66667'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Как это работает
						</button>
						<button className={styles.btnGreen}>Подобрать решение</button>
					</div>
				</div>

				<span className={styles.bigText}>ECOHEAT</span>
			</div>
		</section>
	)
}

export default Hero
