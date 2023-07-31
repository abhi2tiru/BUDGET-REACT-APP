import React, { useRef, useState } from 'react'
import { Form, Modal, ModalBody,Button } from 'react-bootstrap'
import { connect } from 'react-redux';
const AddBudgetModal = ({addbudget,show,handleClose}) => {
    const [budget,setBudget]=useState(0);
    const [man,setMan]=useState(0);
    const nameRef=useRef(null)
    const maxRef=useRef(null)
    function add(e)
    {
        e.preventDefault();
        const b=0;
        console.log(budget);
        addbudget(budget);
        handleClose();
    }
  return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>ADD BUDGET</Modal.Header>
    <Modal.Body>
        <Form onSubmit={add}>
            <Form.Group className='mb-3'>
                <Form.Label>BUDGET NAME</Form.Label>
                <Form.Control type='text' ref={nameRef} name="name" onChange={(e)=>{setBudget({...budget,name:e.target.value})}} required></Form.Control>
            </Form.Group>
            
            <Form.Group className='mb-3'>
                <Form.Label>MAX SPENDING ALLOWED</Form.Label>
                <Form.Control type='number' min={0} ref={maxRef} name="max" step={1} required onChange={(e)=>{setBudget({...budget,max:e.target.value})}}>

                </Form.Control>
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <Button  variant='primary' type='submit'>ADD</Button>
            </div>
        </Form>
    </Modal.Body>
  </Modal>
    )
}
const mapStateToProps=(state)=>{return{}}
  const mapDispatchToProps=(dispatch)=>{
    return {
      addbudget:(budget)=>{
        console.log(budget);
        dispatch({type:"addbudget",payload:budget})}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(AddBudgetModal);
  
