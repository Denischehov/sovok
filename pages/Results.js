import { motion as m } from 'framer-motion'
export default function Results() {
	return (
		<m.main
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className=' absolute top-0 left-0 w-full h-full  lg:px-48 px-16'
		>
			<div className='text-center my-32 lg:my-32 md:my-48 sm:my-72 '>
				<h2 className='border-2 rounded-xl p-1 text-3xl text-indigo-200 border-indigo-400'>
					Итоги
				</h2>
				<p className='border-2 my-3 border-indigo-400 rounded-xl text-xl'>
					<h2 className='text-2xl text-indigo-300'>Встреча в офис ДК/Халва</h2>
					И.О, давайте подберём для вас удобный офис и назначим день визита.
					Назовите пожалуйста район города/станцию метро/улицу я сориентирую вас
					по ближайшему офису. <br />
					Офис работает ____ Сегодня или завтра сможете подойти в офис? Перед
					визитом рекомендую всегда сверять режим работы офиса на сайте Банка.{' '}
					<br />
					И.О встреча предварительно назначена. Ожидаем вас по адресу ___ на __
					дату. <br />
					Не забудьте с собой документы{' '}
					<p className='text-indigo-200'>
						перечисли какие, скажи про гос услуги (отправь смс) и подтверди
						email. (с типом клиент)
					</p>
					У вас остались вопросы? Спасибо за уделенное время хорошего вам дня.
					До свидания!
				</p>

				<p className='border-2 my-3 border-indigo-400 rounded-xl text-xl'>
					<h2 className='text-3xl text-indigo-300'>Доставка карта Халва</h2>
					Назовите пожалуйста адрес куда можно оформить доставку карты? И.О, в
					какой деь вам удобнее встретиться с сотрудником, завтра или
					послезавтра? Доставка возможна с 9:00 до 20:00 во сколько вам удобнее?
					<br />
					Уточните, это ваш контактный номер?
					<br /> И.О, доставка ПРЕДВАРИТЕЛЬНО назначена на ___ число временной
					интервал ___ по адресу ___ ожидайте, с вам свяжется сотрудник доставки
					и вы сможете подробно обсудить все детали встречи. И.О, не забудьте
					взять с собой паспорт РФ.{' '}
					<p className='text-indigo-200'>
						Скажи про гос услуги (отправь смс) подтверди email. (с типом клиент)
						И предупреди про смс с ссылкой на ОМП
					</p>
					У вас остались вопросы? Спасибо за уделенное время хорошего вам дня.
					До свидания!
					<p className='text-indigo-200'>
						Результат в CRM Халва с лимитом - доставка
					</p>
				</p>

				<p className='border-2 my-3 border-indigo-400 rounded-xl text-xl'>
					<h2 className='text-3xl text-indigo-300'>Заявка АВБ</h2> Добрый день!
					И.О, ваша заявка направленна на дистанционное рассмотрение. По итогу
					рассмотрения с Вами свяжутся в течении 3-х рабочих дней.{' '}
					<p className='text-indigo-200'>
						Скажи про гос Услуги, также с типом карточки клиент подтверди email.
						Проверь доступность пилота Доставка халвы сразу
					</p>
				</p>
				<footer className=' mt-6  border-2 rounded-xl border-indigo-400 text-center p-3'>
					<p>
						Разработчик: Иван Дмитриевич. Контакты:
						<a
							className='hover:text-indigo-300 duration-300 px-2'
							href='https://t.me/Freak_3112'
							target='_blank'
							rel='noreferrer'
						>
							Telegram
						</a>
						<a
							className='hover:text-indigo-300 duration-300'
							href='https://vk.com/fckallworldexpectyou'
							target='_blank'
							rel='noreferrer'
						>
							Вконтакте
						</a>
						<a
							className='hover:text-indigo-300 duration-300 px-2'
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

// TODO: Запись в фис и офис
