import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

function Navigation() {
    return (
        <div>
            <Nav
            >
                <div className='container'>
                    <div className="row">
                        <div className="col-2">
                            <NavItem>
                                <Link
                                    to="/"
                                >
                                    Home
                                </Link>
                            </NavItem>
                        </div>
                        <div className="col-2">
                            <NavItem>
                                <Link to="/employee">
                                    Employee
                                </Link>
                            </NavItem>
                        </div>
                        <div className="col-2">
                            <NavItem>
                                <Link
                                    to="/about"
                                >
                                    About
                                </Link>
                            </NavItem>
                        </div>

                    </div>
                </div>

            </Nav>
            <hr/>
        </div>
    )
}

export default Navigation
