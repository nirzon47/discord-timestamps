import { useState } from 'react'
import Inputs from './Inputs'
import { Button } from '../ui/button'

const Main = () => {
	const [date, setDate] = useState<Date>()
	const [time, setTime] = useState<string>()
	const [format, setFormat] = useState<string>()
	const [output, setOutput] = useState<string>()

	const generateTimestamp = () => {
		if (!date || !time || !format) {
			setOutput('Fields empty')
			return
		}

		const newDate = date
		const [hours, minutes] = time.toString().split(':')

		newDate?.setHours(Number(hours))
		newDate?.setMinutes(Number(minutes))

		const epoch = Math.floor(newDate.getTime() / 1000)

		let outputEpoch
		switch (format) {
			case 'relative':
				outputEpoch = `<t:${epoch}:R>`
				navigator.clipboard.writeText(outputEpoch)
				break
			case 'shortTime':
				outputEpoch = `<t:${epoch}:t>`
				navigator.clipboard.writeText(outputEpoch)
				break
			case 'longTime':
				outputEpoch = `<t:${epoch}:T>`
				navigator.clipboard.writeText(outputEpoch)
				break
			case 'shortDate':
				outputEpoch = `<t:${epoch}:d>`
				navigator.clipboard.writeText(outputEpoch)
				break
			case 'longDate':
				outputEpoch = `<t:${epoch}:D>`
				navigator.clipboard.writeText(outputEpoch)
				break
			case 'longDateShortTime':
				outputEpoch = `<t:${epoch}:f>`
				navigator.clipboard.writeText(outputEpoch)
				break
			case 'full':
				outputEpoch = `<t:${epoch}:F>`
				navigator.clipboard.writeText(outputEpoch)
				break
		}

		setOutput(outputEpoch)
	}

	return (
		<main className='grid justify-center'>
			<Inputs
				date={date}
				setDate={setDate}
				setTime={setTime}
				setFormat={setFormat}
				setOutput={setOutput}
			/>
			<Button
				className='mt-4 bg-blue-950 text-white hover:bg-blue-800'
				onClick={generateTimestamp}
			>
				Generate & Copy
			</Button>
			{output && (
				<>
					<pre className='my-4 bg-black/20 py-1 text-center font-mono'>
						{output}
					</pre>
				</>
			)}
		</main>
	)
}

export default Main
