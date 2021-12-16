import React from 'react';
import AppRouter from './routers/AppRouter';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const JournalApp = () => {
    return (
        <AppRouter />
    );
}

JournalApp.propTypes = propTypes;
JournalApp.defaultProps = defaultProps;
// #endregion

export default JournalApp;