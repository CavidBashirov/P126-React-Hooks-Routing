import React, { useState } from 'react'
import { Alert, Button, Table } from 'reactstrap';
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddEmployee from './AddEmployee';

function Employee() {


    const [employees, setEmployees] = useState([

        {
            id: 1,
            name: "Esger",
            address: "Lokbatan",
            age: 26
        },
        {
            id: 2,
            name: "Hezret",
            address: "Xetai",
            age: 26
        },
        {
            id: 3,
            name: "Ferhad",
            address: "Hovsan",
            age: 26
        },
        {
            id: 4,
            name: "Resad",
            address: "Ecemi",
            age: 22
        }

    ]);


    const [isActive,SetIsActive] = useState(false);

    const add = () =>{
        SetIsActive(true);
    }

    const hide = () =>{
        SetIsActive(false);
    }

    const test = (data) =>{
        document.getElementById("text").innerText = data;
    }




    return (
        <div className='container mt-5'>
            <Button onClick={()=>add()} className='mt-3'  color='success'><i className="fas fa-plus-circle"></i></Button>

            {
                employees.length > 0 ? (
                    <Table
                    >
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Address
                                </th>
                                <th>
                                    Age
                                </th>
                                <th>
                                    Settings
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(emp => (
                                    <tr key={emp.id}>
                                        <th scope="row">
                                            {emp.id}
                                        </th>
                                        <td>
                                            {emp.name}
                                        </td>
                                        <td>
                                            {emp.address}
                                        </td>
                                        <td>
                                            {emp.age}
                                        </td>
                                        <td>
                                            <Button outline={true} color='info mx-1'><i className="fas fa-info"></i></Button>
                                            <Button outline={true} color='primary mx-1'><FontAwesomeIcon icon={faSadCry} /></Button>
                                            <Button outline={true} color='danger mx-1'>Delete</Button>
                                           
                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </Table>
                ) : (<Alert
                    color="warning"
                >
                    Employee not found
                </Alert>)
            }

            <AddEmployee hide = {hide} isActive = {isActive}/>

            <input type="text"  onChange={(e)=>test(e.target.value)}/>
            <p id='text'></p>

        </div>
    )
}

export default Employee
