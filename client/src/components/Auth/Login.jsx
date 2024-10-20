// client/src/components/Auth/Login.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleImageWarp, resetImageWarp } from './imageWarpEffect';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                // console.log('Stored token:', localStorage.getItem('token'));
                navigate('/profile');
            } else {
                setError('Invalid response from server');
            }
        } catch (err) {
            setError('Invalid credentials. Please try again.');
            console.error('Login failed:', err);
        }
    };

    return (
        <div className="flex sm:grid grid-cols-5 items-center min-h-screen bg-primary">
            <div className='col-span-2 hidden sm:block relative group'>
                <img
                    src='./wel.png'
                    className='max-w-xl w-full mx-auto cursor-pointer transition-transform duration-500 ease-out transform group-hover:scale-110'
                    onMouseMove={(e) => handleImageWarp(e)}
                    onMouseLeave={(e) => resetImageWarp(e)}
                    id="image"
                />
            </div>
            <div className="col-span-3 w-full h-full flex items-center justify-center bg-white p-8 shadow-xl shadow-zinc-900">
                <div className='max-w-md w-full'>
                    <h2 className="text-4xl font-bold mb-6 text-center">Login to SkillSwap</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light focus:outline-none"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Don't have an account? <a href="/signup" className="text-[#381c1c] font-semibold hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
