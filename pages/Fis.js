import { motion as m } from 'framer-motion'
import { useEffect, useState } from 'react'
export default function Fis() {
	const [show, setShow] = useState(false)
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	const [show4, setShow4] = useState(false)
	const [show5, setShow5] = useState(false)
	const [show6, setShow6] = useState(false)
	const [show7, setShow7] = useState(false)
	const [show8, setShow8] = useState(false)
	const [show9, setShow9] = useState(false)
	const [show10, setShow10] = useState(false)
	const [show11, setShow11] = useState(false)
	const [show12, setShow12] = useState(false)
	const [show13, setShow13] = useState(false)
	const [show14, setShow14] = useState(false)
	useEffect(() => {})
	return (
		<m.main
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className=' absolute top-0 left-0 w-full h-full  lg:px-48 px-16'
		>
			<div className='text-center my-32 lg:my-32 md:my-48 sm:my-72 lowercase '>
				<h2 className='border-2 rounded-xl rounded-xl  text-3xl text-indigo-200 border-indigo-400'>
					ФИС
				</h2>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1 hover:text-indigo-200 duration-300'
						onClick={() => setShow(!show)}
					>
						Направьте Клиента в отделение, дистанционное рассмотрение недоступно{' '}
					</h2>{' '}
					<p className={`content my-1 text-white ${show ? 'show' : ''}`}>
						Пригласи Клиента в отделение. <br /> Если Клиент подал заявку на
						Карту Халва, завели заявку на дистанционное рассмотрение кредита и
						по заявке пришло такое решение то необходимо пригласить Клиента в
						отделение на ДК и Халву с лимитом.
					</p>
				</p>

				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow1(!show1)}
					>
						Временный отказ. Клиенту доступно дистанционное одобрение/ Временный
						отказ. Клиент направлен на дистанционное рассмотрение/ Временный
						отказ. Доступно дистанционное одобрение ЗАЛОГОВОГО КРЕДИТА
					</h2>
					<p className={`content my-1 text-white ${show1 ? 'show' : ''}`}>
						Заявка будет обрабатываться Виртуальным банком до 3 рабочих дней.{' '}
						<br /> <br /> Если заполнялось ранее другим сотрудником: Перевод на
						Виртуальный банк 47077 (Transfer: Виртуальный Банк) в течение 1
						месяца с момента получения решения. Через 1 месяц действуй по
						стандартной схеме (запрос БКИ и т.д.).
					</p>
				</p>

				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow2(!show2)}
					>
						Временный отказ. Клиенту доступно только залоговое кредитование
					</h2>
					<p className={`content my-1 text-white ${show2 ? 'show' : ''}`}>
						Предлагаем Клиенту дистанционное кредитование под залог авто или
						недвижимости. Заполняем новую заявку на залог. Повторно данные,
						можно не уточнять Если Клиент отказывается от оформления
						дистанционно продуктов - направляем в офис на стандартные продукты.{' '}
						<br /> <br />
						Если Клиент подал заявку на Карту Халва, завели заявку на
						дистанционное рассмотрение кредита и по заявке пришло решение с
						продажей залога , то схема действий как по заявкам на ДК: т.е.
						необходимо предложить другой тип продукта дистанционно и пере
						завести заявку
					</p>
				</p>

				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow3(!show3)}
					>
						Временный отказ. Клиенту доступно только залоговое
						кредитование/Кредитный доктор
					</h2>
					<p className={`content my-1 text-white ${show3 ? 'show' : ''}`}>
						Предлагаем оформление Залогового кредитования (авто или
						недвижимости) или Кредитный доктор. Заполняем новую заявку на залог/
						КД. Повторно данные, можно не уточнять. Если Клиент отказывается от
						оформления дистанционно продуктов, направляем в офис на стандартные
						продукты.
						<br /> <br /> Если Клиент подал заявку на Карту Халва, завели заявку
						на дистанционное рассмотрение кредита и по заявке пришло решение с
						продажей Залога/КД , то схема действий как по заявкам на ДК: т.е.
						необходимо предложить другой тип продукта дистанционно и перезавести
						заявку
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow4(!show4)}
					>
						Отказ. СПЕЦ. ПРЕДЛОЖЕНИЕ! Оформи Кредитный Доктор
					</h2>
					<p className={`content my-1 text-white ${show4 ? 'show' : ''}`}>
						{' '}
						Предлагаем продукт согласно спец. отказу, РсВ стандартно, т.е.
						Кредитный доктор. Если Клиент не готов оформить предложенный продукт
						– направляем в офис за картой Халва без лимита с возможностью
						получить в дальнейшем лимит
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow5(!show5)}
					>
						Отказ. СПЕЦ. ПРЕДЛОЖЕНИЕ! Оформи ДКПЗА (в т.ч. под авто 3-х лиц),
						или ДКПЗН
					</h2>
					<p className={`content my-1 text-white ${show5 ? 'show' : ''}`}>
						Предлагаем продукт согласно спец. отказу, РсВ стандартно, т.е. залог
						авто/ недвижимости <br /> <br />
						Если Клиент не готов оформить предложенный продукт – направляем в
						офис за картой Халва без лимита с возможностью получить в дальнейшем
						лимит
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow6(!show6)}
					>
						Отказ. Клиент выплатил Кредитного Доктора, в настоящий момент
						доступен продукт деньги на карту 10 000
					</h2>
					<p className={`content my-1 text-white ${show6 ? 'show' : ''}`}>
						Консультируем данных Клиентов по условиям УКИ – 2 этап и переводим
						на ВБ с дозвоном
						<br /> <br />
						Если Клиент не готов оформить предложенный продукт/ не подходит по
						требованиям – направляем в офис за картой Халва без лимита с
						возможностью получить в дальнейшем лимит.{' '}
					</p>
				</p>
				<p
					className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'
					onClick={() => setShow7(!show7)}
				>
					<h2 className='text-xl my-1  hover:text-indigo-200 duration-300'>
						Отказ (90 дн)
					</h2>
					<p className={`content my-1 text-white ${show7 ? 'show' : ''}`}>
						Если после заведенного Светофора Клиенту приходит отказ, в данном
						случае направляем в офис за картой Халва без лимита с возможностью
						получить в дальнейшем лимит
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow8(!show8)}
					>
						Отказ. Передан в СД
					</h2>
					<p className={`content my-1 text-white ${show8 ? 'show' : ''}`}>
						Записать в офис Банка без озвучивания решения, используя фразу:
						«И.О., для дальнейшего рассмотрения приглашаю Вас в офис». При
						записи в офис указать продукт «СтопДолг» <br /> <br />
						Если Клиент не подходит по требованиям на «СтопДолг» - направляем в
						офис за картой Халва без лимита с возможностью получить в дальнейшем
						лимит{' '}
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow9(!show9)}
					>
						Отказ. Для рассмотрения заявки необходимо погасить задолженность
						перед ФССП РФ
					</h2>
					<p className={`content my-1 text-white ${show9 ? 'show' : ''}`}>
						У Клиента имеется задолженность перед ФССП РФ. В CRM проставь
						результат «Нецелевой»{' '}
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow10(!show10)}
					>
						Одобрено андеррайтингом, но выдачи нет/временный отказ с
						комментариями (только дистанционно)
					</h2>
					<p className={`content my-1 text-white ${show10 ? 'show' : ''}`}>
						Аналогично решению «Временный отказ. Клиенту доступно дистанционное
						одобрение»
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow11(!show11)}
					>
						Отказ. Паспорт числится как недействительный в базах ФМС. Подгрузите
						справку из ФМС в поле для доп. документа
					</h2>
					<p className={`content my-1 text-white ${show11 ? 'show' : ''}`}>
						{' '}
						Клиенту необходимо обратиться в ФМС по вопросу недействительности
						паспорта. Для нас данный Клиент нецелевой
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow13(!show13)}
					>
						Кредит предварительно одобрен, для оформления необходимо перевести
						пенсию в Совкомбанк. Или продайте Кредитного Доктора.​​​
					</h2>
					<p className={`content my-1 text-white ${show13 ? 'show' : ''}`}>
						Предлагаем Виртуальный Кредитный доктор. Если Клиент не готов
						оформить предложенный продукт – направляем в офис за картой Халва
						без лимита с возможностью получить в дальнейшем лимит
					</p>
				</p>
				<p className=' border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<h2
						className='text-xl my-1  hover:text-indigo-200 duration-300'
						onClick={() => setShow12(!show12)}
					>
						Требуется дополнительная проверка. Идет рассмотрение по технологии
						Супер+
					</h2>
					<p className={`content my-1 text-white ${show12 ? 'show' : ''}`}>
						{' '}
						Фиксируем результат «Светофор» и предаем Клиента менеджеру
					</p>
				</p>
				<footer className=' mt-6  border-[1px] rounded-xl border-y-gray-600 border-x-gray-300 hover:border-indigo-300 duration-300 text-center p-3'>
					<p>
						Разработчик: Иван Дмитриевич. Контакты:
						<a
							className='hover: hover:text-indigo-200 duration-300 duration-300 px-2'
							href='https://t.me/Freak_3112'
							target='_blank'
							rel='noreferrer'
						>
							Telegram
						</a>
						<a
							className='hover: hover:text-indigo-200 duration-300 duration-300'
							href='https://vk.com/fckallworldexpectyou'
							target='_blank'
							rel='noreferrer'
						>
							Вконтакте
						</a>
						<a
							className='hover: hover:text-indigo-200 duration-300 duration-300 px-2'
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
