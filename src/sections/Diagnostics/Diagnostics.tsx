'use client'
import DiagnosticsBg from '@/public/Diagnostics-bg.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { OptionIcon, SelectedOptionCheckIcon } from './Diagnostics.icons'
import styles from './Diagnostics.module.scss'
import {
	diagnosticsQuestions,
	getQuizResult,
	quizResults,
	type QuizResultKey,
} from './Diagnostics.quizData'

type DiagnosticsModalProps = {
	isOpen: boolean
	onClose: () => void
}

const DiagnosticsModal = ({ isOpen, onClose }: DiagnosticsModalProps) => {
	const [isQuizStarted, setIsQuizStarted] = useState(false)
	const [currentStep, setCurrentStep] = useState(0)
	const [answers, setAnswers] = useState<Record<string, string>>({})
	const [result, setResult] = useState<QuizResultKey | null>(null)

	useEffect(() => {
		if (isOpen) {
			setIsQuizStarted(false)
			setCurrentStep(0)
			setAnswers({})
			setResult(null)
		}
	}, [isOpen])

	if (!isOpen) return null

	const totalQuestions = diagnosticsQuestions.length
	const currentQuestion = diagnosticsQuestions[currentStep]
	const selectedOption = answers[currentQuestion.id]
	const progress = ((currentStep + 1) / totalQuestions) * 100

	const handleNext = () => {
		if (!selectedOption) return
		if (currentStep === totalQuestions - 1) {
			setResult(getQuizResult(answers))
			return
		}
		setCurrentStep(prev => prev + 1)
	}

	return (
		<div aria-hidden='true' className={styles.overlay} onClick={onClose}>
			<div
				aria-labelledby='diagnostics-modal-title'
				aria-modal='true'
				className={styles.modal}
				onClick={event => event.stopPropagation()}
				role='dialog'
			>
				<button
					aria-label='Закрыть окно'
					className={styles.closeButton}
					onClick={onClose}
					type='button'
				>
					×
				</button>
				{!isQuizStarted ? (
					<>
						<h3 className={styles.modalTitle} id='diagnostics-modal-title'>
							Предварительная диагностика: какое решение подойдёт вашему дому?
						</h3>
						<p className={styles.modalText}>
							Ответьте на 8-10 вопросов — и мы покажем, какой тип теплового
							насоса стоит рассмотреть
						</p>
						<button
							className={styles.modalActionButton}
							onClick={() => setIsQuizStarted(true)}
							type='button'
						>
							Начать диагностику
						</button>
					</>
				) : result ? (
					<div className={styles.result}>
						<div className={styles.resultHeader}>Результат подбора</div>
						<div className={styles.resultBody}>
							<p className={styles.resultHint}>
								Исходя из ваших ответов вам подойдёт система:
							</p>
							<div className={styles.resultType}>
								<span className={styles.resultIcon}>△</span>
								<strong>{quizResults[result].title}</strong>
							</div>
							<p className={styles.resultReasonsTitle}>
								Почему вам это подходит :
							</p>
							<ul className={styles.resultReasons}>
								{quizResults[result].reasons.map(reason => (
									<li key={reason}>{reason}</li>
								))}
							</ul>
							<button className={styles.resultActionButton} type='button'>
								Выбрать подрядчика
							</button>
						</div>
					</div>
				) : (
					<div className={styles.quiz}>
						<div className={styles.progressLabel}>
							{currentStep + 1}/{totalQuestions}
						</div>
						<div className={styles.progressTrack}>
							<div
								className={styles.progressFill}
								style={{ width: `${progress}%` }}
							/>
						</div>
						<h3 className={styles.quizQuestion}>{currentQuestion.title}</h3>
						<div className={styles.options}>
							{currentQuestion.options.map(option => (
								<button
									className={`${styles.optionButton} ${
										selectedOption === option.value
											? styles.optionButtonActive
											: ''
									}`}
									key={`${currentQuestion.id}-${option.value}`}
									onClick={() =>
										setAnswers(prev => ({
											...prev,
											[currentQuestion.id]: option.value,
										}))
									}
									type='button'
								>
									<span className={styles.optionTextWrap}>
										<OptionIcon
											className={styles.optionLeadingIcon}
											iconKey={option.iconKey}
										/>
										<span>{option.label}</span>
									</span>
									{selectedOption === option.value ? (
										<SelectedOptionCheckIcon className={styles.optionCheck} />
									) : null}
								</button>
							))}
						</div>
						<div className={styles.quizActions}>
							<button
								className={styles.secondaryAction}
								disabled={currentStep === 0}
								onClick={() => setCurrentStep(prev => prev - 1)}
								type='button'
							>
								Назад
							</button>
							<button
								className={styles.primaryAction}
								disabled={!selectedOption}
								onClick={handleNext}
								type='button'
							>
								{currentStep === totalQuestions - 1
									? 'Получить результат'
									: 'Далее'}
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

const homeIcon = (
	<svg
		width='17'
		height='17'
		viewBox='0 0 17 17'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M15.3852 4.90069L9.95518 0.621495C9.45731 0.221264 8.81296 0 8.1451 0C7.47724 0 6.8329 0.221264 6.33514 0.621495L0.905141 4.90069C0.617625 5.13179 0.388236 5.41536 0.23219 5.73238C0.0761438 6.0494 -0.00298741 6.39259 8.62268e-05 6.73936V13.8496C8.62268e-05 14.497 0.286134 15.1177 0.795262 15.5755C1.30446 16.0331 1.99497 16.2903 2.7151 16.2903H13.5751C14.2952 16.2903 14.9859 16.0331 15.4949 15.5755C16.0041 15.1177 16.2902 14.497 16.2902 13.8496V6.7312C16.292 6.38588 16.2122 6.04414 16.0562 5.72869C15.9002 5.41313 15.6715 5.1309 15.3852 4.90069ZM9.95518 14.6632H6.33514V10.5955C6.33514 10.3797 6.43046 10.1727 6.6002 10.0203C6.76993 9.8677 7.00014 9.7819 7.24018 9.7819H9.05014C9.29019 9.7819 9.5204 9.8677 9.69001 10.0203C9.85974 10.1727 9.95518 10.3797 9.95518 10.5955V14.6632ZM14.4801 13.8496C14.4801 14.0654 14.3848 14.2724 14.2151 14.425C14.0454 14.5774 13.8151 14.6632 13.5751 14.6632H11.7651V10.5955C11.7651 9.94824 11.4791 9.3274 10.97 8.86966C10.4608 8.41203 9.77015 8.15486 9.05014 8.15486H7.24018C6.52006 8.15486 5.82942 8.41203 5.32034 8.86966C4.81114 9.3274 4.52506 9.94824 4.52506 10.5955V14.6632H2.7151C2.47506 14.6632 2.24485 14.5774 2.07511 14.425C1.9055 14.2724 1.81006 14.0654 1.81006 13.8496V6.7312C1.81031 6.61564 1.83781 6.50154 1.89082 6.39628C1.94383 6.29113 2.02123 6.19728 2.11779 6.12099L7.5478 1.84999C7.71293 1.71955 7.92534 1.64763 8.1451 1.64763C8.36498 1.64763 8.57728 1.71955 8.74241 1.84999L14.1724 6.12099C14.269 6.19728 14.3464 6.29113 14.3994 6.39628C14.4525 6.50154 14.48 6.61564 14.4801 6.7312V13.8496Z'
			fill='#6FB400'
		/>
	</svg>
)

const slidersIcon = (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M20 7H11' stroke='#6FB400' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		<path d='M14 17H5' stroke='#6FB400' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		<path
			d='M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z'
			stroke='#6FB400'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z'
			stroke='#6FB400'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const bulbIcon = (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M15 14C15.2 13 15.7 12.3 16.5 11.5C17.5 10.6 18 9.3 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 9 6.2 10.2 7.5 11.5C8.2 12.2 8.8 13 9 14'
			stroke='#6FB400'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M9 18H15' stroke='#6FB400' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		<path d='M10 22H14' stroke='#6FB400' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
	</svg>
)

const leafIcon = (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M10.9978 20C9.24184 20.0053 7.54803 19.3505 6.2523 18.1654C4.95656 16.9803 4.15355 15.3515 4.00252 13.6021C3.85149 11.8527 4.36347 10.1104 5.43693 8.72074C6.51039 7.33112 8.06691 6.3957 9.79778 6.1C15.4978 5 16.9978 4.48 18.9978 2C19.9978 4 20.9978 6.18 20.9978 10C20.9978 15.5 16.2178 20 10.9978 20Z'
			stroke='#6FB400'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 21C2 18 3.85 15.64 7.08 15C9.5 14.52 12 13 13 12'
			stroke='#6FB400'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const piggyBankIcon = (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M19 5C17.5 5 16.2 6.4 16 7C12.5 5.5 5 6.7 5 12C5 13.8 5 15 7 16.5V20H11V18H14V20H18V16C19 15.5 19.7 15 20 14H22V10H20C20 9 19.5 8.5 19 8V5Z'
			stroke='#6FB400'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M2 9V10C2 11.1 2.9 12 4 12H5' stroke='#6FB400' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		<path d='M16 11H16.01' stroke='#6FB400' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
	</svg>
)

const Diagnostics = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		if (!isModalOpen) return

		const { overflow } = document.body.style
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = overflow
		}
	}, [isModalOpen])

	return (
		<div className={styles.Diagnostics}>
			<div className={`${styles.container} container`}>
				<h2 className={styles.mobileTitle}>Подходит ли это решение вам?</h2>
				<div className={styles.mobileImageWrap}>
					<Image
						alt='Монтаж теплового насоса'
						className={styles.mobileImage}
						priority={false}
						src={DiagnosticsBg}
					/>
				</div>
				<div className={styles.leftSide}>
					<h2 className={styles.title}>Подходит ли это решение вам?</h2>
					<h3 className={styles.subtitle}>Это решение для вас, если вы:</h3>
					<ul className={styles.list}>
						<li className={styles.item}>
							<span>{homeIcon}</span>
							<p className={styles.text}>
								Строите дом или планируете менять систему отопления
							</p>
						</li>
						<li className={styles.item}>
							<span>{slidersIcon}</span>
							<p className={styles.text}>
								Хотите стабильную температуру без постоянного контроля
							</p>
						</li>
						<li className={styles.item}>
							<span>{bulbIcon}</span>
							<p className={styles.text}>
								Устали от хранения и доставки топлива
							</p>
						</li>
						<li className={styles.item}>
							<span>{leafIcon}</span>
							<p className={styles.text}>
								Хотите снизить расходы на отопление в долгосрочной перспективе
							</p>
						</li>
						<li className={styles.item}>
							<span>{piggyBankIcon}</span>
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
					<button
						className={styles.btn}
						onClick={() => setIsModalOpen(true)}
						type='button'
					>
						Начать диагностику
					</button>
				</div>
			</div>
			<DiagnosticsModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	)
}

export default Diagnostics
