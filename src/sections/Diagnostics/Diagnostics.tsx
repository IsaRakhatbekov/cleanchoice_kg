'use client'
import { useEffect, useState } from 'react'
import { OptionIcon, SelectedOptionCheckIcon } from './Diagnostics.icons'
import {
	diagnosticsQuestions,
	getQuizResult,
	quizResults,
	type QuizResultKey,
} from './Diagnostics.quizData'
import styles from './Diagnostics.module.scss'

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
							<p className={styles.resultReasonsTitle}>Почему вам это подходит :</p>
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
