import Link from 'next/link'
export default function Navbar() {
	return (
		<nav className='text-xl z-10 font-medium relative '>
			<ul className=' flex flex-nowrap gap-5 my-2	justify-center '>
				<Link href={'/Ident'}>
					<button
						className='transition border-2 border-indigo-900 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Идентификация
					</button>
				</Link>

				<Link href={'/Minimal'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Минимальные требования
					</button>
				</Link>

				<Link href={'/Minute'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Удержание
					</button>
				</Link>

				<Link href={'/'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Бки
					</button>
				</Link>

				<Link href={'/Presentation'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Презентация
					</button>
				</Link>
				<Link href={'/Fis'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						ФИС
					</button>
				</Link>

				<Link href={'/Results'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Итоги
					</button>
				</Link>

				<Link href={'/Term'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Рефинансирование
					</button>
				</Link>
				<Link href={'/objections'}>
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 '
					>
						Возражения
					</button>
				</Link>
			</ul>
		</nav>
	)
}
