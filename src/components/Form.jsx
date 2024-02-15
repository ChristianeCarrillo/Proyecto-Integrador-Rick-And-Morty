import styled from "styled-components";
import { useState } from "react";
import validator from "./validation";

const StyledForm = styled.form`
label{
    color: white;
}

p{
    color: red;
}
`

const Form = (props) => {
    const {login} = props;
    const [userData, setUserData] = useState({ email:"", password: ""});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setErrors(validator({ ...userData, [e.target.name]: e.target.value}))
        setUserData({ ...userData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    };

    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleChange} value={userData.email} name="email" placeholder="prueba@mail.com"/>
                    {errors.e1 ? (
                        <p>{errors.e1}</p>
                    ) : errors.e2? (
                        <p>{errors.e2}</p>
                    ) : (
                        <p>{errors.e3}</p>
                    )}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={handleChange} value={userData.password} name="password" placeholder="******"/>
                    {errors.p1 ? (
                        <p>{errors.p1}</p>
                    ) : (
                        <p>{errors.p2}</p>
                    )}
                </div>
                <button>Submit</button>
            </StyledForm>
        </div>
    );
};

export default Form;