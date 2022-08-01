//will not use this

import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from "reactstrap";

const User = ({ user }) => {

    const DeleteButtonHandler = () => {
        toast.warning("Are you sure you want to delete ? ", { position: "top-center" });
    };

    const UpdateButtonHandler = () => {
        toast.info("Are you sure you want to update ? ", { position: "top-right" });
    };

    return (
        <div>
            <ToastContainer />
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle className="display-6 font-weight-bold"><label>Id: </label>{user.id}</CardSubtitle>
                    <CardText><label>Name: </label>{user.name}</CardText>
                    <CardText><label>Age: </label>{user.age}</CardText>
                    <Container className="text-center">
                        <Button outline color="warning" onClick={DeleteButtonHandler}>Delete</Button>
                        <Button outline color="info" onClick={UpdateButtonHandler}>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default User;