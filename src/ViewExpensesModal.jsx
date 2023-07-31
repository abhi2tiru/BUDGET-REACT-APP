import { useRef, useState } from 'react'
import { Form, Modal, Button, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux';

const ViewExpensesModal = ({id,show,handleClose,budgets,expenses,deleteExId}) => {
  
    return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>EXPENSES </Modal.Header>
    <Modal.Body>
        <ListGroup>
            {expenses.map((e)=>{if (e.budgetid===id) return<ListGroupItem key={e.id}><h2>{e.name+"   "+e.amount}</h2>
            <div className='d-flex justify-content-end'>
            <Button onClick={()=>{deleteExId(e.id)}}>DELETE</Button>
            </div>
            </ListGroupItem>})}
        </ListGroup>
            
    </Modal.Body>
  </Modal>
  )
}

const mapStateToProps=(state)=>{return{
    budgets:state.BudgetReducer,
    expenses:state.ExpenseReducer
}}
  const mapDispatchToProps=(dispatch)=>{
    return {
      addbudget:(budget)=>{
        console.log(budget);
        dispatch({type:"addbudget",payload:budget})},
      deleteExId:(eid)=>{dispatch({
        type:"deleteExId",
        payload:eid
      })
     }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ViewExpensesModal);
