import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const NavBar = () => {

    // const [user,logOut] = useContext(AuthContext)
  return (
    <div className="flex justify-center">
      <ul className="flex space-x-5 text-gray-500 uppercase font-semibold p-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "active text-[#eb5058]" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isActive ? "active text-[#eb5058]" : isPending ? "pending" : ""
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="text-blue-500"
          className="hover:text-blue-500"
        >
          About
        </NavLink>
        <NavLink
          to="/gallery"
          activeClassName="text-blue-500"
          className="hover:text-blue-500"
        >
          Gallery
        </NavLink>
        <NavLink
          to="/testimonial"
          activeClassName="text-blue-500"
          className="hover:text-blue-500"
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="text-blue-500"
          className="hover:text-blue-500"
        >
          Contact
        </NavLink>
        {/* {
            user ? <>
            <p>{user?.displayName}</p>
            </>: <>
          <Link className="btn btn-accent" to='/signup'>signup</Link>
          </>
        } */}
      </ul>
    </div>
  );
};

export default NavBar;
