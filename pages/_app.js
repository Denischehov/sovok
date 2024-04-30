import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import Navbar from './components/Navbar'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<h1 className='my-2 text-4xl text-center'>Скрипт Совкомбанк</h1>
			<AnimatePresence initial={false}>
				<Component {...pageProps} />
			</AnimatePresence>
			<Navbar />
		</div>
	)
}

export default MyApp
