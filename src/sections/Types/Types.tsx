import styles from './Types.module.scss'

const Types = () => {
	return (
		<div className={styles.Types}>
			<div className={`${styles.container} container`}>
				<h2 className={styles.title}>Виды тепловых насосов </h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<div className={styles.iconWrapper}>
							<svg
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14.9359 22.866C15.2317 23.0878 15.5759 23.2362 15.9403 23.2989C16.3046 23.3616 16.6787 23.3368 17.0316 23.2265C17.3845 23.1163 17.7061 22.9238 17.97 22.6648C18.2339 22.4059 18.4325 22.0879 18.5495 21.7372C18.6664 21.3865 18.6983 21.0129 18.6425 20.6475C18.5868 20.282 18.4449 19.935 18.2288 19.635C18.0126 19.3351 17.7282 19.0908 17.3991 18.9223C17.07 18.7539 16.7056 18.666 16.3359 18.666H2.33594'
									stroke='#155DFC'
									strokeWidth='2.33332'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M20.4192 9.33268C20.7175 8.93495 21.1125 8.62007 21.5667 8.41794C22.0209 8.21582 22.5193 8.13315 23.0144 8.1778C23.5096 8.22245 23.9851 8.39293 24.3959 8.67305C24.8066 8.95317 25.1389 9.33363 25.3612 9.7783C25.5836 10.223 25.6886 10.7171 25.6662 11.2138C25.6439 11.7104 25.4949 12.1931 25.2336 12.616C24.9722 13.039 24.607 13.388 24.1728 13.6301C23.7386 13.8722 23.2497 13.9993 22.7525 13.9993H2.33594'
									stroke='#155DFC'
									strokeWidth='2.33332'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M11.4359 5.13268C11.7317 4.91085 12.0759 4.76248 12.4403 4.6998C12.8047 4.63711 13.1787 4.66191 13.5316 4.77215C13.8845 4.88239 14.2062 5.07491 14.4701 5.33385C14.734 5.59279 14.9326 5.91073 15.0495 6.26148C15.1664 6.61222 15.1983 6.98573 15.1425 7.35122C15.0868 7.71671 14.945 8.06372 14.7288 8.36366C14.5126 8.66359 14.2282 8.90786 13.8991 9.07633C13.57 9.2448 13.2056 9.33266 12.8359 9.33266H2.33594'
									stroke='#155DFC'
									strokeWidth='2.33332'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<h3 className={styles.innerTitle}>Воздух — вода</h3>
						<h4 className={styles.subtitle}>Источник тепла: Наружный воздух</h4>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Кому подходит:
						</h5>
						<p className={styles.checkText}>
							Частные дома, где важен простой и доступный старт
						</p>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Сильные стороны:
						</h5>
						<p className={styles.checkText}>
							Проще в установке, ниже начальные вложения, подходит для
							большинства домов
						</p>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Что учесть:
						</h5>
						<p className={styles.checkText}>
							Эффективность зависит от температуры воздуха зимой; важен
							правильный расчёт
						</p>
					</li>
					<li className={styles.item}>
						<div className={styles.iconWrapper}>
							<svg
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9.3359 3.5L14.0025 12.8333L19.8359 6.99998L25.6692 24.4999H2.33594L9.3359 3.5Z'
									stroke='#F54900'
									strokeWidth='2.33332'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<h3 className={styles.innerTitle}>Грунт — вода</h3>
						<h4 className={styles.subtitle}>
							Земля (через горизонтальный или вертикальный коллектор)
						</h4>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Кому подходит:
						</h5>
						<p className={styles.checkText}>
							Если есть участок и вы планируете на долгосрочную перспективу
						</p>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Сильные стороны:
						</h5>
						<p className={styles.checkText}>
							Высокая стабильность, не зависит от температуры воздуха
						</p>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Что учесть:
						</h5>
						<p className={styles.checkText}>
							Сложнее монтаж, выше стартовые вложения, нужен участок
						</p>
					</li>
					<li className={styles.item}>
						<div className={styles.iconWrapper}>
							<svg
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2.33594 7.00065C3.03593 7.58398 3.73593 8.16731 5.25259 8.16731C8.16924 8.16731 8.16924 5.83398 11.0859 5.83398C14.1192 5.83398 13.8859 8.16731 16.9192 8.16731C19.8359 8.16731 19.8359 5.83398 22.7525 5.83398C24.2692 5.83398 24.9692 6.41731 25.6692 7.00065'
									stroke='#0092B8'
									strokeWidth='2.33332'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M2.33594 14.0006C3.03593 14.584 3.73593 15.1673 5.25259 15.1673C8.16924 15.1673 8.16924 12.834 11.0859 12.834C14.1192 12.834 13.8859 15.1673 16.9192 15.1673C19.8359 15.1673 19.8359 12.834 22.7525 12.834C24.2692 12.834 24.9692 13.4173 25.6692 14.0006'
									stroke='#0092B8'
									strokeWidth='2.33332'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M2.33594 21.0006C3.03593 21.584 3.73593 22.1673 5.25259 22.1673C8.16924 22.1673 8.16924 19.834 11.0859 19.834C14.1192 19.834 13.8859 22.1673 16.9192 22.1673C19.8359 22.1673 19.8359 19.834 22.7525 19.834C24.2692 19.834 24.9692 20.4173 25.6692 21.0006'
									stroke='#0092B8'
									strokeWidth='2.33332'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<h3 className={styles.innerTitle}>Вода — вода</h3>
						<h4 className={styles.subtitle}>Грунтовые воды или скважина</h4>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Кому подходит:
						</h5>
						<p className={styles.checkText}>
							Если на участке есть доступ к воде
						</p>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Сильные стороны:
						</h5>
						<p className={styles.checkText}>
							Может быть очень эффективным при подходящих условиях
						</p>
						<h5 className={styles.checkTitle}>
							<span className={styles.checkIcon}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 6L9 17L4 12'
										stroke='#85E13A'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							Что учесть:
						</h5>
						<p className={styles.checkText}>
							Подходит не всем; требует геологической оценки участка
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Types
