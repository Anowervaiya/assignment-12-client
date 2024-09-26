import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signInOut } = useAuth();

  // const { user, logOut } = useContext(AuthContext);
  // const [cart] = useCart();

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch(error => console.log(error));
  // };
  const handleSignOut = async () => {
    await signInOut();
    setToogle(!toogle);
    navigate('/');
  };
  const [toogle, setToogle] = useState(false);
  const handleToogle = () => {
    setToogle(!toogle);
  };
  const navOptions = (
    <>
      <Link
        to={'/'}
        onClick={handleToogle}
        className="p-2 hover:text-orange-500 px-4 group"
        href="#"
      >
        Home
        <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </Link>

      <Link
        to={'all-scholarship'}
        onClick={handleToogle}
        className="p-2  hover:text-orange-500 px-4 group"
        href="#"
      >
        All Scholarship
        <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </Link>
    </>
  );

  return (
    <>
      <div className="navbar md:px-8  fixed z-10 bg-opacity-40  bg-black text-white">
        <div className="navbar-start ">
          <div className="dropdown">
            <label
              onClick={handleToogle}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {toogle ? (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black bg-opacity-90 rounded-box w-52"
              >
                {navOptions}
                {user ? (
                  <>
                    {' '}
                    <Link
                      onClick={() => {
                        handleSignOut();
                        handleToogle();
                      }}
                      className="p-2  hover:text-orange-500 px-4 group"
                      href="#"
                    >
                      Sign Out
                      <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>
                    <Link
                      to={'/Dashboard/my-profile'}
                      onClick={handleToogle}
                      className="p-2  hover:text-orange-500 px-4 group"
                      href="#"
                    >
                      Dashboard
                      <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>
                  </>
                ) : (
                  <>
                    {' '}
                    <Link
                      to={'/SignUp'}
                      onClick={handleToogle}
                      className="p-2  hover:text-orange-500 px-4 group"
                      href="#"
                    >
                      SignUp
                      <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>
                    <Link
                      to={'/SignIn'}
                      className="p-2  hover:text-orange-500 px-4 group"
                      onClick={handleToogle}
                    >
                      Sign In
                      <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>
                  </>
                )}
              </ul>
            ) : (
              ''
            )}
          </div>
          <a className="cursor-pointer normal-case text-xl">
            Scholarship Connect
          </a>
        </div>
        <div className="navbar-end hidden mr-10 lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
            {user ? (
              <>
                {' '}
                <div className="dropdown dropdown-end text-black">
                  <div
                    onClick={handleToogle}
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={user?.displayName}
                        alt="Tailwind CSS Navbar component"
                        referrerPolicy="no-referrer"
                        src={user?.photoURL}
                      />
                      <Tooltip id="my-tooltip" />
                    </div>
                  </div>
                  {toogle ? (
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <Link
                        to={'/Dashboard/my-profile'}
                        className="p-2  hover:text-orange-500 px-4 group"
                        onClick={handleToogle}
                      >
                        Dashboard
                        <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                      </Link>

                      <Link
                        onClick={() => {
                          handleToogle();
                          signInOut();
                        }}
                        className="p-2 px-4  hover:text-orange-500 group"
                        href="#"
                      >
                        Sign Out
                        <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                      </Link>
                    </ul>
                  ) : (
                    ''
                  )}
                </div>
              </>
            ) : (
              <>
                {' '}
                <Link
                  to={'/SignUp'}
                  className="p-2 hover:text-orange-500 px-4 group"
                  onClick={handleToogle}
                >
                  SignUp
                  <div className="bg-orange-500   h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
                <Link
                  to={'/SignIn'}
                  className="p-2  hover:text-orange-500 px-4 group"
                  onClick={handleToogle}
                >
                  SignIn
                  <div className="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
