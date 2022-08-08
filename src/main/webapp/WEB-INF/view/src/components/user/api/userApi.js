import axios from "axios";
import { toast } from "react-toastify";


export const saveUser = (user) => {

    return new Promise((resolve, reject) => {
        axios.post("http://localhost:9090/api/user/save-user", user)
            .then((result) => {
                toast.success("User saved successfully!")
            }, (error) => {
                resolve({ hasError: true, errors: error.response.data });
            })
    });
};

export const updateUser = (user) => {
    axios.put("http://localhost:9090/api/user/update-user", user)
        .then((response) => {
            console.log(response.data);
            toast.success("User Updated successfully!")
        }, (error) => {
            console.log(error);
            toast.error("Something went wrong!")
        });
};