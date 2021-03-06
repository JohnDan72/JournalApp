import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assetHelper } from '../../helpers/assetHelper';
// import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};


const LoginScreen = () => {
    const navigate = useNavigate();
    const loginHandle = ( e ) => {
        console.log(e)
        e.preventDefault();
        console.log("Login!!!!!");
        return navigate(`/journal`);
    }


    return (
        <div className="container ">
            <section className='row'>
                {/* login header */}
                <section className='col-12 text-center'>
                    <img className='im-fluid auth__logo' src={assetHelper(`./JournalLogo.png`).default} alt='logo' />
                    <h5>Journal-App</h5>
                    <h6>Login</h6>
                </section>
                {/* formulario */}
                <form className='col-12' onSubmit={loginHandle}>
                    <section className='row'>
                        <section className='col-12 mt-3'>
                            <label htmlFor="id_email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="id_email" placeholder="tu email" />
                        </section>
                        <section className='col-12 mt-3'>
                            <label htmlFor="id_password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="id_password" placeholder="contraseña..." />
                        </section>
                        <section className='col-12 mt-4 text-center'>
                            <button type="submit" className='btn send-btn w-100'> Login </button>
                        </section>
                    </section>
                </form>
                {/* create an account */}
                <section className='col-12 text-center mt-4'>
                    <span>
                        ¿Aún no tienes una cuenta?
                    </span>
                    <Link className="btn" to={`/auth/register`}>Crea una aquí</Link>
                </section>
                <section className='col-10 offset-1 text-center '>
                    <hr />
                </section>
                {/* google altternative */}
                <section className='col-12 text-center '>
                    <h6>
                        ó inicia sesión con Google
                    </h6>
                    <Link className="btn" to={`/auth/register`}>
                        <img src={assetHelper(`./googleIcon.png`).default} className='img-fluid' width="30" alt='google logo' />
                    </Link>
                </section>

            </section>
        </div>
    );
}

LoginScreen.propTypes = propTypes;
LoginScreen.defaultProps = defaultProps;

export default LoginScreen;