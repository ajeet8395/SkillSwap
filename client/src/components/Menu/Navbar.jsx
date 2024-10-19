import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg">SkillSwap</h1>
        <div>
          <span className="px-4">Activity</span>
          <span className="px-4">Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
