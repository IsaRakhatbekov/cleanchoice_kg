import Image from 'next/image'
import styles from './Partners.module.scss'

import Partners1 from '../../../public/Partners1.png'
import Partners2 from '../../../public/Partners2.png'
import Partners3 from '../../../public/Partners3.png'
import Partners4 from '../../../public/Partners4.png'

const Partners = () => {
	return (
		<section className={styles.Partners}>
			<div className={`${styles.container} container`}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Image src={Partners1} alt='' />
					</li>
					<li className={styles.item}>
						<Image src={Partners2} alt='' />
					</li>
					<li className={styles.item}>
						<Image src={Partners3} alt='' />
					</li>
					<li className={styles.item}>
						<Image src={Partners4} alt='' />
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Partners
