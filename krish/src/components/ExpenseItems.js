import './ExpenseItems.css';

function ExpenseItems(props){
  return (
    <div className='expense-item'>
         <div>{props.date.toLocaleString()}</div>
         <div className='expense-item__description'>
           <h2> {props.title}</h2>
         </div>
         <div className='expense-item__price'>Rs.{props.amount}</div>
         
    </div>
  );
}

export default ExpenseItems