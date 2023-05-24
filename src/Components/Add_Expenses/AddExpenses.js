import React, { useContext, useState } from 'react';
import './AddExpenses.css';
import { useNavigate } from 'react-router-dom';
import ExpenseDetails from './Expense details/ExpenseDetails';
import { appContext } from '../../AppContext';

export default function AddExpenses() {
  const [moneySpent, setMoneySpent] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [category, setCategory] = useState('');

  const { ExpenseData, setExpenseData } = useContext(appContext); // Issue: Incorrect use of useState
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseData([...ExpenseData, { moneySpent, expenseDescription, category }]);
    console.log(ExpenseData);
  };
   

  return (
    <>
      <div className="form-container">
        <h2>Expense Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="money-spent">Money Spent</label>
            <input
              type="text"
              id="money-spent"
              value={moneySpent}
              onChange={(e) => setMoneySpent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expense-description">Expense Description</label>
            <input
              type="text"
              id="expense-description"
              value={expenseDescription}
              onChange={(e) => setExpenseDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="Food">Food</option>
              <option value="Petrol">Petrol</option>
              <option value="Salary">Salary</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {ExpenseData.length > 0 && <ExpenseDetails />}
    
     
    </>
  );
}
