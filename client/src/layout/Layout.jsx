import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-full bg-gray-100">
      <Navbar />
      <Outlet />
    </div>
  );
}
