import categories from "../categories"

interface Props{
    onChange: (category: string) => void
}

function ExpenseFilter({onChange}: Props) {
  return (
    <select id="select" className="form-select" onChange={(event => onChange(event.target.value))}>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>  )
}

export default ExpenseFilter