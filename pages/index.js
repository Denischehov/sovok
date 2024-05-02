import { motion as m } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Modal from './components/Modal'

export default function Home() {
	const [show, setShow] = useState(false)
	const [showModal, setShowModal] = useState(false)
	useEffect(() => {})
	return (
		<m.div
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className=' absolute top-0 left-0 w-full h-full lg:px-48 px-16 my-10'
		>
			<Head>
				<title>Совкомбанк скрипт</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div className='text-center my-32 lg:my-20 md:my-36 sm:my-52 '>
					<h2 className='border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl p-1 text-3xl text-blue-200 border-blue-400'>
						БКИ
					</h2>
					<p className='border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 my-3 duration-300 rounded-xl text-xl'>
						<h2 className='text-2xl text-indigo-300'>
							Запрос в бки карта халва с лимитом/ДК
						</h2>
						Какая сумма вас интересует?{' '}
						<p className='text-blue-200'>
							В бки вносим желаемую сумму в диапазоне 50.000 - 500.000р/ для
							Соц.хавы 50.000-120.000
						</p>
						Назовите пожалуйста ваш среднемесячный доход? Для экономии вашего
						времени мы прямо сейчас узнаем предварительное решение. Назовите
						пожалуйста серию и номер Вашего паспорта. И,О., Вы даёте согласие на
						обработку персональных данных?
					</p>

					<p className='border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 my-3 duration-300 rounded-xl text-xl'>
						<h2 className='text-3xl text-indigo-300'>Карта халва без лимита</h2>
						И.О., Вам доступно предложение карты халва без лимита с возможностью
						получить лимит в будущем. Эта карта с бесплатным обслуживанием, на
						ней Вы сможете размещать и тратить собственные средства, а при
						соблюдении условий будет начисляться кэшбэк и процент на остаток
						собственных средств. Как по вкладу. Если активно пользоваться
						картой, Банк может рассмотреть предоставление кредитного лимита, и
						тогда сможете пользоваться картой халва, как картой рассрочки.
						Оформление в офисе банка займет всего 15-20 минут. Нужен только
						паспорт. В какой день вам удобнее?
					</p>

					<p className='border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 my-3 duration-300 rounded-xl text-xl'>
						<h2 className='text-3xl text-indigo-300'>
							Если у клиента нет паспорта под рукой{' '}
						</h2>
						<p className='text-blue-200 text-2xl'>
							Уточняем есть ли фото паспорта
						</p>
						Сейчас у многих сохранено фото паспорта в телефоне. Посмотрите
						пожалуйста, я подожду.
						<p className='text-blue-200 text-2xl'>Уточняем наличие гос услуг</p>
						Многие клиенты ещё в Гос услугах смотрят. Наверняка и у вас есть.
						Посмотрите пожалуйста, я подожду. <br />
						<p className='text-blue-200'>
							Нет фото и гос услуг сообщи о необходимости подготовить документы
							и договорись о перезвоне
						</p>
						<h2 className='text-3xl text-indigo-300'>
							Исключение: тип карточки Клиент или Заявитель фронт офис.
						</h2>
						С последнего обращения в Банк паспортные данные не менялись?
						<br />
						<a className='text-blue-200'> Не менялись - </a> делаем БКИ по
						текущим данным, действуем исходя из решения бки. <br />
						<a className='text-blue-200'> Менялись - </a>
						Сообщи о необходимости подготовить паспорт и договорись о перезвоне.
					</p>
					<p className='border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 my-3 duration-300 rounded-xl text-xl'>
						<h2 className='text-3xl text-indigo-300'>
							Кредитная карта <p className='text-red-300'>Без БКИ</p>
						</h2>
					</p>
					<p className='border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 my-3 duration-300 rounded-xl text-xl'>
						<a
							href='https://minerva.sovcombank.ru/content/space/52/article/21599/page/3?query=FIS'
							target='_blank'
							rel='noreferrer'
							className='text-3xl text-indigo-300'
						>
							Решения по БКИ
						</a>
					</p>
					<button
						onClick={() => setShowModal(true)}
						className=' border-2 border-indigo-900 hover:border-violet-700 my-3 rounded-xl p-2
					ease-in-out delay-150 bg-violet-700 hover:-translate-y-1 hover:scale-110  relative hover:scale-y-110 hover:bg-violet-900 duration-300'
					>
						Возражения
					</button>
				</div>
				<Modal isVisible={showModal} onClose={() => setShowModal(false)}>
					<div className=' text-gray-900 text-2xl grid col-auto grid-cols-'>
						<p>
							<button
								className='text-indigo-500  mx-2'
								onClick={() => setShow(!show)}
							>
								Опасаюсь называть паспортные данные по телефону
							</button>
							<p className={`text-indigo-300 content ${show ? 'show' : ''}`}>
								<p className='border-y-[1px] border-violet-300 py-2 my-2'>
									1. Хорошо, что обращаете на это внимание и проявляете
									бдительность. Для подтверждения того, что я действительно из
									Банка, я направлю Вам СМС сообщение с официального номера
									Совкомбанка о подтверждении данных. Это сможет убедить Вас в
									том, что я из Банка?
								</p>
								<p className='border-y-[1px] border-violet-300 py-2 my-2'>
									2. Да, действительно в наше время участились случаи
									мошенничества и тем не менее эти данные позволят нам узнать
									предварительное решение и подобрать для Вас подходящий
									продукт. Продолжим?
								</p>
								<p className='border-y-[1px] border-violet-300 py-2 my-2'>
									3. И.О, Вы правильно поступаете проявляя бдительность и все же
									хочу отметить что, Банк запрашивает минимум информации, по
									которым не возможно ничего оформить, а так же эти данные
									никакой юридической силы без Вашего присутствия и подписи не
									несут. Мне удалось развеять ваши опасения?
								</p>
								<p className='border-y-[1px] border-violet-300 py-2 my-2'>
									4. Здорово, что проявляете бдительность, действительно мы
									звоним с разных номеров, в том числе и с мобильных. Вы всегда
									можете перезвонить на этот номер, и попадете в единый контакт
									центр Совкомбанка. А поскольку мы до Вас уже дозвонились,
									предлагаю не тратить на это время и всё подробно обсудить
									сейчас. Продолжим?
								</p>
							</p>
						</p>
					</div>
				</Modal>
			</main>
			<footer className=' mt-6  border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl duration-300 text-center p-3'>
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
					Также вы можете поддержать разработку сайта: По номеру карты Cбербанк:
					2202205025089332
					<br />
					Тинькофф: 5536914119311334
				</p>
			</footer>
		</m.div>
	)
}
