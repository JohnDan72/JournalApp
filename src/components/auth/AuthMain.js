import React from 'react';
import { Outlet } from 'react-router-dom';


const AuthMain = () => {
    return (
        <div className='auth__container my-4'>
            <div className='my-2 mx-3'>
                <Outlet />

            </div>
        </div>
    );
}

export default AuthMain;