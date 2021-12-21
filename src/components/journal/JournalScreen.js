import React from 'react';
import Sidebar from './Sidebar';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};


const JournalScreen = () => {
    return (
        <div className='journal__main'>
            <div className='row allVH'>
                <div className='col-12 col-md-4 journal__sidebar'>
                    <Sidebar className='col-12 col-md-4'/>
                </div>
                <div className='journal__container col-12 col-md-8'>
                    <div className='container my-4'>
                        <h2> Journal Screen </h2>
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