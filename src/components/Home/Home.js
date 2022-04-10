import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';


const auth = getAuth(app)

const Home = () => {
    // const {user} = useFirebase();
const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is home</h1>
            <p>Curent user is {user? user.displayName : 'Not found' }</p>
        </div>
    );
};

export default Home;