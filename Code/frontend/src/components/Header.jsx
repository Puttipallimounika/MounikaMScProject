import { Link } from "react-router-dom";
import { useUser } from "../userContext.jsx";
const Header = () => {
  const { userData } = useUser();
  return (
    <div className="bg-[#000000] shadow-md py-4 mt-0 shadow-lg shadow-[#fff078] mb-[0.5px]">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="logo">
          <h1 className="quicksand text-white text-xl">Price Tracker PRO</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 poppins font-light text-sm text-white">
            <Link to="/">
              <li className="nav-items hover:text-[#e90074] cursor-pointer">
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className="nav-items hover:text-[#e90074] cursor-pointer">
                About Us
              </li>
            </Link>
            <Link to="/login">
              {!userData && (
                <li className="nav-items hover:text-[#e90074] cursor-pointer">
                  Login/Signup
                </li>
              )}
            </Link>
            {userData && (
              <>
                <Link to="/dashboard">
                  <li className="nav-items hover:text-[#e90074] cursor-pointer">
                    Dashboard
                  </li>
                </Link>
                <Link to="/login">
                  <li className="nav-items hover:text-[#e90074] cursor-pointer">
                    Logout
                  </li>
                </Link>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
