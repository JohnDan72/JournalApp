import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthMain from '../components/auth/AuthMain';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const AuthRouter = () => {
    return (
        <div className="auth__main">

            <Routes>
                <Route path="" element={<AuthMain />}>
                    <Route index element={<LoginScreen />} />
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="register" element={<RegisterScreen />} />
                </Route>
            </Routes>
        </div>
    );
}

AuthRouter.propTypes = propTypes;
AuthRouter.defaultProps = defaultProps;

export default AuthRouter;