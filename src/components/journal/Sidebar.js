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
                    <Link className='btn nav_item' to={`/auth`}>Log-out</Link>
                </div>
            </div>
            <div className='row my-4'>
                <div className='col-8 offset-2'>

                    <div className="journal__card card">
                        <i  className="bi bi-calendar-plus text-center"
                            style={{fontSize: '4rem'}}></i>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body text-center">
                            <button type='button' className="btn btn-1">New entry</button>
                        </div>
                    </div>
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