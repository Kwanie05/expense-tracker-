import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "2 packs of sugar", amount:70, category: "groceries" },
    { id: 2, description: "2 packs of biscuit", amount: 90, category: "groceries" },
    { id: 3, description: "Rent", amount: 5500, category: "utilities" },
    { id: 4, description: "Netflix subscription", amount: 50, category: "entertain" },
    { id: 5, description: "iCloud subscription", amount: 15, category:"utilities" },
  ]);

const [newItem, setNewItem] = useState({})

  const addItem = () => {
    setExpenses(() => [ ...expenses, newItem] );
    setNewItem({}); //reset the new item
  }
  const deleteItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !==id)) 
  }

  const filteritem = (cat) => {
    if (cat) {
    setExpenses(expenses.filter(expense => expense.category === cat))
  } else { 
    setExpenses(expenses)
  }
  }

  return (
    <div className="App">
    <ExpenseForm  addExpense = {addItem} setNewItem={setNewItem} />
    <ExpenseFilter filterItem = {filteritem} />
    <ExpenseList items={expenses} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
