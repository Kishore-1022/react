import ExpenseItems from "./components/ExpenseItems"


function App() {
  const expenses=[
    {
    id:1,
    title:'car insurance',
    date:new Date(2020, 7, 12),
    amount:1000,
   },
   {
    id:2,
    title:'house exp',
    date:new Date(2021, 2, 29),
    amount:2000,
   },
   {
    id:3,
    title:'phone exp',
    date:new Date(2022, 4, 19),
    amount:1500,
   }
  ]
  return (
    <div>
      
      <h2>Let's get started!</h2>
      <div>{expenses.map(i=>(
         <ExpenseItems 
         title={i.title}
         amount={i.amount}
         date={i.date}
         />
      ))}</div>
      {/* // <ExpenseItems  */}
      
      {/* //   title={i.title}
      //   amount={i.amount}
      //   date={i.date}))}/> */}

      {/* <ExpenseItems
       title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
        </ExpenseItems>
      <ExpenseItems 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}>
      </ExpenseItems>
      <ExpenseItems 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}>
      </ExpenseItems>
      <ExpenseItems /> */}
     
      
      
    </div>
  );
}

export default App;
