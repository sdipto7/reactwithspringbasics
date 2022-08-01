import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function UserForm() {
    const [user, setUser] = useState({});

    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        document.title = "User Form";
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(user);
    };

    const addUser = (user) => {
        axios.post("http://localhost:9090/api/user/save-user", user)
            .then((response) => {
                console.log(response);
                toast.success("User saved successfully!")
                setUser({firstName:'',lastName:'',username:''});
            }, (error) => {
                console.log(error);
                toast.error("Something went wrong!")
            });
    };

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
                        color="success">Add User</Button>
                </Container>
            </Form>
        </Fragment >
    );
};

export default UserForm;