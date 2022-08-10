import axios from "axios";
import { toast } from "react-toastify";

export const findUser = (url, id) => {
    
    return new Promise((resolve, reject) => {
        axios.get(`${url}/${id}`)
            .then((result) => {
                resolve({ hasError: false, user: result.data });
            }, (error) => {
                toast.error("Something went wrong!");
                resolve({ hasError: true, user: {} });
            });
    });
};

export const getUserList = (url) => {

    return new Promise((resolve, reject) => {
        axios.get(`${url}`).then(
            (result) => {
                toast.success("All user data successfully loaded");
                resolve({ hasError: false, userList: result.data });
            },
            (error) => {
                toast.error("Something went wrong!");
                resolve({ hasError: true, userList: {} });
            }
        );
    });
};

export const saveUser = (url, user) => {

    return new Promise((resolve, reject) => {
        axios.post(`${url}`, user)
            .then((result) => {
                toast.success("User saved successfully!");
                resolve({ hasError: false });
            }, (error) => {
                toast.error("Something went wrong!");
                resolve({ hasError: true, errors: error.response.data });
            })
    });
};

export const updateUser = (url, user) => {

    return new Promise((resolve, reject) => {
        axios.put(`${url}`, user)
            .then((result) => {
                toast.success("User Updated successfully!");
                resolve({ hasError: false });
            }, (error) => {
                toast.error("Something went wrong!");
                resolve({ hasError: true, errors: error.response.data });
            });
    });
};

export const deleteUser = (url, id) => {

    return new Promise((resolve, reject) => {
        axios.delete(`${url}/${id}`).then(
            (response) => {
                toast.success("User deleted successfully!");
                resolve({ hasError: false });
            },
            (error) => {
                toast.error("Something went wrong!");
                resolve({ hasError: true });
            });
    });
};