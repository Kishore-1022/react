import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItems(props){
  return (
    <div className='expense-item'>
      <div>
        <ExpenseDate date={props.date} />
        
      </div>

         <div className='expense-item__description'>
           <h2> {props.title}</h2>
           <h2>{props.location}</h2>
         </div>
         <div className='expense-item__price'>Rs.{props.amount}</div>
         
    </div>
  );
}

export default ExpenseItems