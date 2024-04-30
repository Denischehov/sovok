import { motion as m } from 'framer-motion'
import styles from './Minute.module.css'
export default function Minute() {
	return (
		<m.main
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className={styles.Minute}
		>
			<div className='grid place-content-center my-96   text-6xl text-blue-300 '>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://onedrive.live.com/edit.aspx?resid=AA41D7FA206E08E!119&cid=aa41d7fa206e08e&CT=1713771901703&OR=ItemsView'
				>
					Сводная таблица
				</a>
			</div>
		</m.main>
	)
}
