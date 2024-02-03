import { useState } from 'react';
import './App.css'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [expenses, setExpenses] = useState([
    {id: 1, description: "aaa", amount: 10, category: "utilites"},
    {id: 2, description: "bbb", amount: 20, category: "rent"},
    {id: 3, description: "ccc", amount: 10, category: "utilites"},
    {id: 4, description: "ddd", amount: 30, category: "fuel"},
    {id: 5, description: "eee", amount: 40, category: "entertainment"},
    {id: 6, description: "fff", amount: 35, category: "entertainment"},

  ]);

  const filteredExpenses = selectedCategory === "all" ? expenses : expenses.filter(expense => expense.category === selectedCategory);
  
  const handleSubmit = (data) =>{
    setExpenses([...expenses, {...data, id: expenses.length + 1}]);
  }

  return (
    <>
      <div>
        <div className="mb-5">
          <ExpenseForm onSubmit={handleSubmit}/>
        </div>
        <ExpenseFilter onChange={(category) => setSelectedCategory(category)} />
        <ExpenseList expenses={filteredExpenses} onDelete={(id) => setExpenses(expenses.filter(e =>e.id != id))} />
      </div>
    </>
  )
}

export default App
