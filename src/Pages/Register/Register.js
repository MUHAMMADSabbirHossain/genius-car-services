import React, { useState } from 'react';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';


const Register = () => {

    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate(`/login`);
    };

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target.password.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');

    };

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: "center" }}>Please register</h2>

            <form onSubmit={handleRegister} action="" >
                {/* <label htmlFor="name"></label> */}
                <input type="text" name="name" id="" placeholder='Your name' />

                <input type="email" name="email" id="" placeholder='Email' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? " ps-2 text-primary" : " ps-2 text-danger"} htmlFor="terms"> Accept Genius Car Terms and Condition </label> */}
                <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms"> Accept Genius Car Terms and Condition </label>

                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />

            </form>
            <p>Already have an Account? <Link to="/login" onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login.</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;