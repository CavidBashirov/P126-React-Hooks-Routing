import React, { useState, useEffect } from 'react'
import { Alert, Button, Table } from 'reactstrap';
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddEmployee from './AddEmployee';
import { MainContext, useContext } from '../context';
import axios from "axios";
import Basket from './Basket';
import Test from './test';

function Employee() {

    const { surname } = useContext(MainContext)

    const [employees, setEmployees] = useState([

        // {
        //     id: 1,
        //     name: "Esger",
        //     address: "Lokbatan",
        //     age: 26
        // },
        // {
        //     id: 2,
        //     name: "Hezret",
        //     address: "Xetai",
        //     age: 26
        // },
        // {
        //     id: 3,
        //     name: "Ferhad",
        //     address: "Hovsan",
        //     age: 26
        // },
        // {
        //     id: 4,
        //     name: "Resad",
        //     address: "Ecemi",
        //     age: 22
        // }

    ]);


    const [isActive, SetIsActive] = useState(false);

    const add = () => {
        SetIsActive(true);
    }

    const hide = () => {
        SetIsActive(false);
    }

    const test = (data) => {
        document.getElementById("text").innerText = data;
    }


    useEffect(() => {
        axios
        .get("https://localhost:44317/api/Customer/GetAll")
        .then(response => {
            setEmployees(response.data)
        })
        .catch(error => console.log(error));
      
    });

    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")))

    const takeCount = (data) =>{
        setCount(data);
    }


    return (
        <div className='container mt-5'>
            <Basket takeCount = {takeCount}/>
            <Test count={count}/>
            <Button onClick={() => add()} className='mt-3' color='success'><i className="fas fa-plus-circle"></i></Button>

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
                                    Full name
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
                                            {emp.fullName}
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

            <AddEmployee hide={hide} isActive={isActive} />

            <input type="text" onChange={(e) => test(e.target.value)} />
            <p id='text'></p>
            <h3>{surname}</h3>

        </div>
    )
}

export default Employee
