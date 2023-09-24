import React from 'react';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate(`/login`);
    };

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.password.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    };

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: "center" }}>Please register</h2>

            <form onSubmit={handleRegister} action="" >
                {/* <label htmlFor="name"></label> */}
                <input type="text" name="name" id="" placeholder='Your name' />

                <input type="email" name="email" id="" placeholder='Email' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input type="submit" value="Register" />
            </form>
            <p>Already have an Account? <Link to="/login" onClick={navigateLogin} className='text-danger pe-auto text-decoration-none'>Please Login.</Link></p>

        </div>
    );
};

export default Register;