import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="container my-4">
            <div className='row mt-4'>
                <div className='col align-self-start my-auto'>
                <i className="bi bi-moon-stars"></i>
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
                    <div className='row'>
                        <div className='col-9'>
                            <h5>Lista de notas 1</h5>
                            <p>Descripción de nota 1</p>
                        </div>
                        <div className='col-3 my-auto'>
                            <p>Martes 1nd</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 alert alert-dark" role="alert">
                    <div className='row'>
                        <div className='col-9'>
                            <h5>Lista de notas 2</h5>
                            <p>Descripción de nota 2</p>
                        </div>
                        <div className='col-3 my-auto'>
                            <p>Martes 2nd</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 alert alert-dark" role="alert">
                    <div className='row'>
                        <div className='col-9'>
                            <h5>Lista de notas 3</h5>
                            <p>Descripción de nota 3</p>
                        </div>
                        <div className='col-3 my-auto'>
                            <p>Martes 3nd</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 alert alert-dark" role="alert">
                    <div className='row'>
                        <div className='col-9'>
                            <h5>Lista de notas 4</h5>
                            <p>Descripción de nota 4</p>
                        </div>
                        <div className='col-3 my-auto'>
                            <p>Martes 4nd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;