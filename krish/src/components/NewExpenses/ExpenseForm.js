import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })
    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value);
    };
    const amountChangeHandler =(e)=>{
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler =(e)=>{
        setEnteredDate(e.target.value);
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')      
    };
    
  return (
    <div>
        <form onSubmit={submitHandler}>
         <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input onChange={titleChangeHandler} type='text' value={enteredTitle} ></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'  onChange={amountChangeHandler} value={enteredAmount}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31'  onChange={dateChangeHandler} value={enteredDate}></input>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>submit</button>
            </div>
          </div>
       </form>
         <div className='new-expense__actions'>
            <button  type='button' onClick={props.onCancel}>Cancel</button>
           
        </div>
       
        
    </div>
           
  )
}
export default ExpenseForm