// CostFilter.tsx
import './CostFilter.scss'

interface CostFilterProps {
	onChangeYear: (year: string) => void
	year: string
}

function CostFilter(props: CostFilterProps) {
	const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		props.onChangeYear(e.target.value)
	}

	return (
		<div className='costs-filter'>
			<div className='costs-filter__control'>
				<label>Filter by year</label>
				<select onChange={yearChangeHandler} value={props.year}>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option> {/* Добавлено значение 2020 */}
				</select>
			</div>
		</div>
	)
}

export default CostFilter
