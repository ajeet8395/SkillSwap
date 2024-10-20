import React from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="profile-page">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="bg-primary p-6 rounded-lg">
                    <div className="flex">
                        <img
                            src="https://avatars.dicebear.com/api/male/user.svg"
                            alt="Profile"
                            className="w-32 h-32 rounded-full"
                        />
                        <div className="ml-6">
                            <h3 className="text-xl font-semibold">Ajeet Singh</h3>
                            <p className="text-gray-600">Full Stack Developer</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;