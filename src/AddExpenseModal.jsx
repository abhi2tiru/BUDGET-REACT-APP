import React, { useRef } from 'react'
import { Modal,Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
const AddExpenseModal = ({show,handleClose,budgets,addexpense,budgetId}) => {
  const nameRef=useRef(null);
  const ammountRef=useRef(null);
  const budgetIdRef=useRef(null);
  function add(e)
  {
    e.preventDefault();
      const man={
        name:nameRef.current.value,
        amount:ammountRef.current.value,
        budgetid:budgetIdRef.current.value,
      }
      addexpense(man);
      handleClose();
  }  
  return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header  closeButton>ADD EXPENSE</Modal.Header>
    <Modal.Body>
        <Form onSubmit={add}>
        <Form.Group className='mb-3'>
                <Form.Label>EXPENSE NAME</Form.Label>
                <Form.Control type='text' ref={nameRef}  required></Form.Control>
        </Form.Group>
        
        <Form.Group className='mb-3'>
                <Form.Label>EXPENSE AMOUNT</Form.Label>
                <Form.Control type='number' ref={ammountRef} min={0} step={1} required></Form.Control>
        </Form.Group>
        
        <Form.Group className='mb-3'>
                <Form.Label>BUDGET</Form.Label>
                <Form.Select defaultValue={budgetId} ref={budgetIdRef} required>
                    {budgets.map((budget)=>{return <option key={budget.id} value={budget.id}>{budget.name}</option>})}
                </Form.Select>
        </Form.Group>
        <Button  type="submit" variant='primary'>ADD</Button>
        </Form>
    </Modal.Body>
  </Modal>
    )
}
const mapStateToProps=(state)=>{return{budgets:state.BudgetReducer}}
  const mapDispatchToProps=(dispatch)=>{
    return {
      addexpense:(expense)=>{
        dispatch({type:"addexpense",payload:expense})}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(AddExpenseModal);
  
