import React, { useState } from 'react';
import './Sidenav.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward, IoMdClose, IoMdSettings } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/SipTok_Logo.png';

export const SideNav = ({isOpen ,toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full z-40 bg-white border-r border-gray-200 transition-all duration-300 ${
        isOpen ? 'w-[240px]' : 'w-[60px]'
      }`}
      aria-label="Sidebar"
      style={{
        height: '100vh',
        borderRight: '1px solid #E5E7EB',
      }}
    >
      <div className="h-full py-3 overflow-y-auto">
        <div className="flex items-center justify-between px-3 mb-3">
          <div className="logo-container">
            <Link to="/home">
            {
              isOpen ? (
                <img src={logo} alt="logo" className={`transition-all duration-300`} />
              ) : (
                <p className='text-4xl italic text-sky-400 font-semibold'>ST</p>
              )
            }
            </Link>
          </div>
        </div>
        <ul className="space-y-2 font-medium px-3">
          <li>
            <Link
              to="/home"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className={`ms-3 ${isOpen ? 'inline' : 'hidden'}`}>Dashboard</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => {
               if(isOpen){
                const dropdown = document.getElementById('dropdown-example');
                dropdown.classList.toggle('hidden');
               } else{
                toggleSidebar();
               }
              }}
            >
              <IoMdSettings />
              <span className={`flex-1 ms-3 text-left whitespace-nowrap ${isOpen ? 'inline' : 'hidden'}`}>Setting</span>
              <svg
                className={`w-3 h-3 ${isOpen ? 'block' : 'hidden'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Speaker
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Zone
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => {
                  if (isOpen) {
                    const dropdown = document.getElementById('dropdown-example-2');
                    dropdown.classList.toggle('hidden');
                  } else {
                    toggleSidebar();  // Assuming you meant `toggleSidebar` instead of `tooggleSidebar`
                  }
                }}
              >
              <FaUserAlt />
              <span className={`flex-1 ms-3 text-left whitespace-nowrap ${isOpen ? 'inline' : 'hidden'}`}>Manage User</span>
              <svg
                className={`w-3 h-3 ${isOpen ? 'block' : 'hidden'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="dropdown-example-2" className="hidden py-2 space-y-2">
              <li>
                <Link
                  to="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Manage Password
                </Link>
              </li>
            </ul>
          </li>
          <li className='mt-3 flex justify-center items-center'>
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none rounded-2xl bg-white shadow p-2 text-sm ">
              {
                isOpen ? <IoIosArrowBack size={24}/> : <IoIosArrowForward  size={24} />
              }
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
