import { useState } from 'react'
import Inputs from './Inputs'

const formatExamples: Record<string, string> = {
	relative: '2 days ago',
	shortTime: '2:30 PM',
	longTime: '2:30:45 PM',
	shortDate: '02/02/2023',
	longDate: 'February 2, 2023',
	longDateShortTime: '2 February 2023 2:30 PM',
	full: 'Friday, February 2, 2023, 2:30:45 PM',
}

const Main = () => {
	const [date, setDate] = useState<Date>()
	const [time, setTime] = useState<string>()
	const [format, setFormat] = useState<string>()

	console.log(time, format)

	return (
		<main className='grid justify-center'>
			<Inputs
				date={date}
				setDate={setDate}
				setTime={setTime}
				setFormat={setFormat}
			/>
			<div className='mt-4 h-8 text-center'>
				{format && (
					<p className='text-lg opacity-80'>{formatExamples[format]}</p>
				)}
			</div>
		</main>
	)
}

export default Main
