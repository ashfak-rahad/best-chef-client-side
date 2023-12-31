import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate =useNavigate();
  const { user, createUser } = useContext(AuthContext);
  // console.log(createUser);
  const auth =getAuth(app); 
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL =form.photoURL.value;
    
    console.log(name, email, password ,photoURL);
    createUser(email, password)
      .then((result) => {
        setError("");
        setSuccess("Successfully login");
        updateProfile(auth.currentUser,{
          displayName:name,photoURL:photoURL
        })
        .then(()=>{
          navigate('/login')
        })
        
        

        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

 
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold"> Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">phoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/login"
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Already have an account?
                </Link>
              </label>
            </div>
            <p className="text-red-600">{error}</p>
            <p className="text-indigo-800">{success}</p>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
