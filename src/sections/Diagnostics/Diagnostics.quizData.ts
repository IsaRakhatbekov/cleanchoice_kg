export type QuizResultKey =
	| 'water-water'
	| 'ground-water'
	| 'air-water'
	| 'consultation'

export type OptionIconKey =
	| 'house'
	| 'size'
	| 'good'
	| 'middle'
	| 'weakly'
	| 'iDontKnow'
	| 'gas'
	| 'electricity'
	| 'coal'
	| 'other'
	| 'x'
	| 'dollar'
	| 'iconYes'
	| 'download'
	| 'savings'
	| 'comfort'
	| 'longTerm'
	| 'ecology'

export type DiagnosticsOption = {
	value: string
	label: string
	iconKey: OptionIconKey
}

export type DiagnosticsQuestion = {
	id: string
	title: string
	options: DiagnosticsOption[]
}

export const diagnosticsQuestions: DiagnosticsQuestion[] = [
	{
		id: 'q1',
		title: 'Укажите тип вашего объекта:',
		options: [
			{ value: 'private-house', label: 'Частный дом', iconKey: 'house' },
			{ value: 'cottage', label: 'Коттедж', iconKey: 'house' },
			{ value: 'dacha', label: 'Дача', iconKey: 'house' },
			{
				value: 'commercial-object',
				label: 'Коммерческий объект',
				iconKey: 'house',
			},
		],
	},
	{
		id: 'q2',
		title: 'Какая общая отапливаемая площадь (м²)?',
		options: [
			{ value: 'up-to-80', label: 'До 80 m²', iconKey: 'size' },
			{ value: '80-150', label: '80 - 150 m²', iconKey: 'size' },
			{ value: '150-250', label: '150 - 250 m²', iconKey: 'size' },
			{ value: 'more-than-250', label: 'Больше 250 m²', iconKey: 'size' },
		],
	},
	{
		id: 'q3',
		title: 'Как утеплён объект?',
		options: [
			{ value: 'good', label: 'Хорошо', iconKey: 'good' },
			{ value: 'medium', label: 'Средне', iconKey: 'middle' },
			{ value: 'weak', label: 'Слабо', iconKey: 'weakly' },
			{ value: 'unknown', label: 'Не знаю', iconKey: 'iDontKnow' },
		],
	},
	{
		id: 'q4',
		title: 'Чем отапливаете сейчас?',
		options: [
			{ value: 'gas', label: 'Газ', iconKey: 'gas' },
			{ value: 'electric', label: 'Электричество', iconKey: 'electricity' },
			{ value: 'coal', label: 'Уголь', iconKey: 'coal' },
			{ value: 'other', label: 'Другое', iconKey: 'other' },
			{ value: 'none', label: 'Нет отопления', iconKey: 'x' },
		],
	},
	{
		id: 'q5',
		title: 'Сколько тратите на отопление в месяц зимой?',
		options: [
			{ value: 'up-to-5000', label: 'До 5000 сом', iconKey: 'dollar' },
			{ value: '5000-10000', label: '5-10 тыс.', iconKey: 'dollar' },
			{ value: '10000-20000', label: '10-20 тыс.', iconKey: 'dollar' },
			{ value: '20000-plus', label: 'Более 20 тыс.', iconKey: 'dollar' },
			{ value: 'unknown', label: 'Не знаю', iconKey: 'dollar' },
		],
	},
	{
		id: 'q6',
		title: 'Есть ли у вас земельный участок?',
		options: [
			{ value: 'yes', label: 'Да', iconKey: 'iconYes' },
			{ value: 'no', label: 'Нет', iconKey: 'x' },
		],
	},
	{
		id: 'q7',
		title: 'Есть ли доступ к воде или скважине?',
		options: [
			{ value: 'yes', label: 'Да', iconKey: 'iconYes' },
			{ value: 'no', label: 'Нет', iconKey: 'x' },
			{ value: 'unknown', label: 'Не знаю', iconKey: 'iDontKnow' },
		],
	},
	{
		id: 'q8',
		title: 'Нужен ли тёплый пол?',
		options: [
			{ value: 'yes', label: 'Да', iconKey: 'iconYes' },
			{ value: 'no', label: 'Нет', iconKey: 'x' },
			{
				value: 'already-installed',
				label: 'Уже установлен',
				iconKey: 'download',
			},
		],
	},
	{
		id: 'q9',
		title: 'Какой у вас бюджет?',
		options: [
			{ value: 'up-to-3000', label: 'До $3 000', iconKey: 'dollar' },
			{ value: '3000-7000', label: '$3–7 тыс.', iconKey: 'dollar' },
			{ value: '7000-15000', label: '$7–15 тыс.', iconKey: 'dollar' },
			{ value: 'more-than-15000', label: 'Более $15 тыс.', iconKey: 'dollar' },
			{ value: 'not-decided', label: 'Пока не определился', iconKey: 'dollar' },
		],
	},
	{
		id: 'q10',
		title: 'Что для вас важнее?',
		options: [
			{ value: 'saving', label: 'Экономия', iconKey: 'savings' },
			{ value: 'comfort', label: 'Комфорт', iconKey: 'comfort' },
			{ value: 'durability', label: 'Долгострочность', iconKey: 'longTerm' },
			{ value: 'eco', label: 'Экология', iconKey: 'ecology' },
		],
	},
]

export type QuizResultInfo = {
	title: string
	reasons: string[]
}

export const quizResults: Record<QuizResultKey, QuizResultInfo> = {
	'water-water': {
		title: 'Вода-Вода',
		reasons: [
			'Высокий потенциал эффективности при наличии источника воды',
			'Подходит для стабильного и мощного отопления объекта',
		],
	},
	'ground-water': {
		title: 'Грунт-Вода',
		reasons: [
			'У вас есть участок для размещения грунтового контура',
			'Бюджет позволяет реализовать энергоэффективное решение',
		],
	},
	'air-water': {
		title: 'Воздух-Вода',
		reasons: [
			'Оптимальный выбор при ограниченном бюджете или отсутствии участка',
			'Быстрый монтаж и сбалансированная стоимость внедрения',
		],
	},
	consultation: {
		title: 'Нужна консультация',
		reasons: [
			'Нужны дополнительные вводные для точного подбора',
			'Инженер поможет рассчитать оптимальный вариант именно под ваш объект',
		],
	},
}

export const getQuizResult = (
	answers: Record<string, string>,
): QuizResultKey => {
	const q6 = answers.q6
	const q7 = answers.q7
	const q9 = answers.q9

	if (q7 === 'yes' && q9 !== 'up-to-3000') return 'water-water'
	if (
		q6 === 'yes' &&
		q7 === 'no' &&
		(q9 === '7000-15000' || q9 === 'more-than-15000')
	) {
		return 'ground-water'
	}
	if (q6 === 'no' || q9 === 'up-to-3000' || q9 === '3000-7000')
		return 'air-water'
	return 'consultation'
}
