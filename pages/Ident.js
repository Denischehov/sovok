import { motion as m } from 'framer-motion'
import { useEffect, useState } from 'react'
import Modal from './components/Modal.js'
export default function Ident() {
	const [showModal, setShowModal] = useState(false)
	const [showModal2, setShowModal2] = useState(false)
	const [showModal3, setShowModal3] = useState(false)
	const [show, setShow] = useState(false)
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	const [show4, setShow4] = useState(false)
	useEffect(() => {})
	return (
		<m.main
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className=' absolute top-0 left-0 w-full h-full  lg:px-48 px-16'
		>
			<div className='text-center my-32 lg:my-32 md:my-48 sm:my-72 '>
				<h2 className='border-[1px] rounded-xl p-1 text-3xl text-indigo-200 border-blue-200'>
					Приветствие
				</h2>
				<p className='border-[1px]  my-3 border-blue-200  duration-300 rounded-xl text-xl border-x-gray-500 border-y-gray-300 hover:border-x-indigo-200 hover:border-y-indigo-400'>
					<h2 className='text-2xl text-indigo-400'>
						Заявка на дк или Карту халва
					</h2>{' '}
					Добрый день! И.О
					<br />
					Звонок из Совкомбанка, меня зовут ..! Звоню, чтобы расказать вам о
					выгодных предложениях от нашего банка и сориентировать по доступным
					продуктам. Для этого задам вам несколько простых вопросов
				</p>
				<p className='border-[1px] my-3 border-x-gray-500 border-y-gray-300 hover:border-x-indigo-200 hover:border-y-indigo-400 duration-300 rounded-xl text-xl'>
					<h2 className='text-3xl text-indigo-400'>Кредитная карта (плюс)</h2>{' '}
					Добрый день! И.О? <br />
					Звонок из Совкомбанка, меня зовут ..! Понадобиться всего пару минут
					вашего времени! Звоню по вашей заявке на новую кредитную карту от
					совком банка 180 дней без %, сейчас раскажу о преимуществах карты а
					далее сможем перейти к оформлению, хорошо?
				</p>

				<p className='border-[1px] border-x-gray-500 border-y-gray-300 hover:border-x-indigo-200 hover:border-y-indigo-400 duration-300 rounded-xl text-xl'>
					<h2 className='text-3xl text-indigo-400'>
						Возражения на этапе установки контакта
					</h2>
					1. Выявляем истинную причину сомнений/ отказа <br />
					2. Прорабатываем минимум 3 отработки возражений
					<br />
					<h3 className='text-blue-200 text-2xl'>
						<button className='mx-1 '>Присоединение +</button>{' '}
						<button className='mx-1 '>Аргумент +</button>{' '}
						<button className='mx-1 '>Вопросы/Закртыие</button>
					</h3>
					<button
						className='text-blue-200 text-4xl duration-300 transition-all hover:text-blue-400 '
						onClick={() => setShowModal(true)}
					>
						Примеры возражений
					</button>{' '}
				</p>
				<Modal isVisible={showModal} onClose={() => setShowModal(false)}>
					<div className='text-gray-900 text-xl'>
						<p className=''>
							<button className='text-blue-400' onClick={() => setShow(!show)}>
								Вы звоните не с номера совкомбанка
							</button>
							<p className={`text-blue-100 content ${show ? 'show' : ''}`}>
								<p className='border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2'>1. </a> Здорово, что
									проявляете бтительность, действительно мы звоним с разных
									номеров, в том числе и с мобильных. Вы всегда можете
									перезвонить на этот номер, и попадете в единый контакт центр
									Совкомбанка. А поскольку мы до Вас уже дозвонились, предлагаю
									не тратить на это время и всё подробно обсудить сейчас.
									Продолжим
								</p>
								<p className='my-2 border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2'>2. </a> Хорошо, что
									обращаете на это внимание и проявляете бдительность. Для
									подтверждения того, что я действительно из Банка, я направлю
									Вам СМС сообщение с официального номера Совкомбанка о
									подтверждении данных. Это сможет убедить Вас в том, что я из
									Банка?
								</p>
								<p className='border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2'>3. </a> Да, действительно в
									наше время участились случаи мошенничества, и тем не менее эти
									данные позволят нам узнать предварительное решение и подобрать
									для Вас подходящий продукт, Продолжим?
								</p>
							</p>
						</p>
						<p className=''>
							<button
								className='text-blue-400'
								onClick={() => setShow1(!show1)}
							>
								Просто не надо
							</button>
							<p className={`text-blue-100 content ${show1 ? 'show' : ''}`}>
								<p className='border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2'>1. </a>Правильно понимаю,
									обходитесь собственными средствами? Возможно Вам именно сейчас
									не нужно, именно поэтому хочу обратить внимание, что договор
									оформляется на 5 лет, за это время наверняка будете совершать
									покупки, верно? Так вот, платить за то, что Вы просто
									оформляете карту не нужно и как только она Вам понадобится, Вы
									сможете ей воспользоваться, Что скажете?
								</p>
								<p className='my-2 border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2 '>2.</a>Беспорно радует Ваша
									финансовая стабильность, вместе с тем, я не предлагаю Вам жить
									в кредит и переплачивать. Наоборот с КР Халва Вы сможете
									увеличить свой финансовый бюджет за счет кэшбека и начисления
									процентов на остаток, Давайте рассмотрим возможность
									оформления карты. При положительном решении начнете
									пользоваться и будете приятно удивлены. Что скажете?
								</p>
								<p className='border-y-2 border-violet-300 py-2 my-1 rounded-lg'>
									<a className='text-rose-100 my-2'>3. </a>И.О., очень хорошо,
									что Вы привыкли рассчитывать на собственные средства, однако,
									иногда бывают такие моменты, что до зарплаты остается еще
									несколько дней, а какой-то товар хотелось бы приобрести именно
									сейчас. Карта будет выдана Вам на случай помощи в предстоящих
									покупках и вы сможете в любой момент воспользоваться денежными
									средствами. Согласны? Продолжаем?
								</p>
							</p>
						</p>
						<p className=''>
							<button
								className='text-blue-400'
								onClick={() => setShow2(!show2)}
							>
								Я на работе
							</button>
							<p className={`text-blue-100 content  ${show2 ? 'show' : ''}`}>
								<p className='border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2'>1. </a>Да, вопрос
									комфортного общения очень важный вопрос. Тем более, по
									финансовым моментам,однако,наш разговор займет 2-3 минуты,
									Согласны уделить?
								</p>
							</p>
						</p>
						<p className=''>
							<button
								className='text-blue-400'
								onClick={() => setShow3(!show3)}
							>
								Мне нужно подумать/посоветоваться с семьей
							</button>
							<p className={`text-blue-100 content ${show3 ? 'show' : ''}`}>
								<p className='border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2'>1. </a>Да, согласен(на), я
									тоже обычно советуюсь с супругом/ой перед принятием решения, в
									тоже время, чтобы Вы могли уже предметно обсудить условия, я
									предлагаю завести заявку и узнать решение. Когда будет решение
									от Банка, тогда уже и выбор будет за вами, Давайте продолжим и
									узнаем предварительное решение?
								</p>
								<p className='my-3 border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100 my-2'>2. </a>В чём Ваши сомнения?
									Понимаю, что предложение для Вас поступило неожиданно, При
									этом хочу отметить, что мы все наблюдаем повсеместно повышение
									цен. Чтобы потом не сожалеть об упущенных возможностях,
									давайте оформим сейчас и сможете приобрести/реализовать планы
									по текущим ценам. Давайте узнаем, что приготовил для Вас Банк?
								</p>
							</p>
						</p>
						<p className=''>
							<button
								className='text-blue-400'
								onClick={() => setShow4(!show4)}
							>
								Вы постоянно мне звоните, надоели
							</button>
							<p className={`text-blue-100 content ${show4 ? 'show' : ''}`}>
								<p className='my-3 border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100'>1. </a>Откуда звонки Вам
									поступают? И.О, согласна частые звонки надоедают, При этом,
									если Вы уделите мне 2-3 минуты своего времени, я сообщу о
									предложении, которое для Вас сейчас действует и , возможно,
									после нашего разговора Ваше мнение изменится, Я предлагаю
									послушать и уже потом принять решение, что скажете?
								</p>
								<p className='my-3 border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100'>2. </a>И.О., Вам регулярно
									поступают предложения из различных банков? Понимаю Вас, иногда
									звонки бывают действительно бесполезными для нас, И.О., тем не
									менее сейчас совсем не такой случай. Вам когда-нибудь
									поступало предложение по кредиту под итоговую нулевую
									ставку?Давайте я расскажу Вам о предложение, сделаю расчеты.
									Много времени у Вас это не займет. Согласитесь будет обидно,
									если упустите возможность оформить деньги на таких выгодных
									условиях
								</p>
								<p className='border-y-2 border-violet-300 py-2 rounded-lg'>
									<a className='text-rose-100'>3. </a>Да, Вас понимаю, мне самой
									иногда часто звонят банки, При этом, если Вы уделите мне
									немного своего времени, я сообщу о предложении, которое для
									Вас сейчас действует и , возможно, после нашего разговора
									некоторые ваши желания будут реализованы, Я предлагаю
									послушать и уже потом принять решение, что скажете?
								</p>
							</p>
						</p>
					</div>
				</Modal>

				<footer className=' mt-6  border-[1px] rounded-xl border-x-gray-500 border-y-gray-300 hover:border-x-indigo-200 hover:border-y-indigo-400 duration-300 text-center p-3'>
					<p>
						Разработчик: Иван Дмитриевич. Контакты:
						<a
							className='hover:text-indigo-400 duration-300 px-2'
							href='https://t.me/Freak_3112'
							target='_blank'
							rel='noreferrer'
						>
							Telegram
						</a>
						<a
							className='hover:text-indigo-400 duration-300'
							href='https://vk.com/fckallworldexpectyou'
							target='_blank'
							rel='noreferrer'
						>
							Вконтакте
						</a>
						<a
							className='hover:text-indigo-400 duration-300 px-2'
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
