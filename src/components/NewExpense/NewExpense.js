
import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const[isEditing,setIsEditing]=useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditing=()=>{
      setIsEditing(true);
  }

  const stoptEditing=()=>{
    setIsEditing(false);
}

  return (
    <div className='new-expense'>
    {!isEditing && <button onClick={startEditing}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stoptEditing}/>}
    </div>
  );
};

export default NewExpense;