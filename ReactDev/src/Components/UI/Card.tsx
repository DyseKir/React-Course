import './Card.scss'

function Card(props: { className: string; children: React.ReactNode }) {
	const classes = `card ${props.className}` // Оновлене злиття класів
	return <div className={classes}>{props.children}</div>
}

export default Card
