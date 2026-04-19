import { Arimo, Inter } from 'next/font/google'

/** Основной текст: Regular / Medium / Semi Bold / Bold / Extra Bold */
export const fontInter = Inter({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-inter',
	weight: ['400', '500', '600', '700', '800'],
})

/** Третья семья из макета — Regular */
export const fontArimo = Arimo({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-arimo',
	weight: ['400'],
})
