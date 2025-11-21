import React, { useState } from 'react'

function button({text,addTask}) {
  const [isHovered,setHovered] = useState(false);
  return (
    <button onClick={()=>{addTask()}} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} class='w-20 h-20 hover:w-50 bg-sky-500 rounded-xl cursor-pointer text-white text-xl font-bold hover:bg-sky-700 transition duration-1000'>
      {isHovered ? text : "+"}
    </button>
  )
}

export default button