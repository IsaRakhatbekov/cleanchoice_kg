'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './Contractor.module.scss'

type Country = {
	flag: string
	name: string
}

type ContractorItem = {
	name: string
	addresses: string[]
	websites: string[]
	countries: Country[]
	priceFrom: string
}

const contractors: ContractorItem[] = [
	{
		name: '"ОсОО ""Компас" 220.kg',
		addresses: ['г. Бишкек, ул. Т.Молдо,28/19'],
		websites: ['www.220.kg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '3400$',
	},
	{
		name: 'ОсОО "Буудан" MBT Midea',
		addresses: ['г. Бишкек, ул. Чингиза Айтматова 299/4 (ЖК "Фрунзе")'],
		websites: ['https://midea.kg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '3300$',
	},
	{
		name: 'ОсОО«Нулевые Выбросы» Бренд "GEO"',
		addresses: ['г. Бишкек,ул. Киевская 107'],
		websites: [],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '3500$',
	},
	{
		name: 'ОсОО "ИНОА" Бренд "ProHeat"',
		addresses: ['г. Бишкек, ул. Ауэзова 98/5'],
		websites: ['https://inoa.kg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '2200$',
	},
	{
		name: 'ОсОО "Тепло в дом" Бренд "EST Group"',
		addresses: ['г. Бишкек, ул. Ахунбаева 2/6а'],
		websites: ['www.instagram.com/estgroupkg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '3200$',
	},
	{
		name: 'ИП "Сюй А. А." Бренд "EST Group"',
		addresses: [
			'г. Бишкек, ж/м Кок-Жар ул. Мадиева 23/1 бизнес центр ДНТ), 2 этаж кабинет 6',
		],
		websites: ['www.instagram.com/heatpro.kg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '3500$',
	},
	{
		name: 'ОсОО "Нурсан Энерджи"',
		addresses: ['г. Бишкек, бульвар Эркиндик 31А'],
		websites: ['http://nursunenergy.com/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '3000$',
	},
	{
		name: 'ОсОО « Эрекен Групп» Бренд "KAZEKO"',
		addresses: ['г. Бишкек, ул. Элебаева 44'],
		websites: ['www.kazeco.kg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '4500$',
	},
	{
		name: 'ОсОО«Зеленый горизонт» Бренд "Термоклимат"',
		addresses: ['г. Бишкек, ТК Табылга (Б-25)'],
		websites: ['https://termoclimat.kg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '4000$',
	},
	{
		name: 'ОсОО "Таза Аллианс" Бренд "Regulus"',
		addresses: ['г. Бишкек, ул. Анкара д.6'],
		websites: [],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '00$',
	},
	{
		name: 'ИП "АМК Фасад" Бренд "Ecotech Power',
		addresses: ['г. Бишкек,ул. Анарбека Бакаева 22/1'],
		websites: ['https://www.instagram.com/ecotech_power'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '2500$',
	},
	{
		name: 'ОсОО "Ала-Тоо Инжениринг"',
		addresses: ['г. Бищкек, ул. Панфилова 94'],
		websites: ['www.alato.kg/'],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '2200$',
	},
	{
		name: 'ОсОО "Enviro"',
		addresses: [
			'г. Каракол, ул. Кутманалиева 124г. Бишкек,ул. 7 Апреля 94, офис 205',
		],
		websites: ['www.enviro.kg '],
		countries: [{ flag: '🇨🇳', name: 'Китай' }],
		priceFrom: '2750$',
	},
]

const LocationIcon = () => (
	<svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M18.3332 9.16683C18.3332 13.7437 13.2558 18.5104 11.5508 19.9826C11.3919 20.102 11.1986 20.1666 10.9998 20.1666C10.8011 20.1666 10.6078 20.102 10.4489 19.9826C8.74392 18.5104 3.6665 13.7437 3.6665 9.16683C3.6665 7.22191 4.43912 5.35665 5.81439 3.98138C7.18965 2.60611 9.05492 1.8335 10.9998 1.8335C12.9448 1.8335 14.81 2.60611 16.1853 3.98138C17.5606 5.35665 18.3332 7.22191 18.3332 9.16683Z'
			stroke='#2E3540'
			strokeWidth='1.33219'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 11.9165C12.5188 11.9165 13.75 10.6853 13.75 9.1665C13.75 7.64772 12.5188 6.4165 11 6.4165C9.48122 6.4165 8.25 7.64772 8.25 9.1665C8.25 10.6853 9.48122 11.9165 11 11.9165Z'
			stroke='#2E3540'
			strokeWidth='1.33219'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const GlobeIcon = () => (
	<svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<circle cx='11' cy='11' r='9' stroke='#2E3540' strokeWidth='1.5' />
		<path d='M2 11H20' stroke='#2E3540' strokeWidth='1.5' />
		<path
			d='M11 2C13.8 4.3 13.8 17.7 11 20'
			stroke='#2E3540'
			strokeWidth='1.5'
		/>
		<path d='M11 2C8.2 4.3 8.2 17.7 11 20' stroke='#2E3540' strokeWidth='1.5' />
	</svg>
)

const PhoneIcon = () => (
	<svg viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M11.7 10.7L12.9 9.6C13.2 9.3 13.6 9.2 14 9.4L16 10.5C16.6 10.8 16.8 11.6 16.4 12.2L15.5 13.5C15.1 14 14.4 14.3 13.8 14.2C11.9 14 9.8 13 7.9 11.2C6.1 9.4 5.1 7.3 4.8 5.4C4.7 4.8 5 4.1 5.5 3.7L6.8 2.8C7.4 2.4 8.2 2.6 8.5 3.2L9.6 5.2C9.8 5.6 9.7 6 9.4 6.3L8.3 7.5C8.9 8.8 10.4 10.2 11.7 10.7Z'
			stroke='white'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const MailIcon = ({ color = '#2E3540' }: { color?: string }) => (
	<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M3 6.5H21V17.5H3V6.5Z'
			stroke={color}
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
		<path
			d='M3 7L12 14L21 7'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const getItemsPerPage = (width: number) => {
	if (width <= 768) return 3
	if (width <= 1024) return 4
	return 6
}

const Contractor = () => {
	const [itemsPerPage, setItemsPerPage] = useState(6)
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(getItemsPerPage(window.innerWidth))
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const totalPages = Math.max(1, Math.ceil(contractors.length / itemsPerPage))

	useEffect(() => {
		if (currentPage > totalPages) {
			setCurrentPage(totalPages)
		}
	}, [currentPage, totalPages])

	const paginatedContractors = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage
		return contractors.slice(startIndex, startIndex + itemsPerPage)
	}, [currentPage, itemsPerPage])

	const pages = useMemo(
		() => Array.from({ length: totalPages }, (_, index) => index + 1),
		[totalPages],
	)

	return (
		<div className={styles.Contractor}>
			<div className={`${styles.container} container`}>
				<h2 className={styles.title}>
					Найдите подрядчика для консультации и установки
				</h2>
				<p className={styles.subtitle}>
					После предварительной диагностики вы можете перейти к следующему шагу
					— выбрать специалиста и обсудить решение для вашего дома или объекта.
				</p>

				<div className={styles.banner}>
					<p className={styles.bannerText}>
						Информация в разделе предоставлена для навигации и первичного
						ознакомления. Перед выбором подрядчика рекомендуем самостоятельно
						уточнить условия работы, опыт и технические детали.
					</p>
				</div>

				<ul className={styles.list}>
					{paginatedContractors.map(contractor => (
						<li className={styles.item} key={contractor.name}>
							<h3 className={styles.naming}>{contractor.name}</h3>

							{contractor.addresses.map(address => (
								<span
									className={styles.links}
									key={`${contractor.name}-${address}`}
								>
									<span className={styles.linksIcon}>
										<LocationIcon />
									</span>
									{address}
								</span>
							))}

							{contractor.websites.map(website => (
								<a
									className={styles.links}
									href='#'
									key={`${contractor.name}-${website}`}
								>
									<span className={styles.linksIcon}>
										<GlobeIcon />
									</span>
									{website}
								</a>
							))}

							<div className={styles.countryWrapper}>
								<h4 className={styles.countryTitle}>Страна</h4>
								<div className={styles.countryList}>
									{contractor.countries.map(country => (
										<div
											className={styles.countryFlagWrapper}
											key={`${contractor.name}-${country.name}`}
										>
											<span className={styles.countryFlag}>{country.flag}</span>
											<span className={styles.countryName}>{country.name}</span>
										</div>
									))}
								</div>
								<span className={styles.price}>
									Цена от {contractor.priceFrom}
								</span>
							</div>

							<div className={styles.btnWrapper}>
								<a href='#' className={styles.btmPhone}>
									<span className={styles.btnIcon}>
										<PhoneIcon />
									</span>
									Телефон
								</a>
								<a href='#' className={styles.btnEmail}>
									<span className={styles.btnIcon}>
										<MailIcon />
									</span>
									Почта
								</a>
							</div>
						</li>
					))}
				</ul>

				{totalPages > 1 && (
					<div className={styles.pagination}>
						{pages.map(page => (
							<button
								type='button'
								key={page}
								className={`${styles.pageButton} ${page === currentPage ? styles.pageButtonActive : ''}`}
								onClick={() => setCurrentPage(page)}
							>
								{page}
							</button>
						))}
					</div>
				)}

				<div className={styles.collaboration}>
					<div className={styles.collaborationWrapper}>
						<h2 className={styles.collaborationTitle}>Сотрудничество</h2>
						<p className={styles.collaborationText}>
							Если вы представляете компанию, предлагающую тепловые насосы или
							сопутствующие услуги, приглашаем к сотрудничеству — свяжитесь с
							нами по электронной почте: <span>mavlyanov@yandex.com</span>
						</p>
					</div>
					<a
						className={styles.collaborationEmailBtn}
						href='mailto:mavlyanov@yandex.com'
					>
						<span className={styles.btnIcon}>
							<MailIcon color='white' />
						</span>
						Связаться
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contractor
