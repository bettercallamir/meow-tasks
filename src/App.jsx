import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import NavBar from './components/navBar'
import Input from './components/Input'
import TaskCard from './components/TaskCard'
import JobCard from './components/JobCard'

function App() {
  const [text, setText] = useState(""); 
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
      console.log(text)
      console.log(tasks)
  },[text])

  const handleAddTask = () => {
    if (text.trim() === "") return;
    const object = {"title":text}
    setTasks(prev => [...prev, object]);
    setText(""); // clear input
  };


  return (
    <>
    
      <NavBar/>

      <div class="flex w-full sm:justify-center lg:justify-between ">
      <div class="top-0 left-0 h-screen bg-sky-600  hidden lg:block overflow-y-auto sm:w-0 md:w-[40dvh]">
        <div class="flex w-full bottom-0 left-0 h-20 bg-sky-800 justify-center items-center cursor-pointer hover:bg-sky-900"><p class="text-xl font-bold text-sky-200">Add Job +</p></div>
        <JobCard icon={'src/assets/big-bannana.png'} isSelected={true} title="programming"></JobCard>
        <JobCard icon={'src/assets/big-bannana.png'} isSelected={false} title="nothing"></JobCard>

      </div>
        <div class=" sm:w-50 md:w-400 h-full">
          <div class='flex items-center p-6 gap-4'>
            <Button text="add task +" addTask={handleAddTask}/>
            <Input text={text} setText={setText}/>
            
          </div>

          <div class="w-full h-full px-7 overflow-y-auto ">
            <div class="h-[60dvh] lg:h-[70dvh] ">
              <ul class="grid flex-col gap-5 p-3 lg:p-6 bg-sky-100">
              {tasks.map((item,index)=>(
                index == 0 ? <TaskCard title={item.title} important={true}></TaskCard> : <TaskCard title={item.title} important={false}></TaskCard>

                ))}
                              
              </ul>
            </div>
          </div>

        </div>

      </div>
 
 




    </>
  )
}

export default App
