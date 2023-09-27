import ExpenseItems from "./components/ExpenseItems"


function App() {
  const expenses=[
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
  return (
    <div>
      
      <h2>Let's get started!</h2>
      <div>{expenses.map(i=>(
         <ExpenseItems 
         title={i.title}
         amount={i.amount}
         date={i.date}
         location={i.location}
         />
      ))}</div>
      {/* <ExpenseItems 
      title={expenses[0].title}
      date={expenses[0].date}
      amount={expenses[0].amount}
      /> */}
      
    </div>
  );
}

export default App;
