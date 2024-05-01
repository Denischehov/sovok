import { motion as m } from 'framer-motion'

export default function Fis() {
	return (
		<m.main
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className=' absolute top-0 left-0 w-full h-full  lg:px-48 px-16'
		>
			<div className='text-center my-32 lg:my-32 md:my-48 sm:my-72 '>
				<h2 className='border-2 rounded-xl p-1 text-3xl text-blue-200 border-blue-400'>
					ФИС
				</h2>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl'>
					<h2 className='text-2xl text-blue-300'>
						Заявка на дк или Карту халва
					</h2>{' '}
					Добрый день! И.О
					<br />
					Звонок из Совкомбанка, меня зовут ..! Звоню, чтобы расказать вам о
					выгодных предложениях от нашего банка и сориентировать по доступным
					продуктам. Для этого задам вам несколько простых вопросов
				</p>

				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl'>
					<h2 className='text-3xl text-blue-300'>Заявка КХ Рефинансирование</h2>
					Добрый день! И.О? <br />
					Звонок из Совкомбанка, меня зовут ..! Понадобиться всего пару минут
					вашего времени! Звоню по вашей заявке на карту Халва, которую вы
					оставили на сайте нашего банка, Планируете рефинансировать Халвой
					карты других банков, верно?
				</p>

				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl'>
					<h2 className='text-3xl text-blue-300'>Кредитная карта (плюс)</h2>{' '}
					Добрый день! И.О? <br />
					Звонок из Совкомбанка, меня зовут ..! Понадобиться всего пару минут
					вашего времени! Звоню по вашей заявке на новую кредитную карту от
					совком банка 180 дней без %, сейчас раскажу о преимуществах карты а
					далее сможем перейти к оформлению, хорошо?
				</p>
				<footer className=' mt-6  border-2 rounded-xl border-blue-400 text-center p-3'>
					<p>
						Разработчик: Иван Дмитриевич. Контакты:
						<a
							className='hover:text-blue-300 duration-300 px-2'
							href='https://t.me/Freak_3112'
							target='_blank'
							rel='noreferrer'
						>
							Telegram
						</a>
						<a
							className='hover:text-blue-300 duration-300'
							href='https://vk.com/fckallworldexpectyou'
							target='_blank'
							rel='noreferrer'
						>
							Вконтакте
						</a>
						<a
							className='hover:text-blue-300 duration-300 px-2'
							target='_blank'
							rel='noreferrer'
							href='https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvnrFxthbvVSqjmbwKlLVMNgjbQCCShwHPKXZTCSLLhsvlmgWrsmCFSzjZPlgLGvThchqB'
						>
							Написать на почту
						</a>
						Также вы можете поддержать разработку сайта: По номеру карты
						Cбербанк: 2202205025089332
						<br />
						Тинькофф: 5536914119311334
					</p>
				</footer>
			</div>
		</m.main>
	)
}
