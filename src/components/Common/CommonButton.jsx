import React from 'react'
import { MdShoppingCart } from "react-icons/md";


const CommonButton = ({CommonButtonText , CommonButtonEffect}) => {
  return (
   <>
   <button className={`common_button py-[13px] px-[35px] bg-[#C51605] rounded-[5px] text-[18px] text-[#FFFFFF] font-inter font-[500] flex items-center gap-[16px] active:scale-[1.1] ${CommonButtonEffect}`}>
   <MdShoppingCart className='text-2xl' /> {CommonButtonText}</button>
   </>
  )
}

export default CommonButton