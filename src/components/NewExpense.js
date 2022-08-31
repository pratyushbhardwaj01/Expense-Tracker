import react from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function newExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.handlerFunction(expenseData);
  }
  return (
    <div className="new-expense">
      <NewExpenseForm newExpenseData={newExpenseDataHandler}></NewExpenseForm>
    </div>
  );
}
export default NewExpense;
