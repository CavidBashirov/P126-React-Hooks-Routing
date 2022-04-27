import React from 'react'
import { Modal, ModalHeader, ModalFooter, Button, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

function AddEmployee(props) {
    return (
        <div>
            <Modal isOpen={props.isActive}>
                <ModalHeader>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="Name">
                                Email
                            </Label>
                            <Input
                                id="Name"
                                name="Name"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="Address">
                            Address
                            </Label>
                            <Input
                                id="Address"
                                name="Address"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="age">
                            Age
                            </Label>
                            <Input
                                id="age"
                                name="age"
                                type="number"
                            />
                        </FormGroup>
                        </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                    >
                        Add
                    </Button>
                    {' '}
                    <Button onClick={()=>props.hide()} color="danger">
                        Cancel
                    </Button>
                    
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddEmployee
