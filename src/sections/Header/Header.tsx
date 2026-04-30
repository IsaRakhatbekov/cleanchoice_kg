'use client'

import { type MouseEvent, useEffect, useState } from 'react'

import styles from './Header.module.scss'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const handleMenuToggle = () => {
		setIsMenuOpen(prev => !prev)
	}

	const handleMenuClose = () => {
		setIsMenuOpen(false)
	}

	const handleNavLinkClick = (
		event: MouseEvent<HTMLAnchorElement>,
		targetId: string,
	) => {
		event.preventDefault()
		handleMenuClose()

		const targetElement = document.getElementById(targetId)
		if (!targetElement) return

		window.requestAnimationFrame(() => {
			const header = document.querySelector('header')
			const headerOffset = header instanceof HTMLElement ? header.offsetHeight : 0
			const targetPosition =
				targetElement.getBoundingClientRect().top + window.scrollY - headerOffset

			window.scrollTo({
				top: Math.max(targetPosition, 0),
				behavior: 'smooth',
			})
		})
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

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`${styles.Header} ${isScrolled ? styles.HeaderScrolled : ''}`}
		>
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
							<a
								className={styles.link}
								href='#how-it-works-section'
								onClick={event =>
									handleNavLinkClick(event, 'how-it-works-section')
								}
							>
								Как это работает
							</a>
						</li>
						<li className={styles.item}>
							<a
								className={styles.link}
								href='#heat-pump-process-section'
								onClick={event =>
									handleNavLinkClick(event, 'heat-pump-process-section')
								}
							>
								Преимущества
							</a>
						</li>
						<li className={styles.item}>
							<a
								className={styles.link}
								href='#diagnostics-section'
								onClick={event =>
									handleNavLinkClick(event, 'diagnostics-section')
								}
							>
								Подходит ли вам
							</a>
						</li>
						<li className={styles.item}>
							<a
								className={styles.link}
								href='#types-section'
								onClick={event => handleNavLinkClick(event, 'types-section')}
							>
								Виды насосов
							</a>
						</li>
						<li className={styles.item}>
							<a
								className={styles.link}
								href='#contractor-section'
								onClick={event =>
									handleNavLinkClick(event, 'contractor-section')
								}
							>
								Подрядчики
							</a>
						</li>
						<li className={styles.item}>
							<a
								className={styles.link}
								href='#faq-section'
								onClick={event => handleNavLinkClick(event, 'faq-section')}
							>
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
