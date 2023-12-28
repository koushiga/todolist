import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addToObj, checkList, deleteList, } from './ListSlice';

function AddList(){

  const{listTask, check}=useSelector((state)=>state.lists)


  const dispatch=useDispatch()


console.log(check)


const handleEdit=(event)=>{
  dispatch(addToObj(event))
  // console.log(event)
}

  const handledelete=(value)=>{
  dispatch(deleteList(value))
  }

  const handleCheck=(id)=>{
   
      dispatch(checkList(id))
  
  }

    return(
        <div>
             <Table striped bordered hover variant="dark" style={{width:'40%',margin:'10px auto'}}>
      <thead className="thead-dark">
        <tr>
          <th>CheckList</th>
          <th>YourList</th>
          <th>action</th>

        </tr>
      </thead>
      <tbody>
        {
        listTask&&  listTask.map((event,index)=>(
            
              <tr key={index} style={{height:'10vh'}}>
            <td><Form.Check  type='checkbox' onClick={()=>handleCheck(event.id)}/>
            </td>
            <td className={ event.check ? "check" : ""}>{event.list}</td>
            <td><Button className='mx-2' variant="info" onClick={()=>handleEdit(event)}><i class="bi bi-pencil-square"></i></Button>
            <Button  variant="danger" onClick={()=>handledelete(event.id)}><i class="bi bi-trash"></i></Button>
            </td>
        </tr>
            
          ))
        }
        
      </tbody>
    </Table>
        </div>
    )
}

export default AddList;