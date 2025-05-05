import React from 'react'
import "./navbar-mob.style.scss"
import { useNavigate } from 'react-router-dom'
import { BackIcon } from '../../../../assets';

const NavbarMobile = ({ page_name, navigation_path }) => {
    const navigate = useNavigate();

    return (
        <div className='navbar_mobile_container'>
            <div onClick={() => navigate(page_name === "Assam Election" ? -1 : `/${navigation_path}`)} className='navbar_back_icon_container'>
                <img src={BackIcon} alt='back_icon'/>
            </div>
            <div className='navbar_page_name'>{page_name}</div>
            <div className='navbar_empty_container'></div>
        </div>
    )
}

export default NavbarMobile
