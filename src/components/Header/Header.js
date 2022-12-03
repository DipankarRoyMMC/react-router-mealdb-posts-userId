import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Friends from '../Friends/Friends';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-link'>
            <Link to='/' element={<Home></Home>}>Home</Link>
            <Link to='/about' element={<About></About>}>About</Link>
            <Link to='/contact' element={<Contact></Contact>}>Contact</Link>
            <Link to='/friends' element={<Friends></Friends>}>Friends</Link>
            <Link to='/posts' element={<Posts></Posts>}>Posts</Link>
            <Link to='*' element={<NotFound></NotFound>}></Link>

        </nav>
    );
};

export default Header;