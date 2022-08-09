import { useState } from "react";

const useValidation = () => {
    const [formValidations, setFormValidations] = useState({});

    return [formValidations, setFormValidations];
};

export default useValidation;