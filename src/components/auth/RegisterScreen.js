import React from 'react';
import { Link } from 'react-router-dom';
import { assetHelper } from '../../helpers/assetHelper';

const propTypes = {};
const defaultProps = {};

const RegisterScreen = () => {

    return (
        <div className="container ">
            <section className='row'>
                {/* register header */}
                <section className='col-12 text-center'>
                    <img className='im-fluid auth__logo' src={assetHelper(`./JournalLogo.png`).default} alt='logo' />
                    <h5>Journal-App</h5>
                    <h6 className='text-muted'>Registro</h6>
                </section>
                {/* formulario */}
                <form className='col-12'>
                    <section className='row'>
                        <section className='col-12 text-center'>
                            <h6 className='text-muted'>Llena los campos necesarios para tu nueva cuenta</h6>
                        </section>
                        <section className='col-12 mt-3'>
                            <label htmlFor="id_name" className="form-label">Nombre(s)</label>
                            <input type="text" className="form-control" name="name" id="id_name" placeholder="nombre" />
                        </section>
                        <section className='col-12 mt-3'>
                            <label htmlFor="id_appellidos" className="form-label">Apellidos</label>
                            <input type="text" className="form-control" name="appellidos" id="id_appellidos" placeholder="tus apellidos" />
                        </section>
                        <section className='col-12 mt-3'>
                            <label htmlFor="id_email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id="id_email" placeholder="tu email" />
                        </section>
                        <section className='col-12 mt-3'>
                            <label htmlFor="id_password_1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" id="id_password_1" placeholder="contraseña..." />
                        </section>
                        <section className='col-12 mt-3'>
                            <label htmlFor="id_password_2" className="form-label">Confirma la contraseña</label>
                            <input type="password" className="form-control" name="passwordConfirm" id="id_password_2" placeholder="confirma la contraseña" />
                        </section>
                        <section className='col-12 mt-4 text-center'>
                            <button className='btn send-btn w-100'> Crear </button>
                        </section>
                    </section>
                </form>
                {/* login */}
                <section className='col-12 text-center mt-4'>
                    <span>
                        ¿ya tienes una cuenta?
                    </span>
                    <Link className="btn" to={`/auth/login`}>Inicia sesión aquí</Link>
                </section>
                <section className='col-10 offset-1 text-center '>
                    <hr />
                </section>
                {/* google altternative */}
                <section className='col-12 text-center '>
                    <h6>
                        ó inicia sesión con Google
                    </h6>
                    <Link className="btn" to={`/auth/login`}>
                        <img src={assetHelper(`./googleIcon.png`).default} className='img-fluid' width="30" alt='google logo' />
                    </Link>
                </section>

            </section>
        </div>
    );
}

RegisterScreen.propTypes = propTypes
RegisterScreen.defaultProps = defaultProps

export default RegisterScreen;