import ExpenseItems from "./components/ExpenseItems"
import NewExpenses from "./components/NewExpenses/NewExpenses";
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
  date:new Date(2021, 2, 29),
  amount:2000,
  location:"Delhi"
 },
 {
  id:3,
  title:'phone exp',
  date:new Date(2022, 4, 19),
  amount:1500,
  location:"mumbai"
 }
]
const App=()=>{
  const [expenses,setExpenses]=useState(dummyExpenses);
   
  const addExpenseHandler=expense=>{
    setExpenses([expense, ...expenses])
 
  }
  return (
    <div>
      
      <NewExpenses  onAddExpense={addExpenseHandler}/>

      <div>{expenses.map(i=>(
         <ExpenseItems 
         id={i.id}
         title={i.title}
         amount={i.amount}
         date={i.date}
         location={i.location}
         />
      ))}</div> 
    </div>
  );
}
export default App;
