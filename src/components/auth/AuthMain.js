import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthMain = () => {
    return (
        <div className='auth__container container'>
            <Outlet />
        </div>
    );
}

export default AuthMain;