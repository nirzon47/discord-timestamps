import { DatePicker } from '../ui/date-picker'
import { Input } from '../ui/input'

interface Props {
	date: Date | undefined
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
	setTime: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Inputs = (props: Props) => {
	return (
		<section className='mt-16'>
			<h2 className='text-xl font-light mb-4 text-center md:text-left'>
				Enter Date and Time
			</h2>
			<div className='flex flex-col gap-2'>
				<DatePicker date={props.date} setDate={props.setDate} />
				<Input
					type='time'
					className='w-[240px] justify-start text-left font-normal rounded-lg hover:bg-accent bg-popover'
					onChange={(e) => props.setTime(e.target.value)}
				/>
			</div>
		</section>
	)
}

export default Inputs
