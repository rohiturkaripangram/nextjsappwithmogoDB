"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  
  const [user, setuser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try{
      const response=await axios.post("/api/users/signup",user)
       console.log('Signup success', response.data) 
       toast.success('you are successfully signup') 
       router.push("/login")
    }catch(error:any){
      console.log(error)
      toast.error("Signup failed")
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
      
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md border p-8 rounded-lg">
        <h2 className="text-center text-2xl font-bold leading-tight text-black mb-4">
          Sign up
        </h2>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setuser({ ...user, username: e.target.value })}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-base font-medium text-gray-900"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="email"
                value={user.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-base font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setuser({ ...user, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onSignup} // Call the signup function when the button is clicked
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 "
              disabled={buttonDisabled}   >
             {buttonDisabled? "No signup":'signup' }
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
