import { searchReducer } from "../../features/search/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { IoMdLogOut } from "react-icons/io";
import bird from "../../../public/bird.png";

export default function Navbar() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    window.location = "/";
  };

  //search functionality
  const handleChange = (e) => {
    dispatch(searchReducer(e.target.value));
  };

  return (
    <nav className="flex h-12 items-center justify-between bg-light-blue px-7 py-7 text-white shadow-md transition duration-300">
      <div className="flex items-center gap-1">
        <h1 className="text-h1 font-semibold">StudyPal</h1>
        <img className=" h-12 w-12 rounded-full object-cover" src={bird} />
      </div>

      {user && (
        <>
          <input
            className="w-56 rounded-2xl border border-gray-400 px-2 text-light-blue focus:outline-none"
            type="text"
            placeholder="search"
            onChange={handleChange}
          />

          <li className="list-none">
            <button
              onClick={logoutUser}
              className="text-h2 flex items-center hover:text-gray-200 focus:outline-none"
            >
              <IoMdLogOut />
            </button>
          </li>
        </>
      )}
    </nav>
  );
}
