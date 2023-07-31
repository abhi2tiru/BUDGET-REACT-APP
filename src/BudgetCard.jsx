import React from 'react'
import { Button, Card, Container, ProgressBar,Stack } from 'react-bootstrap'
import { format } from './utils'
const BudgetCard = ({key,name,amount,max,setShowAddExpenseModel,handleOpen}) => {

    const c=[];
    if (amount>max)
    {
        c.push("bg-danger");
        c.push("bg-opacity-10");

    }
    else 
    {
        c.push("bg-light");
    }
    return (
    <Card className={c.join(" ")}>
        <Card.Body >
            <Card.Title className='d-flex justify-content-between align-items-baseline'>
                
                <div>{name}</div>
                <div>{format.format(amount)}/ <span className='fs-6'>{format.format(max)}</span></div>
            </Card.Title>
            <ProgressBar className='rounded-pill' variant={getColor(amount,max)} min={0} max={max} now={amount}>
            </ProgressBar>
            <Stack  direction='horizontal' gap={2} className='mt-4'>
                <Button variant='outline-primary' className='ms-auto' onClick={()=>{setShowAddExpenseModel(true)}}>ADD EXPENSE</Button>
                <Button variant='outline-secondary' onClick={()=>{handleOpen(key)}} >VIEW EXPENSES</Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}

export default BudgetCard
function getColor(amount,max)
{
    const ratio=amount/max;
    if (ratio<=0.5)
    return "primary"
    else if (ratio<=0.75)
    return "warning"
    else 
    return "danger"

}