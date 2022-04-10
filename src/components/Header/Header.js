import { getAuth , signOut} from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const auth = getAuth(app);
const Header = () => {
    // const {user, handleSignOut} = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div className='navbar'>
           <nav className='m-3'>

             <Link to="/">Home</Link>
             <Link to="/products">Product</Link>
             <Link to="/orders">Orders</Link>
             <Link to="/register">Register</Link>
             <span>{user?.displayName && user.displayName}</span>
            <img className='rounded-circle header-img ms-2' src={user?.photoURL && user.photoURL} alt="" />
             {
                user?.uid
                ?
                <button className='btn btn-primary ms-2' onClick={() => signOut(auth)}>Sign Out</button>:
                <Link to="/login">Login</Link>
             }
           </nav>
        </div>
    );
};

export default Header;