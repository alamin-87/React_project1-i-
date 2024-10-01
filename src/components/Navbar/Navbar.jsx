import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Navbar = () => {
  // --------------custom usestate part=================
  const [show , setshow]=useState(false)

  // -----------------function part=====================
  // =================toggle menu bar===================
  const handleShow=()=>{
    setshow(!show)
  }




  return (
    <>
     <nav>
        <div className="mail_menu pt-[33px]">
            <div className="container">
                <div className="menu_row flex items-center justify-between">
                    <div className="menu_logo">
                        <Link to={'/'}><img className='w-[105px] h-[43px]' src="images/logo.png" alt="menu_logo" /></Link>
                    </div>
                    <div className="menu-bar relative">
                    <HiMiniBars3BottomLeft onClick={handleShow} className='text-3xl rotate-180 active:text-brand_color' />
                    {
                       show&&
                       <ul className=' w-[160px] py-[8px] flex flex-col items-center rounded-lg bg-brand_color absolute right-0 gap-2'>
                       <li><Link  className=' text-[18px] text-white font-inter font-medium' to="/">Home</Link></li>
                       <li><Link  className=' text-[18px] text-white font-inter font-medium' to="#">About us</Link></li>
                       <li><Link  className=' text-[18px] text-white font-inter font-medium' to="#">Product</Link></li>
                       <li><Link  className=' text-[18px] text-white font-inter font-medium' to="#">Contact</Link></li>
                     </ul>
                    }
                       
                    </div>
                </div>
            </div>
        </div>
     </nav>
    </>
  )
}

export default Navbar