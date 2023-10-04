import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className=' text-danger'> Your Email is not varified!</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        toast('Sent email');
                    }
                }}
            >
                Send Verification email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;