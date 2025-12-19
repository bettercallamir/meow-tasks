import React, { useState } from 'react'
import AddForm from './AddForm'
import pen from '../assets/pen.svg'
import trash from '../assets/trash.svg'


export default function TaskCard({item,handleDeleteTask,handleUpdateTask,handleCompleted}) { 
  const [isFormOpen,setFormOpen] = useState(false);
  const [isDescriptOpen,setDescriptOpen] = useState(false);
  return (
    <li class={`group/item w-full rounded-xl bg-sky-300 ${isFormOpen||isDescriptOpen ? "h-full" : "h-30"} px-5 py-6 odd:bg-sky-300 even:bg-sky-600 [.completed]:bg-gray-500/50 [.important]:border-4 border-yellow-500 hover:shadow-lg ${item.important ? "important" : ""} ${item.completed ? "completed" :""} `} >
      <div  class="flex justify-between">
        <div class={`group/texts`}>
          {isFormOpen ? <AddForm item={item} handleUpdateTask={handleUpdateTask} closeForm={setFormOpen}></AddForm> : "" }

           <p class={`text-xl lg:text-[2rem] font-bold group-hover/item:text-shadow-lg group-[.is-finished]/item:line-through group-has-checked/item:line-through ${isFormOpen ? "hidden":"block"}`}>{item.title}</p>
           <p onClick={()=>setDescriptOpen(!isDescriptOpen)} class={` text-gray-500  w-30 md:w-60 text-nowrap ${!isDescriptOpen ? "overflow-hidden blur-end-effect " : "text-wrap"} group-hover/item:text-gray-200 group-even/item:text-gray-100 ${isFormOpen ? "hidden":"block"} cursor-pointer  ${item.completed ? "hover:bg-gray-600" : "group-odd/item:hover:bg-sky-400 group-even/item:hover:bg-sky-800"}`}>{item.description}</p>
        </div>
        <div class="flex items-center -gap-1 md:gap-2" >
            <img onClick={()=>{setFormOpen(!isFormOpen)}} src={pen} class="size-7 md:size-10 hover:cursor-pointer hover:-rotate-20 active:-rotate-20 transition-transform duration-500 group-[.completed]/item:hidden " ></img>
            <img src={trash} class={`size-7 md:size-10 right-0 top-10 hover:cursor-pointer  active:-translate-y-5 active:translate-z-10 transition -duration-500 ${isFormOpen ? "hidden" : "" }`} onClick={()=> handleDeleteTask(item.id)}></img>
            <input type='checkbox' class={`size-5 lg:size-8 ${isFormOpen ? "hidden" : ""}`} onClick={()=>handleCompleted(item.id)} checked={item.completed ? true : false} readOnly></input>
        </div>

      </div>
 
    </li>
  )
}
