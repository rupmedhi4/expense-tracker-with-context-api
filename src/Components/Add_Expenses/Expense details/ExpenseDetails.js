import React, { useContext } from 'react';
import './ExpenseDetails.css';
import { appContext } from '../../../AppContext';

export default function ExpenseDetails() {
  const { ExpenseData } = useContext(appContext);

  return (
    <>
      <h1 className="expenseTitle">Expense Details</h1>
      <div className="details-container">
        <div className="details-header">
          <div className="header-item">Money Spent</div>
          <div className="header-item">Expense Description</div>
          <div className="header-item">Category</div>
        </div>
        {ExpenseData.map((expense, index) => (
          <div key={index} className="details-item">
            <div className="item">{expense.moneySpent}</div>
            <div className="item">{expense.expenseDescription}</div>
            <div className="item">{expense.category}</div>
          </div>
        ))}
      </div>
    </>
  );
}
