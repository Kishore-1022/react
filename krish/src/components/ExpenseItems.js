import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';


const ExpenseItems=(props)=>{
  const [filteredYear,setFilteredYear]=useState('2020')

  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear)
  }
  const[amt,setamt]=useState(props.amount);
  function reset(){
    setamt(100)
    console.log(amt)
  }

  return (
    <Cards className='expense-item' key={props.id}>
         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseDate date={props.date} />     
         <div className='expense-item__description'>
           <h2> {props.title}</h2>
           <h2>{props.location}</h2>
           <div className='expense-item__price'>Rs.{amt}</div>
         </div>
         <button onClick={reset}>Reset Amount</button>
    </Cards>

  );
}

export default ExpenseItems