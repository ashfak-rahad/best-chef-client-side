import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const [user,setUser]=useState();

  const {signIn,signInWithGoogle,signInGithub }=useContext(AuthContext);
  
    const handleLogin =event =>{
        event.preventDefault();
   const form =event.target;
   const email =form.email.value;
   const password =form.password.value;
   console.log(email,password);

   signIn (email,password)
   .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser)
   })
  .catch(error =>{
    console.log(error)
  })

    }
    const handleGoogleSignIn =()=>{
      signInWithGoogle()
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
      
      })
      .catch(error =>{
        console.log(error)
      })
    }
    const handleGoogleSignOut =()=>{
      signOut(auth)
      .then(result =>{
        console.log(result);
        setUser(null);
      })
    }
    const handleGithub =()=>{
        signInGithub()
        .then(result =>{
            const loggedUser =result.user;
            console.log (loggedUser)
        })
        .catch(error =>{
            console.log(error);
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold"> Login!</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name ='email'
                placeholder="email"
                className="input input-bordered" required
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
                className="input input-bordered" required
              />
              <label className="label">
               
              </label>
            </div>
            <label className="label">
                <Link to='/sign' href="#" className="label-text-alt link link-hover">
                  You are new user now Registetion?
                </Link>
              </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
             {
              user?
              <button onClick={handleGoogleSignOut} className="btn btn-primary">Sing Out</button>:
              <button onClick={handleGoogleSignIn} className="btn btn-primary">Sing in to Google</button>}
              
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGithub} className="btn btn-primary">Sing in to Github</button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
