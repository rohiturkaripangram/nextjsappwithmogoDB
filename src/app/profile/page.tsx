"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/signup");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Some error is coming in logout");
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/accountuser");
    console.log(response.data);
    setData(response.data.data._id);
  };

  React.useEffect(()=>{
    getUserDetails()
  })
  return (
    <div className="text-center">
      <div>Profile</div>

      <h3>
        {data === "nothing" ? (
          "nothing"
        ) : (
          <Link href={`/profile/${data}`}>

            {
              data
            }
          </Link>
        )}
      </h3>

      <button
        className="bg-gray-200 p-2 border rounded-lg mt-4"
        onClick={logout}
      >
        Logout
      </button>
     
    </div>
  );
};

export default Profile;
