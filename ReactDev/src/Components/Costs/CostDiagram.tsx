import Diagram from '../Diagram/Diagram'

interface Cost {
	id: string
	date: Date
	description?: string
	amount: number
}

interface CostDiagramProps {
	costs: Cost[]
}

const CostDiagram: React.FC<CostDiagramProps> = ({ costs }) => {
	const diagramDataSets = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	]

	// Распределение стоимости по месяцам
	for (const cost of costs) {
		const costMonth = cost.date.getMonth() // January is 0, December is 11
		diagramDataSets[costMonth].value += cost.amount
	}

	return <Diagram dataSets={diagramDataSets} />
}

export default CostDiagram
