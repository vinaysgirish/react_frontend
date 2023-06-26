import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeViewService from '../Services/EmployeeViewService';
export const AddEmployee = () => {
const[firstName,setFirstName]=useState('');
const[lastName,setLastName]=useState('');
const[emailId,setEmailId]=useState('');
const navigate=useNavigate();
const saveEmployee=(e)=>{
    e.preventDefault();
    const emp={firstName,lastName,emailId};
    console.log(emp);
    EmployeeViewService.createEmployee(emp).then((response)=>{
        console.log(response.data);
        navigate("/ViewEmployee");
    }).catch(error=>{
        console.log(error);
    })
}
    return (
        <div className='Container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'> 
                <div className='card-body'>
                    <h1>ADD EMPLOYEE</h1>
                <form>
                    <div className='form-group'>
                        <label>FirstName</label>
                        <input type="text" className='form-control'
                        placeholder='Enter your First Name'
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value7)}/>
                    </div>
                    <div className='form-group'>
                        <label>LastName</label>
                        <input type="text" className='form-control'
                        placeholder='Enter your Last Name'
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value7)}/>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text" className='form-control'
                        placeholder='Enter your Email Id'
                        value={emailId}
                        onChange={(e)=>setEmailId(e.target.value)}/>
                    </div>

                    <div className='form-group'>
                    <input type="submit" value="Register" class="btn btn-success" onClick={(e)=>saveEmployee(e)}/>   
                    <Link to={"/"} class="btn btn-warning" style={{marginLeft:'20px'}}>Back</Link>
                    </div>
                </form>
            </div>
           </div> 
    </div>
    )
}

