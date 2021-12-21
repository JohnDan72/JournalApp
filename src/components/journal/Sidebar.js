import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="container my-4">
            <div className='row'>
                <div className='col align-self-start my-auto'>
                    <span> Juan Daniel Garcia </span>
                </div>
                <div className='col align-self-end text-end'>
                    <Link className='btn btn-primary' to={`/auth`}>Log-out</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;