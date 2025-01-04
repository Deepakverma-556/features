import React, { useState, useEffect } from 'react'
// import { STAR } from '../utils/helper';

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

  const [name, setName] = useState([])
  useEffect(() => {
    const stars = []
    for (let i = 0; i < 4; i++) {
      let obj = ''
      for (let j = 0; j < 5; j++) {
        obj += '*'
      }
      stars.push(obj.trim())
    }
    setName(stars)
  }, [])

  return (
    <div className='min-h-screen py-[60px] flex items-center flex-col px-4 justify-center'>
      <h2 className='font-bold text-xl pb-1'>Sum</h2>
      <p>Sum of 5 and 9 is : {addNumber(5, 9)}</p>
      <div className='border-2 border-black max-w-48 w-full text-center p-3 my-4'>
        <h2 className='font-bold text-xl pb-1'>Table</h2>
        {myTable()}
      </div>
      <h2 className='font-bold text-xl pb-1'>Nested loop</h2>
      <div className='text-center pt-2 flex justify-center flex-col'>
        {name.map((obj, i) => (
          <p key={i} className='text-2xl leading-5 text-black'>
            {obj}
          </p>
        ))}
      </div>
    </div>
  )
}

export default MyFunction