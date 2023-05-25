import React from 'react';
import './ExpenseDetails.css';

export default function ExpenseDetails({ expense }) {
  return (
    <>
      <h1 className="expenseTitle">Expense Details</h1>
      <div className="details-container">
        <div className="details-header">
          <div className="header-item">Money Spent</div>
          <div className="header-item">Expense Description</div>
          <div className="header-item">Category</div>
        </div>

        {expense.map((data) => {
          return (
            <div className="details-item">
              <div className="item">{data.moneySpent}</div>
              <div className="item">{data.expenseDescription}</div>
              <div className="item">{data.category}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
