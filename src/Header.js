import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then( () => {
            dispatch(logout());
        })
    }
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img 
                src='https://canadanewsmedia.ca/wp-content/uploads/2020/10/newgmaillogo.jpg'
            />
        </div>

        <div className='header_middle'>
            <SearchIcon />
            <input type='text' placeholder='Search mail'/>
            <IconButton>
                <TuneIcon className='header-inputCaret'/>
            </IconButton>
        </div>

        <div className='header_right'>
            <IconButton>
                <SettingsIcon />
            </IconButton>
            <IconButton className='appIcon'>
                <AppsIcon />
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl}/>
        </div>
    </div>
  )
}

export default Header
