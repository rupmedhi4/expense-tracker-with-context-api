import React, { useContext, useEffect, useState } from 'react';
import './AddExpenses.css';
import { useNavigate } from 'react-router-dom';
import ExpenseDetails from './Expense details/ExpenseDetails';
import { appContext } from '../../AppContext';
import { db } from '../../firebase';
import { setDoc, doc, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function AddExpenses() {
  const [moneySpent, setMoneySpent] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [category, setCategory] = useState('');
  let { users } = useContext(appContext);

  const [expense, setExpense] = useState([])


  useEffect(() => {
    if (users) {
      const docRef = doc(db, "expense", users.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setExpense(docSnap.data().expense);
          console.log(expense);
        } else {
          console.log("no doc");
        }
      });
      return () => unsubscribe(); // Cleanup the listener when the component unmounts

    } else {
      console.log("error");
    }
  }, [])


  const addExpenseHandler = async (e) => {
    e.preventDefault();
    const data = {
      moneySpent,
      expenseDescription,
      category
    }
    try {
      await setDoc(doc(db, "expense", users.uid), {
        expense: [...expense, data]
      });
     
      toast.success('Expense added successfully');
    } catch (err) {
      toast.error(err.message);
      console.log(err)
    }
  };

  return (
    <>
      <div className="form-container">
        <h2>Expense Form</h2>
        <form onSubmit={addExpenseHandler}>
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
      <ExpenseDetails expense={expense}/>
    </>
  );
}
