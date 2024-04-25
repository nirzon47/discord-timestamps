import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export function DatePicker({
	date,
	setDate,
	id,
	setOutput,
}: {
	date: Date | undefined
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
	id: string
	setOutput: React.Dispatch<React.SetStateAction<string | undefined>>
}) {
	const handleDateChange = (date: Date | undefined) => {
		setDate(date)
		setOutput('')
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					id={id}
					variant={'outline'}
					className={cn(
						'w-[240px] justify-start text-left font-normal rounded-lg',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className='mr-2 size-4' />
					{date ? format(date, 'PPP') : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					mode='single'
					selected={date}
					onSelect={handleDateChange}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
