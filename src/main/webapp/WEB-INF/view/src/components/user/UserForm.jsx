import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

import { saveUser, updateUser } from "./api/userApi";
import useUser from "./hook/useUser";

function UserForm() {
    const [user, setUser] = useUser({});
    const [formValidations, setFormValidations] = useState({});
    const { id } = useParams();

    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        document.title = "User Form";
        if (!(id == null || id == '')) {
            getUserToUpdate(id);
        } else {
            setUser("");
        }
    }, []);

    const getUserToUpdate = (id) => {
        axios.get(`http://localhost:9090/api/user/${id}`)
            .then((response) => {
                console.log(response.headers);
                setUser(response.data);
            }, (error) => {
                console.log(error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormValidations(frontendValidation(user));

        if (Object.keys(formValidations).length === 0) {
            if (id === undefined || id === null || id == '') {
                saveUser(user).then(res=>{
                    if (res.hasError) {
                        setFormValidations(backendValidation(res.errors));
                    }
                });
            } else {
                updateUser(user);
            }
            setUser({ firstName: '', lastName: '', username: '' });
        }
    };

    const frontendValidation = (user) => {
        const errors = {};

        // if (user.firstName === null || user.firstName === undefined || user.firstName == '') {
        //     errors.firstName = "First Name is required";
        // }
        // if (user.lastName === null || user.lastName === undefined || user.lastName == '') {
        //     errors.lastName = "Last Name is required";
        // }
        // if (user.username === null || user.username === undefined || user.username == '') {
        //     errors.username = "Username is required";
        // }

        return errors;
    }

    const backendValidation = (errorData) => {
        const errors = {};

        errors.firstName = errorData.firstName;
        errors.lastName = errorData.lastName;
        errors.username = errorData.username;

        return errors;
    }

    return (
        <>

            <ToastContainer />

            <h1 className="text-center my-3">Add User Information</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>
                        First Name:
                    </Label>
                    <Input
                        type='text'
                        placeholder='Enter First Name'
                        name='firstName'
                        id='firstName'
                        value={user.firstName}
                        onChange={onChange} />
                    <p style={{ color: 'red' }}>
                        {formValidations.firstName}
                    </p>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last Name:
                    </Label>
                    <Input
                        type='text'
                        placeholder='Enter Last Name'
                        name='lastName'
                        value={user.lastName}
                        id='lastName'
                        onChange={onChange} />
                    <p style={{ color: 'red' }}>
                        {formValidations.lastName}
                    </p>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Username:
                    </Label>
                    <Input
                        type='text'
                        placeholder='Enter Username'
                        value={user.username}
                        name='username'
                        id='username'
                        onChange={onChange} />
                    <p style={{ color: 'red' }}>
                        {formValidations.username}
                    </p>
                </FormGroup>

                {/* <FormGroup>
                    <Row>
                        <Col md="2">
                            <Label>
                                Designation:
                            </Label>
                        </Col>
                        <Col md="3">
                            <Input
                                name="designation"
                                type="radio" />
                            <Label className="mx-2">
                                TEAM_LEAD
                            </Label>
                        </Col>
                        <Col md="3">
                            <Input
                                name="designation"
                                type="radio"
                            />
                            <Label className="mx-2">
                                DEVELOPER
                            </Label>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Label>Salary: </Label>
                    <Input type='number' placeholder='Enter Amount in number' name='salary' id='salary' />
                </FormGroup> */}


                <Container className="text-center">
                    <Button
                        type="submit"
                        size="lg"
                        className="my-2"
                        style={{ width: "20%" }}
                        color="success">
                        Save User
                    </Button>
                </Container>
            </Form>
        </ >
    );
};

export default UserForm;