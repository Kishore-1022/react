import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';
import { useState } from 'react';


const ExpenseItems=(props)=>{
  const[amt,setamt]=useState(props.amount);
  function del(){
    setamt(100)
    console.log(amt)
  }

  return (
    <Cards className='expense-item' key={props.id}>
        <ExpenseDate date={props.date} />     
         <div className='expense-item__description'>
           <h2> {props.title}</h2>
           <h2>{props.location}</h2>
           <div className='expense-item__price'>Rs.{amt}</div>
         </div>
         <button onClick={del}>Reset Amount</button>
    </Cards>

  );
}

export default ExpenseItems