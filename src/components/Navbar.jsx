import React, { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillTag } from "react-icons/ai";

import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const {user,logOut,auth
   }=useContext(AuthContext);

   const handleGoogleSignOut =()=>{
    signOut(auth)
    .then(result =>{
      console.log(result);
      setUser(null);
    })
  }
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Best</p>
          <p className="p-2">Chef</p>
        </div>
      </div>

      {/* Cart button */}
      <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <Link to="/" className="hover:text-gray-500" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-500" href="#">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-500" href="#">
              Login
            </Link>
          </li>
        </ul>
      </div>
      {/* avatar */}
      <div>
      {user ? (
            <>
              <span className="text-black flex gap-4 items-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <button
                  className="border rounded-2xl py-2 px-6  shadow-xl border-black bg-blue-500 text-white"
                  onClick={ handleGoogleSignOut}
                >
                  Sign Out
                </button>
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border rounded-2xl py-2 px-6  shadow-xl border-black bg-blue-500 text-white"
              >
                Login
              </Link>
            </>
          )}
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-black">
            <li>
              <Link to="/" className="hover:text-gray-500" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-500" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-500" href="#">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
