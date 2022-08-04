import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

function UserForm() {
    const [user, setUser] = useState({});
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

    const saveUser = (user) => {
        axios.post("http://localhost:9090/api/user/save-user", user)
            .then((response) => {
                console.log(response);
                toast.success("User saved successfully!")
                setUser({ firstName: '', lastName: '', username: '' });
            }, (error) => {
                console.log(error);
                toast.error("Something went wrong!")
            });
    };

    const updateUser = (user) => {
        axios.put("http://localhost:9090/api/user/update-user", user)
            .then((response) => {
                console.log(response.data);
                toast.success("User Updated successfully!")
                setUser({ firstName: '', lastName: '', username: '' });
            }, (error) => {
                console.log(error);
                toast.error("Something went wrong!")
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormValidations(validate(user));

        if (Object.keys(formValidations).length === 0) {
            if (id === undefined || id === null || id == '') {
                console.log("in save");
                console.log(id);
                saveUser(user)
            } else {
                console.log("in update");
                console.log(id);
                updateUser(user);
            }
        }
    };

    const validate = (user) => {
        const errors = {};

        if (user.firstName === null || user.firstName === undefined || user.firstName == '') {
            errors.firstName = "First Name is required";
        }
        if (user.lastName === null || user.lastName === undefined || user.lastName == '') {
            errors.lastName = "Last Name is required";
        }
        if (user.username === null || user.username === undefined || user.username == '') {
            errors.username = "Username is required";
        }

        return errors;
    }

    return (
        <Fragment>

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
        </Fragment >
    );
};

export default UserForm;