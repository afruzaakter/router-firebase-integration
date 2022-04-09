import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>
            <form>
                <input type="text" placeholder='Your name' required/> <br /> <br />
                <input type="email" placeholder='Your Email' required /> <br /> <br />
                <input type="password" placeholder='password' required /> <br /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;