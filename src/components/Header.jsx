'use client';

import React from 'react';
import { LoginLink, LogoutLink, RegisterLink, useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

import Link from 'next/link';

const Header = () => {
  const { isAuthenticated } = useKindeAuth();
  console.log(isAuthenticated)

  return (
    <header className="flex justify-between items-center p-5 px-20 bg-gray-100">
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
          <LogoutLink className="btn btn-neutral">Logout</LogoutLink>
        ) : (
          <>
            <LoginLink className="mr-5 btn btn-neutral">Login</LoginLink>
            <RegisterLink className="btn btn-neutral">Sign up</RegisterLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
