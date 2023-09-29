import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logInUser, reset } from "../../../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(logInUser(userData));
  };
  return (
    <div>
      <form
        className="mb-1 mt-9 flex h-96 w-96 flex-col items-center justify-center gap-2 rounded-sm px-5 py-3 shadow-md"
        onSubmit={loginFormSubmit}
      >
        <h2 className="text-h2 mb-5 font-semibold text-light-blue">
          Welcome back!
        </h2>

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

        <button className="primary-button">Log in</button>
      </form>
    </div>
  );
}

export default Login;
