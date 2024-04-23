import { useState } from 'react'
import Inputs from './Inputs'

const Main = () => {
	const [date, setDate] = useState<Date>()
	const [time, setTime] = useState<string>()

	console.log(time)

	return (
		<main className='grid justify-center'>
			<Inputs date={date} setDate={setDate} setTime={setTime} />
		</main>
	)
}

export default Main
