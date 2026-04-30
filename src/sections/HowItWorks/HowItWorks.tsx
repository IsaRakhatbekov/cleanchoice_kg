'use client'

import { useState } from 'react'
import styles from './HowItWorks.module.scss'

const PlayIcon = () => (
	<svg
		width='14'
		height='17'
		viewBox='0 0 14 17'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3.33854 0.777535C3.3485 0.784177 3.35849 0.790841 3.36852 0.797525L12.1591 6.65793C12.4135 6.82747 12.6493 6.98466 12.8304 7.13073C13.0195 7.28318 13.2423 7.49458 13.3706 7.80383C13.5401 8.21258 13.5401 8.67197 13.3706 9.08073C13.2423 9.38998 13.0195 9.60138 12.8304 9.75382C12.6493 9.89989 12.4135 10.0571 12.1592 10.2266L3.33857 16.107C3.02766 16.3143 2.7481 16.5007 2.51087 16.6293C2.27349 16.7579 1.94765 16.9049 1.56733 16.8822C1.08087 16.8532 0.631494 16.6127 0.337487 16.224C0.107634 15.9202 0.049208 15.5675 0.024572 15.2986C-4.61858e-05 15.03 -2.35354e-05 14.694 1.59788e-06 14.3203L3.18734e-06 2.6003C3.18734e-06 2.58825 2.39261e-06 2.57624 1.59788e-06 2.56426C-2.35354e-05 2.1906 -4.61858e-05 1.8546 0.024572 1.58592C0.049208 1.31704 0.107634 0.964375 0.337487 0.660532C0.631494 0.271884 1.08087 0.0313839 1.56733 0.00233836C1.94765 -0.0203692 2.27349 0.12664 2.51087 0.255289C2.74809 0.383845 3.02765 0.570243 3.33854 0.777535Z'
			fill='white'
		/>
	</svg>
)

const videos = [
	{
		duration: '1:50',
		title: 'Как выбрать тепловой насос: какой вариант подходит именно вам',
		youtubeId: '13Mnx5ct4hc',
	},
	{
		duration: '1:54',
		title: 'Жылуулук насосун кантип тандоо: сизге кайсы вариант туура келет',
		youtubeId: 'bPWGX9g4qYU',
	},
	{
		duration: '1:23',
		title: 'Почему тепловые насосы актуальны для Бишкека: комфорт, воздух, расходы',
		youtubeId: 'bhRHx_1-l-A',
	},
	{
		duration: '1:43',
		title: 'Эмне үчүн жылуулук насостору Бишкек үчүн актуалдуу: комфорт, аба, чыгымдар',
		youtubeId: 'snRjMMlmk28',
	},
	{
		duration: '1:27',
		title: 'Что такое тепловой насос и как он работает?',
		youtubeId: '4FsRR_ejR5c',
	},
	{
		duration: '1:20',
		title: 'Жылуулук насосу деген эмне жана ал кандай иштейт?',
		youtubeId: 'lZmA41mF-YM',
	},
]

const HowItWorks = () => {
	const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

	return (
		<div className={styles.HowItWorks} id='how-it-works-section'>
			<div className={`${styles.container} container`}>
				<h2 className={styles.title}>Посмотрите, как это работает в жизни</h2>
				<h3 className={styles.subtitle}>
					Короткие видео от 2 до 5 минут: технология, выбор, реальный опыт,
					установка
				</h3>

				<ul className={styles.list}>
					{videos.map((video, index) => (
						<li
							className={styles.item}
							key={`${video.youtubeId}-${index}`}
						>
							<img
								className={styles.thumbnail}
								src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
								alt={video.title}
								onError={event => {
									const image = event.currentTarget
									if (image.dataset.fallbackApplied === 'true') return
									image.dataset.fallbackApplied = 'true'
									image.src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
								}}
							/>
							<span className={styles.upTitle}>{video.duration}</span>
							<h4 className={styles.innerTitle}>{video.title}</h4>
							<button
								type='button'
								className={styles.playWrapper}
								aria-label={`Смотреть видео: ${video.title}`}
								onClick={() => setActiveVideoId(video.youtubeId)}
							>
								<span className={styles.playSvg}>
									<PlayIcon />
								</span>
							</button>
						</li>
					))}
				</ul>
			</div>

			{activeVideoId && (
				<div
					className={styles.videoModal}
					role='dialog'
					aria-modal='true'
					onClick={() => setActiveVideoId(null)}
				>
					<div
						className={styles.videoModalInner}
						onClick={event => event.stopPropagation()}
					>
						<button
							type='button'
							className={styles.closeButton}
							onClick={() => setActiveVideoId(null)}
							aria-label='Закрыть видео'
						>
							&#10005;
						</button>
						<iframe
							className={styles.videoFrame}
							src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default HowItWorks
