const validateEmail = (email) => {
    const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return reg.test(email);
};
const validateName = (name) => {
    const regex = new RegExp(/^[a-zA-Z ]{2,30}$/);
    return regex.test(name);
};

export const formValidation = (name, lastName, email, companyName, message) => {
    return (validateName(name) && validateName(lastName) && validateName(companyName) && validateEmail(email) && message.length > 1)
};