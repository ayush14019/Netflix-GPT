import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidaData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    
    const message = checkValidaData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    // Sign / Sign Up
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value || "Guest",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="fixed inset-0 -z-10 ">
        <img
          className="w-full h-screen object-cover  "
          src={BG_URL}
          alt="back-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-10/12 md:w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80  "
      >
        <h1 className="font-bold text-3xl  py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3  bg-gray-700  w-full hover:cursor-pointer "
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-3  bg-gray-700  w-full hover:cursor-pointer "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2   bg-gray-700 w-full hover:cursor-pointer"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-4 text-white bg-red-700 w-full rounded-lg hover:bg-red-600"
          onClick={handleButtonClick}
        >
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
