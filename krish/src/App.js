import ExpenseItems from "./components/ExpenseItems"
import NewExpenses from "./components/NewExpenses/NewExpenses";
import ExpensesFilter from './components/ExpensesFilter';
import { useState } from "react";

const dummyExpenses=[
  {
  id:1,
  title:'car insurance',
  date:new Date(2020, 7, 12),
  amount:1000,
  location:"Chennai"
 },
 {
  id:2,
  title:'house exp',
  date:new Date(2022, 2, 29),
  amount:2000,
  location:"Delhi"
 },
 {
  id:3,
  title:'phone exp',
  date:new Date(2021, 4, 19),
  amount:1500,
  location:"mumbai"
 }
]
const App=()=>{
  const [filteredYear,setFilteredYear]=useState('2020')

  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear)
  }
  const [expenses,setExpenses]=useState(dummyExpenses);
   
  const addExpenseHandler=preExpense=>{
    setExpenses([preExpense, ...expenses])
  }

  const filteredExpenses=expenses.filter(exp=>{
    return exp.date.getFullYear().toString()===filteredYear
  })
  return (
    <div>
      
      <NewExpenses  onAddExpense={addExpenseHandler}/>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

      
        {  filteredExpenses.length===1? 
        <div>
          {filteredExpenses.map(i=>(
         <ExpenseItems 
         id={i.id}
         title={i.title}
         amount={i.amount}
         date={i.date}
         location={i.location}
         />
         ))}
        <p style={{'text-align': 'center', 'font-weight':'bolder' ,
        'color':'black'}}>Only single Expense here.</p>
           
        </div> 
        : filteredExpenses.length===0 ? 
        <p style={{'text-align': 'center', 'font-weight':'bolder'}}>No expenses found.</p> : filteredExpenses.map(i=>(
         <ExpenseItems 
         id={i.id}
         title={i.title}
         amount={i.amount}
         date={i.date}
         location={i.location}
         />
      ))}
    </div>
  );
}
export default App;
