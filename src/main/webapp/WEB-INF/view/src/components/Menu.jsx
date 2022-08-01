import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menu() {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag={"a"} to='/' action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag={"a"} to='/userList' action>View Users</Link>
            <Link className="list-group-item list-group-item-action" tag={"a"} to='/addUser' action>Add User</Link>
        </ListGroup>
    );
};

export default Menu;