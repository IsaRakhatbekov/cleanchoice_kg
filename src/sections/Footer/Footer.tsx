import styles from './Footer.module.scss'

const instagramIcon = (
	<svg
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M14.1583 1.66602H5.82882C3.52869 1.66602 1.66406 3.53064 1.66406 5.83077V14.1603C1.66406 16.4604 3.52869 18.325 5.82882 18.325H14.1583C16.4585 18.325 18.3231 16.4604 18.3231 14.1603V5.83077C18.3231 3.53064 16.4585 1.66602 14.1583 1.66602Z'
			stroke='#90A1B9'
			strokeWidth='1.6659'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3307 9.47004C13.4335 10.1633 13.3151 10.8712 12.9923 11.4933C12.6696 12.1153 12.1589 12.6198 11.5329 12.9348C10.9069 13.2499 10.1975 13.3596 9.50561 13.2482C8.81371 13.1369 8.17453 12.8102 7.67899 12.3147C7.18345 11.8192 6.85678 11.18 6.74544 10.4881C6.63411 9.79618 6.74378 9.08679 7.05885 8.46081C7.37392 7.83484 7.87836 7.32414 8.5004 7.00137C9.12245 6.67861 9.83043 6.5602 10.5237 6.663C11.2308 6.76785 11.8854 7.09735 12.3909 7.60282C12.8963 8.10829 13.2258 8.76293 13.3307 9.47004Z'
			stroke='#90A1B9'
			strokeWidth='1.6659'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.5781 5.41406H14.5865'
			stroke='#90A1B9'
			strokeWidth='1.6659'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const facebookIcon = (
	<svg
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M14.9906 1.66602H12.4917C11.3872 1.66602 10.3279 2.1048 9.54681 2.88584C8.76576 3.66689 8.32698 4.72621 8.32698 5.83077V8.32962H5.82812V11.6614H8.32698V18.325H11.6588V11.6614H14.1576L14.9906 8.32962H11.6588V5.83077C11.6588 5.60986 11.7465 5.39799 11.9027 5.24179C12.059 5.08558 12.2708 4.99782 12.4917 4.99782H14.9906V1.66602Z'
			stroke='#90A1B9'
			strokeWidth='1.6659'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const youtubeIcon = (
	<svg
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0_153_2791)'>
			<path
				d='M2.08485 14.1601C1.50297 11.4141 1.50297 8.57661 2.08485 5.83059C2.1613 5.55173 2.30903 5.29756 2.51349 5.0931C2.71795 4.88864 2.97212 4.74091 3.25098 4.66446C7.71847 3.92435 12.2773 3.92435 16.7448 4.66446C17.0237 4.74091 17.2778 4.88864 17.4823 5.0931C17.6867 5.29756 17.8345 5.55173 17.9109 5.83059C18.4928 8.57661 18.4928 11.4141 17.9109 14.1601C17.8345 14.439 17.6867 14.6931 17.4823 14.8976C17.2778 15.1021 17.0237 15.2498 16.7448 15.3262C12.2773 16.0665 7.71846 16.0665 3.25098 15.3262C2.97212 15.2498 2.71795 15.1021 2.51349 14.8976C2.30903 14.6931 2.1613 14.439 2.08485 14.1601Z'
				stroke='#90A1B9'
				strokeWidth='1.6659'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.32812 12.4938L12.4929 9.99495L8.32812 7.49609V12.4938Z'
				stroke='#90A1B9'
				strokeWidth='1.6659'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_153_2791'>
				<rect width='19.9908' height='19.9908' fill='white' />
			</clipPath>
		</defs>
	</svg>
)

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={`${styles.container} container`}>
				<nav className={styles.nav}>
					<div className={styles.block}>
						<h2 className={styles.logo}>cleanchoice</h2>
						<h3 className={styles.subtitle}>
							Современные решения для отопления вашего дома
						</h3>
					</div>
					<ul className={styles.list}>
						<li className={styles.item}>
							<h4 className={styles.innerTitle}>Новигация</h4>
						</li>
						<li className={styles.item}>
							<a href='#about-heat-pump-section'>Что такое тепловой насос</a>
						</li>
						<li className={styles.item}>
							<a href='#how-it-works-section'>Как это работает</a>
						</li>
						<li className={styles.item}>
							<a href='#types-section'>Виды тепловых насосов</a>
						</li>
						<li className={styles.item}>
							<a href='#contractor-section'>Найти подрядчика</a>
						</li>
					</ul>
					<div className={styles.socialWrapper}>
						<a className={styles.social} href=''>
							{instagramIcon}
						</a>
						<a className={styles.social} href=''>
							{facebookIcon}
						</a>
						<a className={styles.social} href=''>
							{youtubeIcon}
						</a>
					</div>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
