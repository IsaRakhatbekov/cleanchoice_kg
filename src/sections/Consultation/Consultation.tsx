import styles from './Consultation.module.scss'

const Consultation = () => {
	return (
		<section className={styles.Consultation}>
			<div className={`${styles.container} container`}>
				<h2 className={styles.title}>Получите консультацию специалиста</h2>
				<h3 className={styles.subtitle}>
					Оставьте контакт — мы свяжемся в течение 24 часов
				</h3>
				<form className={styles.form}>
					<div className={styles.wrapper}>
						<label className={styles.lbl} htmlFor='name'>
							Имя
						</label>
						<input
							className={styles.inp}
							type='text'
							id='name'
							placeholder='Как к вам обращаться?'
						/>
					</div>
					<div className={styles.wrapper}>
						<label className={styles.lbl} htmlFor='phone'>
							Телефон
						</label>
						<input
							className={styles.inp}
							type='text'
							id='phone'
							placeholder='+996 (555) 000-000'
						/>
					</div>
					<div className={styles.wrapper}>
						<label className={styles.lbl} htmlFor='comment'>
							Комментарий
						</label>
						<textarea
							className={`${styles.inp} ${styles.textarea}`}
							name='comment'
							id='comment'
							placeholder='Расскажите кратко о вашей ситуации'
						></textarea>
					</div>
					<div className={styles.checkboxWrapper}>
						<input type='checkbox' id='checkbox' />
						<label htmlFor='checkbox'>
							Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
						</label>
					</div>

					<button className={styles.btn}>Отправить заявку</button>
				</form>
			</div>
		</section>
	)
}

export default Consultation
