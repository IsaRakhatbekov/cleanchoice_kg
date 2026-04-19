import { fontArimo, fontInter } from '@/src/app/fonts'
import '@/src/global/styles/global.scss'
import '@/src/global/styles/reset.scss'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			className={`${fontInter.variable} ${fontArimo.variable}`}
		>
			<body>{children}</body>
		</html>
	)
}
