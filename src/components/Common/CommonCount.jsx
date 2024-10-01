import React from 'react'
import CountUp from 'react-countup';


const CommonCount = ({CountText , countnumber ,countnextnumber, counticon, countplus , countrcoma}) => {
  return (
    <>
    <div className="CommonCount_row mt-[42px]">
        <div className="single_commoncount flex items-center">
            <div  className=' text-3xl text-[#F2994A] mr-[12px]' >
             {counticon}
            </div>
          <CountUp end={countnumber} className=' text-[32px] font-inter font-[700] text-[#333333]' />
          <div className=' text-[32px] font-inter font-[700] text-[#333333]'>
             {countrcoma}
          </div>
          <CountUp end={countnextnumber} className=' text-[32px] font-inter font-[700] text-[#333333]' />
          <div className=' text-[32px] font-inter font-[700] text-[#333333]'>
             {countplus}
          </div>
        </div>
        <p className=' text-[18px] font-[400] font-inter text-[#A0A79A] pl-[34px]'>{CountText}</p>
    </div>
    </>
  )
}

export default CommonCount