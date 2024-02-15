const validator = (inputsDataLogin) => {
    let errors = {};

    if(!inputsDataLogin.email.includes('@')){
        errors.e1 = 'Ingresa un email válido';
    }
    if(!inputsDataLogin.email){
        errors.e2 = 'Ingresa un email';
    }
    if(inputsDataLogin.email.length > 35){
        errors.e3 = 'Debe tener menos de 35 characters.';
    }
    if(!/\d/.test(inputsDataLogin.password)){
        errors.p1 = 'Debe tener al menos un número';
    }
    if(inputsDataLogin.password.length < 6 || inputsDataLogin.password.length > 10){
        errors.p2 = 'Debe tener mas de 6 y menos de 10 caracteres.';
    }
    
    return errors;
};

export default validator;