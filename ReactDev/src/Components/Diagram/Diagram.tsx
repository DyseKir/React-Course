import './Diagram.scss'
import DiagramBar from './DiagramBar'

interface DataSet {
	label: string
	value: number
}

interface DiagramProps {
	dataSets: DataSet[]
}

const Diagram: React.FC<DiagramProps> = props => {
	const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

	const maxMonthCosts = Math.max(...dataSetsValues) // Вычисляем максимальное значение для диаграммы

	return (
		<div className='diagram'>
			{props.dataSets.map(dataSet => (
				<DiagramBar
					key={dataSet.label} // Уникальный ключ для каждого элемента
					value={dataSet.value}
					maxValue={maxMonthCosts}
					label={dataSet.label}
				/>
			))}
		</div>
	)
}

export default Diagram
