import react, { useState } from "react";

import "./NewExpenseForm.css";
function NewExpenseForm(props) {
  const [inputTitle, setTitle] = useState("");
  const [inputAmount, setAmount] = useState("");
  const [inputDate, setDate] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputTitle && inputAmount && inputDate) {
      const expenseData = {
        title: inputTitle,
        amount: inputAmount,
        date: new Date(inputDate),
      };
      props.newExpenseData(expenseData);
    }

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={inputTitle} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateHandler} value={inputDate} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountHandler}
            value={inputAmount}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default NewExpenseForm;
