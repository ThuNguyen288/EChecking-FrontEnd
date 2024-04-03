import React from "react";
import './Header.css';
import LogoE from '../image/LogoE.png'
const Header = () =>{
    return(
        <div class="bg-white flex font-sans h-fit items-center font-bold text-xl">
            <div class="float-left w-1/5">
                <img class="mt-4 mr-3 mb-3 ml-7"
                src={LogoE} 
                alt="Logo" 
                width={80}/>
            </div>
            <div class="float-left h-24 border-l-2 my-3 ml-3"></div>
            <div class="float-left my-3 ml-3 pl-5">
                <h3 className="mx-3 my-3">E-checking</h3>
                <h3 className="mx-3 my-3">Checking Attendance</h3>
            </div>
        </div>
    )
}
export default Header;