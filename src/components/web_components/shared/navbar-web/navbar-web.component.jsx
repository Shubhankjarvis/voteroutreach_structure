import React from 'react';
import './navbar-web.style.scss';
// import logo from '../../../assets/png/logo.png';
import Avatar from '@mui/material/Avatar';
import logo from '../../../../assets/png/logo.png';
import Notification from "../../../../assets/png/notification.svg";

const NavbarComponent = () => {

    return (
        <div className='navbar-main'>
            <div className='navbar-container'>
                <div className='navbar-title-container'>
                    <div className='logo-container'>
                        <img src={logo || ''} alt="logo" width={40} height={25} />
                    </div>
                    <span className='logo-name'>भारतीय जनता पार्टी</span>
                </div>
                <span style={{ flex: 1 }} />
                <div className='navbar-main-container'>
                    <div className='notification-icon-container'>
                        <img src={Notification} alt="notification" width={25} height={25} />
                    </div>
                    <div className='navbar-user-container'>
                        <div className='user-photo-container'>
                            <Avatar className={'user-photo'} src="/broken-image.jpg" />
                        </div>
                        <span className='user-name'>Voter Outreach...</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NavbarComponent;