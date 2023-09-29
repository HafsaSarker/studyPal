import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../../features/auth/authSlice";
import "../AuthModal.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const { name, email, password, confirmPass } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate("/dashboard");
    }
    //if everything is ok, reset
    dispatch(reset());
  }, [user, isError, isSuccess, isLoading, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createAccount = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div>
      <form
        className="mb-1 mt-9 flex h-96 w-96 flex-col items-center justify-center gap-2 rounded-sm px-5 py-3 shadow-md"
        onSubmit={createAccount}
      >
        <h2 className="text-h2 mb-5 font-semibold text-light-blue">
          Create an account :)
        </h2>
        <label className="flex flex-col text-xs">
          NAME
          <input
            className="rounded-md border border-black px-0.5 py-1 outline-none focus:outline-none"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col text-xs">
          EMAIL
          <input
            className="rounded-md border border-black px-0.5 py-1 outline-none focus:outline-none"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col text-xs">
          PASSWORD
          <input
            className="rounded-md border border-black px-0.5 py-1 outline-none focus:outline-none"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col text-xs">
          CONFIRM PASSWORD
          <input
            className="rounded-md border border-black px-0.5 py-1 outline-none focus:outline-none"
            type="password"
            name="confirmPass"
            onChange={handleChange}
          />
        </label>

        <button className="primary-button">Sign up</button>
      </form>
    </div>
  );
}

export default Register;
