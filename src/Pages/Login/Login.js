import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';
import useToken from '../../hooks/useToken';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    };

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);


    };

    const navigateRegister = event => {
        navigate("/register");
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        }
        else {
            toast("Please enter your email address.");
        }
    }



    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            {errorElement}

            <p>New to Genious Car? <Link to="/register" onClick={navigateRegister} className='text-primary pe-auto text-decoration-none'> Please Register.</Link></p>

            <p>Forget Password? <button onClick={resetPassword} className=' btn btn-link text-primary pe-auto text-decoration-none'> Reset Password.</button></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;