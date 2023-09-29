import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <nav className="flex h-96 flex-col items-center justify-start rounded-r-xl border-r-2 border-r-light-blue px-5 py-12 text-center text-white">
      <ul className=" w-32">
        <Link to="/dashboard">
          <li className="my-4 cursor-pointer rounded-full bg-light-blue px-4 py-1 transition duration-300 hover:bg-hover-blue">
            Dashboard
          </li>
        </Link>
        <Link to="/createSet">
          <li className="my-4 cursor-pointer rounded-full bg-light-blue px-4 py-1 transition duration-300 hover:bg-hover-blue">
            Create a set
          </li>
        </Link>
        <Link to="/user/me">
          <li className="my-4 cursor-pointer rounded-full bg-light-blue px-4 py-1 transition duration-300 hover:bg-hover-blue">
            My Account
          </li>
        </Link>
      </ul>
    </nav>
  );
}
