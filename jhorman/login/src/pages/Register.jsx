import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

import '../assets/Register.css'
const Register = () => {
    const [email, setEmail] = useState('');
    const [ShowPassword, SetShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleShowPassword = () => {
        SetShowPassword(!ShowPassword);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Registro exitoso', {
                style: { backgroundColor: 'black', color: 'white' }
            });
            setTimeout(() => navigate('/'), 3000);

        } catch (error) {
            toast.error(error.message, {
                style: { backgroundColor: 'black', color: 'white' }
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='bg-secondary-100 min-h-screen flex items-center justify-center p-6'>
                <div className="bg-white p-8 rounded-lg w-full md:w-96 shadow-2xl">
                    <div className='mb-10'>
                        <h1 className="text-3xl uppercase font-bold text-center text-sky-800">Crear <span className='text-primary'>Usuario</span></h1>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
                        <div className='relative'>
                            <RiMailLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 font-semibold ' />
                            <input type="email" name="correo" id="correo"
                                className='border border-gray-400 outline-none w-full py-2 px-8 rounded-lg hover:border-primary'
                                placeholder='Ingrese Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='relative'>
                            <RiLockLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 font-semibold ' />
                            <input type={ShowPassword ? 'text' : 'password'} name="password" id="password"
                                className='border border-gray-400 outline-none w-full py-2 px-8 rounded-lg hover:border-primary'
                                placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {ShowPassword ?
                                (<RiEyeOffLine onClick={handleShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 font-semibold hover:cursor-pointer' />
                                ) :
                                (<RiEyeLine onClick={handleShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 font-semibold hover:cursor-pointer' />)
                            }
                        </div>
                        <div className=''>
                            <button type="submit" className='bg-sky-600 text-white w-full rounded-lg py-2 px-2 mt-6 hover:bg-primary hover:scale-105 transition-colors'>Registrarse</button>
                        </div>
                    </form>
                    <div className='text-center text-black'>
                        ¿Ya tienes cuenta? <Link to='/' className='text-sky-600 font-medium hover:underline hover:text-primary transition-all '>
                            Iniciar Sesión.</Link>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export { Register };
