import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";


// const getUserToUpdate = (id) => {
//     axios.get(`http://localhost:9090/api/user/${id}`)
//         .then((response) => {
//             console.log(response.headers);
//             setUser(response.data);
//         }, (error) => {
//             console.log(error);
//         });
// }