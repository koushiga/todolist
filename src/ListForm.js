import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, editList} from './ListSlice';

function ListForm(){

const dispatch=useDispatch()
const {selectlist}=useSelector((state)=>state.lists)
    
    const[list,setlist]=useState("")
    const[id,setids]=useState()


function handleAdd(event){
   event.preventDefault()
   dispatch(addList({list}))
    console.log(list);
    setlist(" ")
}

const handleUpdate=()=>{
 dispatch(editList({list,id}))
 setlist("")
}
useEffect(()=>{
setlist(selectlist.list)
setids(selectlist.id)
},[selectlist])
    return(
        <div className='formlist'>
            <h1 style={{color:'#C70039'}}>ToDoList</h1>
            <Form>
            <Form.Group as={Row} className="pt-5 justify-content-center" controlId="formPlaintextPassword">
                <Form.Label column sm="1" style={{fontSize:'20px'}}>
                AddTask
                </Form.Label>
                <Col sm="4">
                <Form.Control type="text" placeholder="Enter Your List" value={list}  onChange={(e)=>setlist(e.target.value)}/>
                </Col>
                <Button className='col-sm-1 mx-2' size='xs' variant="success" onClick={handleAdd}>Add<i class="bi bi-plus"></i></Button>
                <Button className='col-sm-1' size='xs' variant="info" onClick={()=>handleUpdate()}>Update<i class="bi bi-layer-forward"></i></Button>
            </Form.Group>
            </Form>
        </div>
    )
}

export default ListForm;