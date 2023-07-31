import { Button, Container, Stack } from 'react-bootstrap';
import BudgetCard from './BudgetCard';
import { connect } from 'react-redux';
import AddBudgetModal from './AddBudgetModal';
import { useState } from 'react';
import AddExpenseModal from './AddExpenseModal';
import ViewExpensesModal from './ViewExpensesModal';
function App({budgets,addbudget,expenses}) {
  const [showAddBudgetModel,setShowAddBudgetModel]=useState(false);
  const [showAddExpenseModel,setShowAddExpenseModel]=useState(false);
  const [showViewExpensesModal,setShowViewExpensesModal]=useState(false);
  const [viewId,setViewId]=useState(0);
  const getamount=(id)=>
  {
    const mang= expenses.reduce((e,t)=>{
      if (t.budgetid===id)
      return e+parseInt(t.amount)
      else return e;},0);

    return mang;
  }
  return (
      <>
      <Container>
      <Stack direction='horizontal' gap={2} className='my-4'>
        <h1 className='me-auto'>BUDGET</h1>
        <Button variant='primary' onClick={()=>setShowAddBudgetModel(true)}>ADD BUDGET</Button>
        <Button variant='outline-primary' onClick={()=>setShowAddExpenseModel(true)}>ADD EXPENSE</Button>
      </Stack>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1rem",alignItems:"flex-start"}} >
      {console.log(budgets)}{
      budgets.map((budget)=>{return <BudgetCard key={budget.id} handleOpen={()=>{setViewId(budget.id);setShowViewExpensesModal(true)}} setShowAddExpenseModel={setShowAddExpenseModel} name={budget.name} max={budget.max} amount={getamount(budget.id)}/>})}
      </div>      
    </Container>
    <AddBudgetModal show={showAddBudgetModel} handleClose={()=>setShowAddBudgetModel(false)} />
    <AddExpenseModal show={showAddExpenseModel} handleClose={()=>setShowAddExpenseModel(false)} />
    <ViewExpensesModal show={showViewExpensesModal} id={viewId} handleClose={()=>{setShowViewExpensesModal(false);}}/>
  </>
  );
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {
    budgets:state.BudgetReducer,
    expenses:state.ExpenseReducer
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
