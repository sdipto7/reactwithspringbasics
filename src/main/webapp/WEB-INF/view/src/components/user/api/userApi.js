import axios from "axios";
import { toast } from "react-toastify";


const saveUser = (user) => {
    axios.post("http://localhost:9090/api/user/save-user", user)
        .then((response) => {
            console.log(response);
            toast.success("User saved successfully!")
        }, (error) => {
            // console.log(error.response.data);
            // setFormValidations(backendValidation(error.response.data));
            toast.error("Something went wrong!")
        });
};

export default saveUser;