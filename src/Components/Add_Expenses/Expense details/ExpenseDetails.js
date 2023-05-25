import React, { useContext } from 'react';
import './ExpenseDetails.css';
import { appContext } from '../../../AppContext';

export default function ExpenseDetails() {
 

  return (
    <>
      <h1 className="expenseTitle">Expense Details</h1>
      <div className="details-container">
        <div className="details-header">
          <div className="header-item">Money Spent</div>
          <div className="header-item">Expense Description</div>
          <div className="header-item">Category</div>
        </div>
        
          <div  className="details-item">
            <div className="item">moneySpent</div>
            <div className="item">expenseDescription</div>
            <div className="item">category</div>
          </div>
       
      </div>
    </>
  );
}
