import React from 'react'
import { STAR } from '../utils/helper';

const MyFunction = () => {
  function addNumber(a, b) {
    return a + b
  }

  var j = 2;
  const myTable = () => {
    let customTable = [];
    for (let i = 1; i <= 10; i++) {
      customTable.push(<p key={i}>{`${j} * ${i} = ${j * i}`}</p>);
    } return customTable;
  }
  return (
    <div className='min-h-screen py-[60px] flex items-center flex-col px-4 justify-center'>
      <h2 className='font-bold text-xl pb-1'>Sum</h2>
      <p>Sum of 5 and 9 is : {addNumber(5, 9)}</p>
      <div className='border-2 border-black max-w-48 w-full text-center p-3 my-4'>
        <h2 className='font-bold text-xl pb-1'>Table</h2>
        {myTable()}
      </div>
      <h2 className='font-bold text-xl pb-1'>Nested loop</h2>
      {STAR.map((obj, index) => (
        <div key={index}>
          <p className='leading-3'>{obj.title}</p>
          {obj.details.map((detail, subIndex) => (
            <p className='leading-3' key={subIndex}>{detail}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MyFunction