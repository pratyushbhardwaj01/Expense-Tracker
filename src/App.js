import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import react, { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([]);
  function addExpenseHandler(expense) {
    setExpenses((prevState) => [...expenses, expense]);
  }
  return (
    <>
      <NewExpense handlerFunction={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>;
    </>
  );
}

export default App;
