import './CostItemsList.scss'
import Card from '../UI/Card'
import CostFilter from './CostFilter'
import { useState } from 'react'
import CostLists from './CostLists'
import CostDiagram from './CostDiagram'

// Интерфейс для отдельного элемента затрат
interface Cost {
	id: string
	date: Date
	description?: string
	amount: number
}

interface CostItemListProps {
	costs: Cost[]
}

const CostItemList: React.FC<CostItemListProps> = ({ costs }) => {
	const [year, setYear] = useState<string>('2020') // Инициализируем состояние для года

	// Функция-обработчик изменения года
	const yearChangeHandler = (selectedYear: string): void => {
		setYear(selectedYear)
		console.log('selectedYear', selectedYear)
	}

	// Фильтруем затраты на основе выбранного года
	const filteredCosts = costs.filter(cost => {
		return cost.date.getFullYear().toString() === year
	})

	return (
		<li>
			<Card className='costs'>
				<CostFilter onChangeYear={yearChangeHandler} year={year} />
				<CostDiagram costs={filteredCosts} />
				<CostLists costs={filteredCosts} />
				{filteredCosts.length === 0 && <p>No costs found for {year}.</p>}{' '}
				{/* Сообщение если нет затрат */}
			</Card>
		</li>
	)
}

export default CostItemList
