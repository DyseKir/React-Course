// App.tsx
import CostItemsList from './Components/Costs/CostItemsList'
import NewCost from './Components/NewCost/NewCost'
import './App.scss'
import { useState } from 'react'

interface Cost {
	id: string
	date: Date
	description: string
	amount: number
}

const INITIAL_COSTS: Cost[] = [
	{
		id: 'c1',
		date: new Date(2024, 1, 10),
		description: 'Холодильник',
		amount: 44,
	},
	{
		id: 'c2',
		date: new Date(2024, 2, 10),
		description: 'Стиральна машина',
		amount: 144,
	},
	{
		id: 'c3',
		date: new Date(2024, 3, 10),
		description: 'Телевізор',
		amount: 244,
	},
]

function App() {
	const [costs, setCosts] = useState<Cost[]>(INITIAL_COSTS)

	const addCostHandler = (newCost: Omit<Cost, 'id'>) => {
		const costWithId = { ...newCost, id: Math.random().toString() }
		setCosts(prevCosts => [costWithId, ...prevCosts])
	}

	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<CostItemsList costs={costs} />
		</div>
	)
}

export default App
