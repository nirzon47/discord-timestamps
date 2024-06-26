import { Label } from '@radix-ui/react-label'
import { DatePicker } from '../ui/date-picker'
import { Input } from '../ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface Props {
	date: Date | undefined
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
	setTime: React.Dispatch<React.SetStateAction<string | undefined>>
	setFormat: React.Dispatch<React.SetStateAction<string | undefined>>
	setOutput: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Inputs = (props: Props) => {
	const handleTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.setTime(e.target.value)
		props.setOutput('')
	}

	const handleFormatSelect = (e: string) => {
		props.setFormat(e)
		props.setOutput('')
	}

	return (
		<section className='mt-16'>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-px'>
					<Label htmlFor='date' className='text-center text-sm opacity-65'>
						Enter Date
					</Label>
					<DatePicker
						id='date'
						date={props.date}
						setDate={props.setDate}
						setOutput={props.setOutput}
					/>
				</div>
				<div className='flex flex-col gap-px'>
					<Label htmlFor='time' className='text-center text-sm opacity-65'>
						Enter Time
					</Label>
					<Input
						id='time'
						type='time'
						className='w-[240px] justify-start rounded-lg bg-popover text-left font-normal hover:bg-accent'
						onChange={handleTimeInput}
					/>
				</div>
				<div>
					<Label
						id='optionsLabel'
						htmlFor='options'
						className='inline-block w-full text-center text-sm opacity-65'
					>
						Select Format
					</Label>
					<Select onValueChange={handleFormatSelect}>
						<SelectTrigger
							id='options'
							aria-labelledby='optionsLabel'
							className='w-[240px] rounded-lg bg-popover text-left font-normal duration-200 hover:bg-accent'
						>
							<SelectValue placeholder='Select Format' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='relative'>Relative</SelectItem>
							<SelectItem value='shortTime'>Short Time</SelectItem>
							<SelectItem value='longTime'>Long Time</SelectItem>
							<SelectItem value='shortDate'>Short Date</SelectItem>
							<SelectItem value='longDate'>Long Date</SelectItem>
							<SelectItem value='longDateShortTime'>
								Long Date with Short Time
							</SelectItem>
							<SelectItem value='full'>Full Format</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</section>
	)
}

export default Inputs
