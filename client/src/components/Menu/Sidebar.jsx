import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white h-full`}>
      <button onClick={toggleSidebar} className="text-white p-4">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li className="p-4 hover:bg-gray-700">Overview</li>
          <li className="p-4 hover:bg-gray-700">Dashboard</li>
          <li className="p-4 hover:bg-gray-700">Quests</li>
          <li className="p-4 hover:bg-gray-700">Trophies</li>
          <li className="p-4 hover:bg-gray-700">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
