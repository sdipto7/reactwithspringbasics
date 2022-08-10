import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

import { findUser, saveUser, updateUser } from "../../api/userApi";
import { findUserUrl, saveUserUrl, updateUserUrl } from "../../resource/url";
import { frontendValidation, backendValidation } from "../../validation/userValidation";

export default function UserForm() {
    const [user, setUser] = useState({});
    const [formValidations, setFormValidations] = useState({});
    const { id } = useParams();

    useEffect(() => {
        document.title = "User Form";
        if (!(id == null || id == '')) {
            findUserToUpdate(id);
        } else {
            setUser("");
        }
    }, []);

    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormValidations(frontendValidation(user));

        if (Object.keys(formValidations).length === 0) {
            onSaveOrUpdateClick();
        }
    };

    const findUserToUpdate = async (id) => {
        let response = await findUser(findUserUrl, id);
            if (!response.hasError) {
                setUser(response.user);
            }
    };

    const onSaveOrUpdateClick = async () => {
        let response = (id === undefined || id === null || id == '')
            ? await saveUser(saveUserUrl, user)
            : await updateUser(updateUserUrl, user);

        if (response.hasError) {
            setFormValidations(backendValidation(response.errors));
        } else {
            setUser({ firstName: '', lastName: '', username: '' });
        }
    };

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