import './CostLists.scss'
import CostItem from './CostItem'
import { FC } from 'react'

// Interface for the individual cost item
interface CostItemsProps {
	date: Date
	description?: string
	amount: number
}

// Interface for the component props
interface CostListsProps {
	costs: CostItemsProps[]
}

const CostLists: FC<CostListsProps> = ({ costs }) => {
	// Check if there are no costs and return a fallback message
	if (costs.length === 0) {
		return <h2 className='cost-list__fallback'>No costs found.</h2>
	}

	// Map over the costs and render each CostItem component
	return (
		<ul className='cost-list'>
			{costs.map(cost => (
				<CostItem
					key={cost.date.getTime()}
					date={cost.date}
					description={cost.description}
					amount={cost.amount}
				/>
			))}
		</ul>
	)
}

export default CostLists
