import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h1>This is login</h1>
            <div>
                <button onClick={signInWithGoogle} className='m-3 rounded'>Google Sign In</button>
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