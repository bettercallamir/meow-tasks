import React from 'react'

export default function JobCard({icon,title,isSelected}) {
  return (
    <div class={`w-full h-30 border border-sky-800 border-4 flex justify-between items-center cursor-pointer ${isSelected ? "bg-sky-200" : "bg-sky-900"}  `}>
      <div class={`flex items-center text-xl font-bold ${isSelected ? "text-sky-900" : "text-sky-200"}`}>
        <img  class='size-20 object-cover object-center' src={icon}></img>
        <p>{title}</p>
      </div>
    </div>
  )
}
