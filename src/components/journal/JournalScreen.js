import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};


const JournalScreen = () => {

    const handleNota = () => {
        console.log("handle nota")
    }
    return (
        <div className='journal__main'>
            <div className='row allVH'>
                <div className='col-12 col-md-4 journal__sidebar'>
                    <Sidebar className='col-12 col-md-4' />
                </div>
                <div className='col-12 col-md-8'>
                    <div className='row'>
                        <nav className="journal__navbar navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <span className='navbar-brand' to={`/auth`}>
                                    25 de diciembre 2021
                                </span>
                                
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item">
                                            <Link className='btn nav_item' to={`/auth`}>Picture</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='btn nav_item' to={`/auth`}>Save</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='journal__container container my-4'>

                        <form className='row mt-4' onSubmit={handleNota}>
                            <section className='col-12 col-md-8 my-auto'>
                                <input type="nota" className="form-control" id="id_nota" placeholder="tu nota" />
                            </section>
                            <section className='col-12 col-md-4 my-auto text-center'>
                                <button type="submit" className='btn btn-2'> Agregar nota </button>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

JournalScreen.propTypes = propTypes;
JournalScreen.defaultProps = defaultProps;
// #endregion

export default JournalScreen;