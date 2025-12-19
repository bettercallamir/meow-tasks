import React from 'react'
import JobCard from './JobCard'
import bannanaIcon from '../assets/big-bannana.png'

export default function SideBar({jobs,handleAddJob,handleDeleteJob,handleUpdateJobName,handleSelection,isOpen,setOpen}) {
  return (
      <div class={`transition duration-500 top-0 left-0 h-screen bg-sky-600 lg:block overflow-y-auto w-[40dvh] ${isOpen&&"absolute"} ${isOpen&&"z-1"} ${isOpen ? "block" : "hidden"}`}>
        <div class={`flex cursor-pointer bg-sky-900`} >
            <div onClick={()=>setOpen(false)} class={`flex w-full items-center justify-center text-center ${!isOpen&&"hidden"}`}><span class={`text-sky-300/80  text-4xl`}>←</span></div>
            <div onClick={()=>handleAddJob()} class="flex w-full bottom-0 left-0 h-20 bg-sky-800 justify-center items-center cursor-pointer hover:bg-sky-900"><p class="text-xl font-bold text-sky-200">Add Job +</p></div>
        </div>
       
        {jobs!=null&&jobs.map((job)=>(
            <JobCard job={job}icon={bannanaIcon} title={job.title} isSelected={job.isSelected} handleDeleteJob={handleDeleteJob} handleUpdateJobName={handleUpdateJobName} handleSelection={handleSelection}></JobCard>
        ))}

      </div>

  )
}
