import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user, handleSignOut} = useFirebase()
    return (
        <div className='navbar'>
           <nav className='m-3'>

             <Link to="/">Home</Link>
             <Link to="/product">Product</Link>
             <Link to="/orders">Orders</Link>
             <Link to="/register">Register</Link>
             <span>{user?.displayName && user.displayName}</span>
            <img className='rounded-circle header-img' src={user?.photoURL && user.photoURL} alt="" />
             {
                user?.uid
                ?
                <button onClick={handleSignOut}>Sign Out</button>:
                <Link to="/login">Login</Link>
             }
           </nav>
        </div>
    );
};

export default Header;