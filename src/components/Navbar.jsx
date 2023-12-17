import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Navbar = ({ authUser, logout }) => {
  const username = authUser?.username;
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto p-4 max-w-screen-xl px- 6 lg:px-8 flex flex-wrap items-center justify-between ">
        <div className="font-bold text-2xl dark:text-white">Note App</div>
        <div className="font-bold text-1xl dark:text-white">Hi, {username}</div>
        <div>
          {authUser && (
            <Link onClick={logout}>
              <LogoutButton />
            </Link>
          )}
        </div>
      </div>
    </nav>

  );
};

export { Navbar };