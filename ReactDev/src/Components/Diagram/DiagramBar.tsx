import './DiagramBar.scss'

interface DiagramBarProps {
	value: number
	maxValue: number
	label: string
}

const DiagramBar: React.FC<DiagramBarProps> = props => {
	let barFillHeight = '0%'

	if (props.maxValue > 0) {
		// Рассчитываем высоту столбика как процент от максимального значения
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
	}

	return (
		<div className='diagram-bar'>
			<div className='diagram-bar__inner'>
				<div
					className='diagram-bar__fill'
					style={{ height: barFillHeight, backgroundColor: '#bd8025' }}
				></div>
			</div>
			<div className='diagram-bar__label'>{props.label}</div>
		</div>
	)
}

export default DiagramBar
