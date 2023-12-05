import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fondo from "../assets/fondo.jpg"
import logo from "../assets/logoUnillanos.png"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
            toast.success('Inicio de sesión exitoso', {
                style: { backgroundColor: 'black', color: 'white' }
            });
            setTimeout(() => navigate('/home'), 3000);
        } catch (error) {
            toast.error('Usuario o contraseña incorrectos', {
                style: { backgroundColor: 'black', color: 'white' }
            });
            console.error("Error de autenticación", error);
        }
        console.log(username, password);
    };

    return (
        <>
            <ToastContainer />
            <div className="md:mt-[5%] contenedor-formulario contenedor">
                <div className="imagen-formulario">
                    <img src={fondo} alt="Imagen de Fondo" />
                    <div className="capa-degradada"></div>

                </div>
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="texto-formulario">
                        <img src={logo} alt="Logo" className="logo" />
                        <h2>Bienvenido</h2>
                        <p>Inicia sesión con tu cuenta</p>
                    </div>

                    <div className="input">
                        <label htmlFor="username">Usuario:</label>
                        <input
                            placeholder="Ingresa tu nombre"
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /><br />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            placeholder="Ingresa tu contraseña"
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br />
                    </div>

                    <div className="input">
                        <input type="submit" value="Iniciar sesión" />
                    </div>
                <div className='text-center text-white pt-1'>
                    ¿No tienes cuenta? <Link to='/Register' className='text-sky-600 font-medium hover:underline hover:text-sky-400 transition-all '>
                        Registrarse.</Link>
                </div>
                </form>
            </div>
        </>
    );
};

export { Login };
