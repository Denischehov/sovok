import { motion as m } from 'framer-motion'
import { useEffect, useState } from 'react'
export default function Minimal() {
	const [show1, setShow1] = useState(false)
	const [show, setShow] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	const [show4, setShow4] = useState(false)
	const [show5, setShow5] = useState(false)
	const [show6, setShow6] = useState(false)
	const [show7, setShow7] = useState(false)
	const [show8, setShow8] = useState(false)
	const [show9, setShow9] = useState(false)
	const [show10, setShow10] = useState(false)
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
				<h2 className='border-2 rounded-xl p-1 text-3xl text-blue-300 border-blue-400 '>
					Минимальные требования на ДК или карту халва
				</h2>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl'>
					Назовите пожалуйста ваше Имя, Фамилию, Отчество и дату рождения.
				</p>
				<p className={`text-blue-300 content ${show ? 'show' : ''}`}></p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button className='' onClick={() => setShow(!show)}>
						Вы являетесь гражданином Российской федерации, верно?
					</button>
					<p className={`text-blue-300 content ${show ? 'show' : ''}`}>
						Нет - презентуй дебетовую карту Халва
					</p>
				</p>

				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow1(!show1)}>
						Скажите пожалуйста, имеется ли у вас инвалидность? Если да, то какой
						группы?{' '}
					</button>
					<p className={`text-blue-300 content ${show1 ? 'show' : ''}`}>
						2, 3 группа - пенсию по инвалидности можно рассмотреть как основной
						доход БКИ/АВБ/доставка - доступны.
						<br /> 1 группа - пенсию по инвалидности можем рассмотреть как
						основной доход. Пригласи в офис без БКИ на продукт в заявки или
						который интересует клиента (доставка недоступна)
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button className='' onClick={() => setShow2(!show2)}>
						У вас постоянная регистрация?
					</button>
					<p className={`text-blue-300 content ${show2 ? 'show' : ''}`}>
						Временная - доступна халва без лимита с возможностью получить лимит
						в будущем. (если выполнит условие по проживанию) Нет регистрации -
						Презентуй дебетовую халву
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow3(!show3)}>
						Уточните пожалуйста регион вашей регистрации
					</button>
					<p className={`text-blue-300 content ${show3 ? 'show' : ''}`}>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://minerva.sovcombank.ru/content/space/52/article/21705?query=%D0%BA%D0%B1%D1%80'
						>
							{' '}
							Кбр
							<br />
							Крым
							<br />
							Днр/ Лнр/ Херсонская и запорожская обл{' '}
						</a>
						Оформление в офисе банка, без БКИ.
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow4(!show4)}>
						Постоянная регистрация/прописка не менялись за последние 4 месяца?
					</button>
					<p className={`text-blue-300 content ${show4 ? 'show' : ''}`}>
						Менялась: Прописка и выписка в одном населенном пункте?
						<br />
						В одном: Разрыв между пропиской и выпиской не более 7 дней?
						<br />
						Менее 7 дней: Переходи к след вопросу.
						<br />7 дней и более: Доступна халва без лимита.
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow5(!show5)}>
						И.О, в каком городе вы сейчас проживаете?{' '}
					</button>
					<p className={`text-blue-300 content ${show5 ? 'show' : ''}`}>
						Проверь наличие в НП клиента или в радиусе 70 км по кнопке в CRM -
						По адресу клиента. Нет офиса в радиусе 70 км - Сообщаем: И.О, на
						данный момент заявку рассмотреть не можем. Причину не озвучиваем.
						Если спрашивают, когда можно подать заявка - через 90 дней
					</p>
				</p>
				<h2 className='border-2 rounded-xl p-1 text-3xl text-blue-300 border-blue-400'>
					Работа
				</h2>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow6(!show6)}>
						{' '}
						И.О, скажите, вы ОФИЦИАЛЬНО трудоустроены?{' '}
					</button>
					<p className={`text-blue-300 content ${show6 ? 'show' : ''}`}>
						Если да:{' '}
						<p className='text-blue-100'>
							Ваш официальный стаж на текущем месте работы более 4х месяцев?
						</p>{' '}
						4 мес. и более - целевой на карту с лимитом. Менее 4-х мес халва без
						лимита (Стаж считается непрерывным если менял работу при оформлении
						переводом)
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow7(!show7)}>
						{' '}
						По трудовому договору работаете?{' '}
					</button>
					<p className={`text-blue-300 content ${show7 ? 'show' : ''}`}>
						Да/Не знаю задаём вопросы.
						<br />
						1. Производит ли Ваш работодатель отчисления в Пенсионный фонд и
						Налоговую за вас?
						<br />
						2. 13% с Вашей з/п удерживается?
						<br />
						3. Больничные отпуска оплачиваются? <br />
						Да (на все вопросы) спроси про стаж. <br />
						Нет хотя бы один вопрос - спроси про ип или самозанятость
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow8(!show8)}>
						{' '}
						Может зарегистрированы как ип или самозанятый?{' '}
					</button>
					<p className={`text-blue-300 content ${show8 ? 'show' : ''}`}>
						Да (если самозанятый уточни про приложение мой налог)
						<br />
						4 мес. и более - целевой
						<br />
						Менее 4х - Доступна халва без лимита
						<br />
						Нет - спроси про пенсию.
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl'>
					<button> На пенсии состоите? </button>
					<p className='text-blue-300'>Состоит - с чем связана пенсия?</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow9(!show9)}>
						Декрет официальный (находится в штате организации){' '}
					</button>
					<p className={`text-blue-300 content ${show9 ? 'show' : ''}`}>
						Уточните, сейчас получаете пособия да 1,5 лет До 1,5 лет - считаем
						как постоянный доход клиент целевой на халву с лимитом <br />
						1,5 года и более - уточняем другой источник дохода - если нет -
						халва без лимита
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl hover:text-blue-200 duration-300'>
					<button onClick={() => setShow10(!show10)}>
						{' '}
						Работает неофициально{' '}
					</button>
					<p className={`text-blue-300 content ${show10 ? 'show' : ''}`}>
						На организацию - 4 мес и более ДК, КНКПЗА, ДКПЗН. в офисе - халва
						без лимита. <br />
						На себя - Без бки ДКПЗН халва без лимита
					</p>
				</p>
				<p className='border-2 my-3 border-blue-400 rounded-xl text-xl'>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://onedrive.live.com/edit.aspx?resid=AA41D7FA206E08E!119&cid=aa41d7fa206e08e&CT=1713771901703&OR=ItemsView'
						className='hover:text-blue-200 duration-300'
					>
						Далее в Свод таблицу
					</a>{' '}
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
