//clients/src/components/Auth/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleImageWarp, resetImageWarp } from './imageWarpEffect';

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        bio: '',
        skillsHave: '',
        skillsWant: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            console.log(response.data);
            navigate("/");
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <div className="grid grid-cols-5 items-center min-h-screen bg-[#723737]">
            <div className='col-span-2 relative group'>
                <img
                    src='./wel.png'
                    className='max-w-xl w-full mx-auto cursor-pointer transition-transform duration-500 ease-out transform group-hover:scale-110'
                    onMouseMove={(e) => handleImageWarp(e)}
                    onMouseLeave={(e) => resetImageWarp(e)}
                    id="image"
                />
            </div>
            <div className="col-span-3 h-full flex items-center justify-center bg-white p-8 shadow-md">
                <div className="max-w-lg w-full">
                    <h2 className="text-4xl font-bold mb-6 text-center">Create Account</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    name="age"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">
                                Skills You Have
                            </label>
                            <input
                                name="skillsHave"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                value={formData.skillsHave}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">
                                Skills You Want To Learn
                            </label>
                            <input
                                name="skillsWant"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                value={formData.skillsWant}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">
                                Bio
                            </label>
                            <textarea
                                name="bio"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#723737d6] focus:ring-[#7237372e]"
                                value={formData.bio}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="w-full bg-[#723737] text-white py-2 rounded-lg hover:bg-[#723737d6] focus:outline-none">Sign Up</button>
                    </form>
                    <p className="mt-4 text-center">
                        Already have an account? <a href="/" className="text-[#381c1c] font-semibold hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;