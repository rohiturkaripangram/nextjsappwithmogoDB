import React from "react";
import Link from "next/link";

const Header= () => {
  return (
    <div className="flex py-4 px-4 align-center justify-center max-2 max-w-6xl sm:mx-auto">
      <div className="flex justify-center align-center ">
        <Link className='mx-4 lg:mx-6 hover:text-amber-600' href="/login">Login</Link>
        <Link  className='mx-4 lg:mx-6 hover:text-amber-600' href="/signup">Signup</Link>
        <Link  className='mx-4 lg:mx-6 hover:text-amber-600' href="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
