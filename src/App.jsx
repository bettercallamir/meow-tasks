import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import JobCard from './components/JobCard'
import {v4 as uuid} from 'uuid'
import SideBar from './components/SideBar'
import SubTasksWindow from './components/SubTasksWindow'

function App() {
  const [jobs,setJobs] = useState([])
  const [currentJob,setJob] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [sideOpen, setOpen] = useState(false);

    //Load from local
  useEffect(()=>{
       const data = JSON.parse(localStorage.getItem("jobs"));
       console.log(data)
       data != null &&setJobs(data)
       setLoaded(true)
   },[])

  const handleAddJob = () =>{
    const obj = {id:uuid(),title:"",tasks:[]}
    setJobs(prev=>[obj, ...prev])
  }

  const handleDeleteJob = (id) =>{
    setJobs(prev => prev.filter(job=>job.id!==id))
  }

  const handleUpdateJobName = (id,_title) =>{
    setJobs(prev => prev.map((job)=>(
        job.id===id ? {...job,title:_title} :
        job
    )))
  }

  const handleSelectJob = (id) =>{
    const current = jobs.find(job => job.id ==id)
    current&&setJob(current)
  }

  const handleSelection = (id) =>{
    handleSelectJob(id)
    setJobs(prev => prev.map((job)=>(
      job.id===id ? {...job,isSelected:true}:
      {...job,isSelected:false}
    )))
  }

  const handleUpdateTasks = (id,newTasks) =>{
    setJobs(prev => prev.map((job)=>(
      job.id === id 
      ? {...job,tasks:newTasks}
      : job
    )))
    localStorage.setItem("jobs",JSON.stringify(jobs))
  } 

  const handleOpenSideBar = ()=>{
    setOpen(!sideOpen)
  }

  useEffect(()=>{
    if (loaded){
      localStorage.setItem("jobs",JSON.stringify(jobs))
      const selectedJob = jobs.find(j=>j.isSelected===true)
      selectedJob&&setJob(selectedJob)
      console.log(currentJob)
    }
  },[jobs])

  return (
    <>
      <div>
        <NavBar handleSideBar={handleOpenSideBar} isOpen={sideOpen}/>
        <div class="flex w-full sm:justify-center lg:justify-between ">
          <SideBar jobs={jobs} handleAddJob={handleAddJob} handleDeleteJob={handleDeleteJob} handleUpdateJobName={handleUpdateJobName} handleSelection={handleSelection} isOpen={sideOpen} setOpen={setOpen}/>
          <SubTasksWindow job={currentJob} handleUpdateTasks={handleUpdateTasks} isSideBarOpen={sideOpen} closeSideBar={setOpen}></SubTasksWindow>
        </div>
      </div>

    </>
  )
}

export default App
