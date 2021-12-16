import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthMain = () => {
    return (
        <div className='auth__container'>
            <div className='my-5 mx-3'>
                <Outlet />

            </div>
        </div>
    );
}

export default AuthMain;