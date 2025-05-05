import React from 'react';
import NavbarComponent from '../navbar-web/navbar-web.component.jsx';

const Layout = ({ children }) => {
    return (
        <div>
            <NavbarComponent />
            <main>{children}</main>
        </div>
    );
};

export default Layout;