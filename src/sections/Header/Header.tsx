'use client'

import { useEffect, useState } from 'react'

import styles from './Header.module.scss'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuToggle = () => {
		setIsMenuOpen((prev) => !prev)
	}

	const handleMenuClose = () => {
		setIsMenuOpen(false)
	}

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden'
			return
		}

		document.body.style.overflow = ''

		return () => {
			document.body.style.overflow = ''
		}
	}, [isMenuOpen])

	return (
		<header className={styles.Header}>
			<div className={`${styles.container} container`}>
				<nav className={styles.nav}>
					<a className={styles.logo} href='/'>
						cleanchoice
					</a>
					<button
						className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`}
						type='button'
						onClick={handleMenuToggle}
						aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
						aria-expanded={isMenuOpen}
						aria-controls='header-navigation'
					>
						<span />
						<span />
						<span />
					</button>
					<ul
						id='header-navigation'
						className={`${styles.list} ${isMenuOpen ? styles.listOpen : ''}`}
					>
						<li className={styles.item}>
							<a className={styles.link} href='#' onClick={handleMenuClose}>
								Как это работает
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#' onClick={handleMenuClose}>
								Преимущества
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#' onClick={handleMenuClose}>
								Подходит ли вам
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#' onClick={handleMenuClose}>
								Виды насосов
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#' onClick={handleMenuClose}>
								Подрядчики
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#' onClick={handleMenuClose}>
								FAQ
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
