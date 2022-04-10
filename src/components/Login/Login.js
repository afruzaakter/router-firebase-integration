import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import {useLocation, useNavigate} from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase()
    const [singInWithGoogle,user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        singInWithGoogle()
        .then (() =>{
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <h1>This is login</h1>
            <div>
                <button onClick={handleGoogleSignIn} className='m-3 rounded'>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' required /> <br /> <br />
                <input type="password" placeholder='password' required /> <br /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;