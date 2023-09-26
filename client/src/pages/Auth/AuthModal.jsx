import { MdOutlineCreate, MdLaptopMac } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import "./AuthModal.css";
import Register from "./register/Register";
import Login from "./login/Login";
import { useState } from "react";

export default function HomePage() {
  const [logIn, setLogIn] = useState(true);

  function changeForms() {
    setLogIn((prevState) => !prevState);
  }
  return (
    // Home-Page
    <div className="mt-2 flex flex-col justify-center items-center h-screen">
      {/* bear */}
      <img className="h-20 w-20 object-cover pt-15" src="./createAcc.gif" />
      {/* intro */}
      <div className="bg-light-green flex justify-center items-center gap-12 rounded-full py-2 px-12 text-dark-green">
        <h4>
          Create
          {/* icon */}
          <span className="icon text-sm border-2 border-dark-green bg-dark-green rounded-full p-1 flex items-center justify-center text-neutral-100">
            <MdLaptopMac />
          </span>
        </h4>

        <h4>
          Study
          <span className="icon text-sm border-2 border-dark-green bg-dark-green rounded-full p-1 flex items-center justify-center text-neutral-100">
            <MdOutlineCreate />
          </span>
        </h4>

        <h4>
          Learn
          <span className="icon text-sm border-2 border-dark-green bg-dark-green rounded-full p-1 flex items-center justify-center text-neutral-100">
            <SlNotebook />
          </span>
        </h4>
      </div>

      {logIn ? <Login /> : <Register />}
      {logIn ? (
        <p>
          New here?{" "}
          <span
            className="cursor-pointer text-light-blue decoration-light-blue underline-offset-2 ease-linear hover:underline"
            onClick={changeForms}
          >
            Create account
          </span>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <span
            className="cursor-pointer text-light-blue decoration-light-blue underline-offset-2 ease-linear hover:underline"
            onClick={changeForms}
          >
            Log in
          </span>
        </p>
      )}
    </div>
  );
}
