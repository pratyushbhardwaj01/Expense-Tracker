import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import react, { useState } from "react";
function Expenses(props) {
  const [yearFilter, changeYearFilter] = useState("");
  function onChangeHandler(event) {
    changeYearFilter(event.target.value);
  }

  console.log(yearFilter);

  const filteredExpenes = props.expenses.filter(
    (item) => !yearFilter || item.date.getFullYear() == yearFilter
  );

  return (
    <Card className="expenses">
      <div className="filters">
        <label htmlFor="years">Choose a year</label>
        <select name="years" onChange={onChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="">all</option>
        </select>
      </div>
      {filteredExpenes.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
