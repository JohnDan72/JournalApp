import React from 'react';
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
                <div className='journal__container col-12 col-md-8'>
                    <div className='container my-4'>
                        <h2> Journal Screen </h2>

                        <form className='row mt-4' onSubmit={handleNota}>
                            <section className='col-12 col-md-8 my-auto'>
                                <input type="nota" className="form-control" id="id_nota" placeholder="tu nota" />
                            </section>
                            <section className='col-12 col-md-4 my-auto text-center'>
                                <button type="submit" className='btn btn-primary'> Agregar nota </button>
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