import React from "react";

const Navbar = ({projectName  = "Default Todo App " }) => {
    return (
        <nav className="bg-gray-700 text-white text-center p-5 ">
        <div className="container-fluid">
          <span className=" text-white"> {projectName}</span>
        </div>
     
      </nav>
    )
}
export default Navbar;
