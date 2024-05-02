import { motion as m } from 'framer-motion'
export default function Term() {
	return (
		<m.main
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className=' absolute top-0 left-0 w-full h-full  lg:px-48 px-16'
		>
			<div className='text-center my-32 lg:my-32 md:my-48 sm:my-72 '>
				<h2 className='rounded-xl p-1 text-3xl  border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200'>
					В РАЗРАБОТКЕ
				</h2>

				<footer className=' mt-6  rounded-xl p-1  border-[1px] p-2  my-3  border-y-gray-500 border-x-gray-200'>
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
