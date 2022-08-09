import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { getUserList } from "./api/userApi";

function UserTable({ width = 'auto', height = 'auto' }) {
    const colNames = ['Id', 'First Name', 'LastName', 'Username', 'action']

    const [userList, setUserList] = useState({});

    useEffect(() => {
        document.title = 'User List';
        getUserList().then(res => {
            if (!res.hasError) {
                setUserList(res.userList);
            }
        });
    }, []);

    //function to delete a user using an id
    const deleteUser = (id) => {
        console.log(id);
        axios.delete(`http://localhost:9090/api/user/delete-user/${id}`).then(
            (response) => {
                console.log("successfully deleted");
                toast.success("User deleted successfully!");
                setUserList(userList.filter((user) => user.id != id));
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong!");
            });
    };

    return (
        <div className="m-auto align-self-center" style={{ width: '70%', boxShadow: '3px 6px 3px #ccc' }}>
            <ToastContainer />
            {userList.length > 0 ?
                (<table cellSpacing="0" style={{ width: '100%', height: height, padding: '5px 10px' }}>
                    <thead style={{ backgroundColor: "black", color: "white" }}>
                        <tr>
                            {colNames.map((value, index) => (
                                <th key={index}>
                                    {value.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(userList).map((user, index) => (
                            <tr key={index}>
                                {Object.values(user).map((fields, index2) => (
                                    <td key={index2}>{fields}</td>
                                ))}
                                <td>
                                    <Link to={`/updateUser/${user.id}`}>
                                        <Button outline color="info">
                                            Update
                                        </Button>
                                    </Link>
                                    <Button
                                        className="mx-2"
                                        outline color="warning"
                                        onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>) : "No data"
            }
        </div>
    )
}

export default UserTable;