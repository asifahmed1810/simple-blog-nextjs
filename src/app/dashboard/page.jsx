import {getKindeServerSession, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";

const {getUser} = getKindeServerSession();
const user = await getUser();

console.log(user);
import React from 'react';

const page = () => {
    const {getUser}=getKindeServerSession();
    const user=getUser();
    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold">Hello {user.given_name} Welcome to your profile!</h1>
        <LogoutLink className="btn btn-neutral">Logout</LogoutLink>
      </div>
    );
};

export default page;