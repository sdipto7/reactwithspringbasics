import axios from "axios";
import { toast } from "react-toastify";

export const getUserToUpdate = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:9090/api/user/${id}`)
            .then((result) => {
                resolve({ hasError: false, user: result.data });
            }, (error) => {
                toast.error("Something went wrong!");
                resolve({ hasError: true, user: {} });
            });
    });
};

export const getUserList = () => {

    return new Promise((resolve, reject) => {
        axios.get('http://localhost:9090/api/user/user-list').then(
            (result) => {
                resolve({hasError : false, userList : result.data});
                toast.success("All user data successfully loaded");
            },
            (error) => {
                toast.error("Something went wrong!");
                resolve({ hasError: true, userList: {} });

            }
        );
    });
};

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

    return new Promise((resolve, reject) => {
        axios.put("http://localhost:9090/api/user/update-user", user)
            .then((result) => {
                toast.success("User Updated successfully!")
            }, (error) => {
                resolve({ hasError: true, errors: error.response.data });
            });
    });
};