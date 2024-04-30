import { motion as m } from 'framer-motion'
import React from 'react'
const Modal = ({ isVisible, onClose, children }) => {
	if (!isVisible) return null

	const handleClose = e => {
		if (e.target.id === 'wrapper') onClose()
	}

	return (
		<m.div
			key='modal'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className='fixed inset-0 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
			id='wrapper'
			onClick={handleClose}
		>
			<div className='w-[98%] mt-10 max-h-[68%] rounded-xl flex flex-row bg-[#242424] '>
				<div className=' p-2 rounded modal'>
					{children}
					<button
						className='transition border-indigo-900 border-2 rounded-xl p-3
					ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 relative w-[100px] mx-auto my-3'
						onClick={() => onClose()}
					>
						Закрыть
					</button>
				</div>
			</div>
		</m.div>
	)
}

export default Modal
