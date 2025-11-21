import React from 'react'

function Input({text, setText}) {
  return (
    <div>
      <p class="text-xl font-medium">Task title</p>
      <input class="bg-sky-100 w-full sm:w-80 h-10 rounded-xl px-3 p-6 text-xl font-bold outline-none border-4 border-sky-300  placeholder:italic placeholder-hover:text-gray-50" placeholder='Enter task title here...' value={text} onChange={(e)=> setText(e.target.value)}/>
    </div>
  )
}

export default Input