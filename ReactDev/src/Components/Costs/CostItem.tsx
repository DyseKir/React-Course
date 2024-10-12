import Card from '../UI/Card'
import CostDate from './CostDate'
import './CostItem.scss'

interface CostItemProps {
	date: Date
	description?: string
	amount: number
}

function CostItem({ date, description, amount }: CostItemProps) {
	return (
		<Card className='cost-item'>
			<CostDate date={date} />
			<div className='cost-item__description'>
				<div className='cost-item__price'>${amount}</div>
				<h2>{description}</h2> {/* Відображення оновленого опису */}
			</div>
		</Card>
	)
}

export default CostItem
