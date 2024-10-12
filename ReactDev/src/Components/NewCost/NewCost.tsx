// NewCost.tsx
import './NewCost.scss'
import CostForm from './CostForm'
import { useState } from 'react'

interface CostData {
	description: string
	amount: number
	date: Date
}

interface NewCostProps {
	onAddCost: (cost: Omit<CostData, 'id'>) => void
}

function NewCost({ onAddCost }: NewCostProps) {
	const [isFormVisible, setIsFormVisible] = useState(false)

	const saveCostDataHandler = (enteredCostData: CostData) => {
		onAddCost(enteredCostData)
		setIsFormVisible(false)
	}

	const inputCostDataHandler = () => setIsFormVisible(true)

	const cancelCostHandler = () => setIsFormVisible(false)

	return (
		<div className='new-cost'>
			{!isFormVisible && (
				<button onClick={inputCostDataHandler}>Add Cost</button>
			)}
			{isFormVisible && (
				<CostForm
					onSaveCostData={saveCostDataHandler}
					onCancel={cancelCostHandler}
				/>
			)}
		</div>
	)
}

export default NewCost
