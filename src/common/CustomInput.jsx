import React from 'react'

const CustomInput = ({ myType, myId, myPlaceholder, myClass, myValue, customChange }) => {
  return (
    <input required type={myType} id={myId} placeholder={myPlaceholder} value={myValue} onChange={customChange} className={`py-[16.84px] font-bold max-sm:font-semibold text-sm leading-[21px] outline-none px-4 text-black border-[0.5px] border-lightGray rounded-[30px] ${myClass}`} />
  )
}

export default CustomInput