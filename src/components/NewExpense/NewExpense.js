import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showAddNewExpense, setShowAddNewExpense] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleForm = () => {
    setShowAddNewExpense((prevShowAddNewExpense) => !prevShowAddNewExpense);
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className='new-expense'>
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={toggleForm}
        />
      )}
      {showAddNewExpense && (
        <button type='submit' onClick={toggleForm}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
