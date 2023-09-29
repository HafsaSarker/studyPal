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
    <div className="mt-12 flex flex-col items-center justify-center ">
      <img className="pt-15 h-20 w-20 object-cover" src="./createAcc.gif" />

      <div className="flex items-center justify-center gap-12 rounded-full bg-light-green px-12 py-2 text-dark-green">
        <h4>
          Create
          <span className="icon flex items-center justify-center rounded-full border-2 border-dark-green bg-dark-green p-1 text-sm text-neutral-100">
            <MdLaptopMac />
          </span>
        </h4>

        <h4>
          Study
          <span className="icon flex items-center justify-center rounded-full border-2 border-dark-green bg-dark-green p-1 text-sm text-neutral-100">
            <MdOutlineCreate />
          </span>
        </h4>

        <h4>
          Learn
          <span className="icon flex items-center justify-center rounded-full border-2 border-dark-green bg-dark-green p-1 text-sm text-neutral-100">
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
