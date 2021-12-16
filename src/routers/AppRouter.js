import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';

const propTypes = {};
const defaultProps = {};

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth/*" element={ <AuthRouter /> } />
                <Route exact path="/journal" element={ <JournalScreen />} />
                <Route path="*" element={ <Navigate to={`/auth/register`} />} />
            </Routes>
        </Router>
    );
}

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;

export default AppRouter;