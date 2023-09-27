import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';

const ExpenseItems=(props)=>{
  return (
    <Cards className='expense-item'>
        <ExpenseDate date={props.date} />     
         <div className='expense-item__description'>
           <h2> {props.title}</h2>
           <h2>{props.location}</h2>
         </div>
         <div className='expense-item__price'>Rs.{props.amount}</div>
         
    </Cards>
  );
}

export default ExpenseItems