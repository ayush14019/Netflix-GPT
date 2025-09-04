import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
          alt="back-logo"
        />
      </div>
      <form className=" w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80 ">
        <h1 className="font-bold text-3xl  py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3  bg-gray-700  w-full "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3  bg-gray-700  w-full "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2   bg-gray-700 w-full"
        />
        <button className="p-4 my-4 text-white bg-red-700 w-full rounded-lg ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer font-bold" onClick={toogleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : " Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
