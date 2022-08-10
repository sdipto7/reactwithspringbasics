export const frontendValidation = (user) => {
    const errors = {};

    // if (user.firstName === null || user.firstName === undefined || user.firstName == '') {
    //     errors.firstName = "First Name is required";
    // }
    // if (user.lastName === null || user.lastName === undefined || user.lastName == '') {
    //     errors.lastName = "Last Name is required";
    // }
    // if (user.username === null || user.username === undefined || user.username == '') {
    //     errors.username = "Username is required";
    // }

    return errors;
}

export const backendValidation = (user) => {
    const errors = {};

    errors.firstName = user.firstName;
    errors.lastName = user.lastName;
    errors.username = user.username;

    return errors;
}