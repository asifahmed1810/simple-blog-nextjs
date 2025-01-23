'use client'

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    const {isAuthenticated, login, logout}=useKindeAuth();
    return (
        <header className="flex justify-between items-center p-4 bg-gray-100">
      <nav>
        <Link href="/" className="mr-4 text-blue-500 underline">
          Home
        </Link>
        <Link href="/profile" className="text-blue-500 underline">
          Profile
        </Link>
      </nav>
      <div>
        {isAuthenticated ? (
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2">
            Logout
          </button>
        ) : (
          <button onClick={login} className="bg-blue-500 text-white px-4 py-2">
            Login
          </button>
        )}
      </div>
    </header>
    );
};

export default Header;