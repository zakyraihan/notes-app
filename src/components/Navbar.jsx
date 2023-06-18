import React from "react";
// import { FaGithub } from "react-icons/fa";


function Navbar({onSearch}) {

    return (
        <>
        <div className="flex md:justify-between justify-evenly md:px-10 px-  mt-8">
           <div className="text-2xl font-bold ">
            Notes<span className="text-slate-600">App</span>
           </div>
           <div className="">
            <input type="text" className="p-2 border-2 border-black rounded-lg md:w-[30rem] w-[15rem]" placeholder="Search Notes... " onChange={(event) => onSearch(event)} id="search-navbar" />
           </div>
        </div>
        <div className="border-b-2 p-3" ></div>
        </>
    )
}

export default Navbar;