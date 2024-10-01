import React from 'react'
import Common from '../Common/Common'
import CommonButton from '../Common/CommonButton'
import CommonCount from '../Common/CommonCount'
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { BsFillEmojiSmileFill } from "react-icons/bs";




const Banner = () => {
  return (
    <>
     <section>
        <div className="container">
            <div className="banner_row flex items-center gap-[72px]">
                <div className="banner_img">
                    <img src="images/bannner_img.png" alt="bannerimg" />
                </div>
                <div className="banner_text">
                    <Common CommonHeadText='Normal to oily skin'/>
                    <h1 className=' text-[72px] text-[#333333] font-Ptserif font-[400] w-[540px] mt-[20px]'>Men’s Sunscreen
                    hand & body</h1>
                    <p className=' text-[18px] text-[#A0A79A] font-inter font-[400] w-[526px] mt-[20px] mb-[71px]'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    <CommonButton CommonButtonEffect={' hover:bg-black  transition-[.4s]'} CommonButtonText={'Add to cart'}/>
                    
                    <div className=' flex gap-[49px]'>
                    <CommonCount countnumber={4} countnextnumber={5} counticon={<FaStar />} CountText={'Rating'} countrcoma={','}/>
                    <CommonCount counticon={<FaBagShopping />} countnextnumber={0} countnumber={20} CountText={'Product solds'} countplus={'+'}/>
                    <CommonCount counticon={<BsFillEmojiSmileFill />} countnextnumber={9} countnumber={9} countplus={'+'} CountText={'Review'}/>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Banner