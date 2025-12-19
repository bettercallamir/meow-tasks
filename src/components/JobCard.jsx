import React, { useState } from 'react'
import trash from '../assets/trash.svg'

export default function JobCard({job,icon,handleDeleteJob,handleUpdateJobName,handleSelection}) {
  const [text,setText] = useState(job.title);
  return (
    <div class={`group w-full h-30 border border-sky-800 border-4 flex justify-between items-center cursor-pointer ${job.isSelected ? "bg-sky-200" : "bg-sky-900"}  pr-4`} onClick={()=> text!==""&&handleSelection(job.id)}>
      <div class={`flex items-center text-xl font-bold ${job.isSelected ? "text-sky-900" : "text-sky-200"}`}>
        <img  class='size-20 object-cover object-center' src={icon}></img>
        {job.title != '' 
        ? <p>{job.title}</p> 
        : <div class={`flex gap-2`}>
            <input type='text' class={`w-full h-10 bg-white rounded-xl outline-3 px-5 text-sky-500`}  onChange={(e)=> setText(e.target.value)}></input>
            <button onClick={()=>{text!==""&&handleUpdateJobName(job.id,text)}} class="cursor-pointer bg-yellow-500 text-black rounded-xl px-4 hover:shadow-lg shadow-yellow-500/50">Ok!</button>
          </div>
        }
      </div>
      <img src={trash} class={`block md:hidden ml-2 size-6 md:size-8 right-0 top-10 hover:cursor-pointer hover:-translate-y-2  active:-translate-y-1 active:translate-z-10 transition -duration-500 md:group-hover:block`} onClick={()=> {handleDeleteJob(job.id),console.log(job.id)}}></img>
    </div>
  )
}
