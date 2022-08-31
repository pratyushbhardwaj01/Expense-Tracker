import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import react, { useState } from "react";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h1>{props.title}</h1>
      </div>

      <div className="expense-item__price">&#x20B9;{props.amount}</div>
    </Card>
  );
}
export default ExpenseItem;
