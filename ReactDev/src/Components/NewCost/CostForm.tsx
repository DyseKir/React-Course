// CostForm.tsx
import './CostForm.scss'
import { useState } from 'react'

interface CostFormProps {
	onSaveCostData: (costData: {
		description: string
		amount: number
		date: Date
	}) => void
	onCancel: () => void
}

interface UserInputState {
	enteredDescription: string
	enteredAmount: string
	enteredDate: string
}

function CostForm({ onSaveCostData, onCancel }: CostFormProps) {
	const [userInput, setUserInput] = useState<UserInputState>({
		enteredDescription: '',
		enteredAmount: '',
		enteredDate: '',
	})

	const descriptionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(prevState => ({
			...prevState,
			enteredDescription: e.target.value,
		}))
	}

	const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(prevState => ({ ...prevState, enteredAmount: e.target.value }))
	}

	const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(prevState => ({ ...prevState, enteredDate: e.target.value }))
	}

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		const costData = {
			description: userInput.enteredDescription,
			amount: +userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		}
		onSaveCostData(costData)
		setUserInput({ enteredDescription: '', enteredAmount: '', enteredDate: '' })
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Description</label>
					<input
						type='text'
						value={userInput.enteredDescription}
						onChange={descriptionChangeHandler}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Amount</label>
					<input
						type='number'
						value={userInput.enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Date</label>
					<input
						type='date'
						value={userInput.enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-cost__actions'>
				<button type='submit'>Add Cost</button>
				<button type='button' onClick={onCancel}>
					Cancel
				</button>
			</div>
		</form>
	)
}

export default CostForm
