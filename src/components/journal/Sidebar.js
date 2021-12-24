import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="container my-4">
            <div className='row mt-4'>
                <div className='col align-self-start my-auto'>
                    <span> Juan Daniel Garcia </span>
                </div>
                <div className='col align-self-end text-end'>
                    <Link className='btn btn-primary' to={`/auth`}>Log-out</Link>
                </div>
            </div>
            <div className='row mt-4'>
                <div className="col-12 alert alert-dark" role="alert">
                    Lista de notas 1
                </div>
                <div className="col-12 alert alert-dark" role="alert">
                    Lista de notas 2
                </div>
                <div className="col-12 alert alert-dark" role="alert">
                    Lista de notas 3
                </div>
                <div className="col-12 alert alert-dark" role="alert">
                    Lista de notas 4
                </div>
            </div>
        </div>
    );
}

export default Sidebar;