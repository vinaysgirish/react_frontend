import React, {useEffect,useState} from 'react'
import EmployeeViewService from '../Services/EmployeeViewService'
import Footer from './Footer'



export const ViewEmployee = () => {

    const[employees, setEmployees ]=useState([]) // Allows Functional Component, Initil:
    useEffect(
        ()=>{
            EmployeeViewService.getAllEmployees().then(
                (response)=>{
                    setEmployees (response.data); 
                    console.log(response.data);
                }
            ).catch(error=>{
                console.log(error);
            })
        }
    )

    return (
        <div className='container'>
        <Header/>
            <h2 className='text-center'>List Employee</h2>
            <table>
                <thread>

                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee EmailId</th>
                </thread>
                <tbody>
                {
                    employees.map(
                        employee=>
                        <tr key={employee.id}>

                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}
export default ViewEmployee;