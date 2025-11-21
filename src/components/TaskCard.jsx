import React, { useState } from 'react'
import AddForm from './AddForm'


export default function TaskCard({title,important=false}) { 
  const [isFormOpen,setFormOpen] = useState(false);
  return (
    <li  onDoubleClick={()=>setFormOpen(!isFormOpen)} class={`group/item w-full rounded-xl bg-sky-300 ${isFormOpen ? "h-full" : "h-30"} px-5 py-6 odd:bg-sky-300 even:bg-sky-600 [.important]:border-4 first:border-yellow-500 hover:shadow-lg ${important ? "important" : ""}`} >
      <div  class="flex justify-between ">
        <div class={`group/texts`}>
          {isFormOpen ? <AddForm currentTitle={title}></AddForm> : ""}
           <p class={`text-xl lg:text-[2rem] font-bold group-hover/item:text-shadow-lg group-[.is-finished]/item:line-through group-has-checked/item:line-through ${isFormOpen ? "hidden":"block"}`}>{title}</p>
           <p class={`group-hover/texts:bg-gray-100 text-gray-500 blur-end-effect w-40 lg:w-60 overflow-hidden group-hover/item:text-gray-200 group-even/item:text-gray-100 ${isFormOpen ? "hidden":"block"}`}>description for test task...</p>
        </div>
        <div class="flex items-center gap-2" >
            <img src='src/assets/star.svg' class="hidden group-[.important]/item:block  w-8 h-8"></img>
            <input type='checkbox' class="size-5 lg:size-8"></input>
        </div>

      </div>
 
    </li>
  )
}
