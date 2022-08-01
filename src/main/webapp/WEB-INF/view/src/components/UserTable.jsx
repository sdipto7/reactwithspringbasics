import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import base_url from "../api/RestApi";

function UserTable({ width = 'auto', height = 'auto' }) {
    const [list, setUser] = useState({});

    useEffect(() => {
        document.title = 'User List';
        getAllUsers();
    }, []);

    //function to call server
    const getAllUsers = () => {
        axios.get('http://localhost:9090/api/user/user-list').then(
            (response) => {
                setUser(response.data)
                toast.success("All user data successfully loaded");
            },
            (error) => {
                toast.error("Something went wrong");
            }
        );
    }

    const colNames = ['ID', 'Name', 'Username', 'action']

    const DeleteButtonHandler = () => {
        toast.warning("Clicked on delete", { position: "top-center" });
    };

    const UpdateButtonHandler = () => {
        toast.info("Clicked on update ", { position: "top-center" });
    };

    return (
        <div className="m-auto align-self-center" style={{ width: '70%', boxShadow: '3px 6px 3px #ccc' }}>
            <ToastContainer />
            {list.length > 0 ?
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
                        {Object.values(list).map((object, index) => (
                            <tr key={index}>
                                {Object.values(object).map((value, index2) => (
                                    <td key={index2}>{value}</td>
                                ))}
                                <td>
                                    <Button outline color="info" onClick={UpdateButtonHandler}>Update</Button>
                                    <Button className="mx-2" outline color="warning" onClick={DeleteButtonHandler}>Delete</Button>
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