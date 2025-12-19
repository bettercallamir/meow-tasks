import React, { useState , useEffect } from 'react'
import Input from '../components/Input'
import TaskCard from '../components/TaskCard'
import Button from '../components/button'
import {v4 as uuid} from 'uuid'
import error from '../assets/error.svg'


export default function SubTasksWindow({job,handleUpdateTasks,isSideBarOpen,closeSideBar}) {
  const [text, setText] = useState(""); 
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [updated, setUpdate] = useState(false);
  
  //Load from local
  // useEffect(()=>{
  //     const data = JSON.parse(localStorage.getItem("tasks"));
  //     data != null ? setTasks(data) : null
  // },[])

  useEffect(()=>{
    if (job!==null){
      setTasks(job.tasks)
      setLoaded(true)
    }
  },[job])

  const getCompletedCount = ()=>{
    const completed = tasks.filter(t=> t.completed==true)
    return completed.length
  }


  const handleAddTask = () => {
    if (text.trim() === "") return;
    const object = {id:uuid(),"title":text,important:false,completed:false,description:"description for test task..."}
    setTasks(prev => [...prev, object]);
    setText(""); // clear input
    setUpdate(true)
  };

  const handleDeleteTask = (id) =>{
      setTasks(prev => prev.filter(task=>task.id !== id));
      setUpdate(true)
  };

  const handleUpdateTask = (id,newTitle,newDescription,isImportant) =>{
    setTasks(prev => prev.map(task=>(
      task.id === id 
      ? {...task,title:newTitle,important:isImportant,description:newDescription} :
      task
    )));
    setUpdate(true)
  }

  const handleCompleted = (id) =>{
      const task = tasks.find(t => t.id === id)
      if (task){
        task.completed = !task.completed
        console.log(task)
        setUpdate(true)
      } 
  };

  useEffect(()=>{
    if (loaded&&updated){
      handleUpdateTasks(job.id,tasks)
      localStorage.setItem("tasks",JSON.stringify(tasks))
      console.log("updated")
      console.log(tasks)
      setUpdate(false);
    }
  },[updated])

  return (
    <div onClick={()=>{closeSideBar(false)}} class={`${isSideBarOpen&&"blur-sm"}`}>
      <div class={`${job!=null&&job.title===''&&"hidden"} ${job==null||job.title==''&&"hidden"}`}>
        <div>
          <p class={`text-xl md:text-3xl font-bold pt-4 pb-3 px-7 cursor-pointer`}>{job!=null&&job.title} :Sub Tasks</p>
        </div>
        <div class=" sm:w-50 md:w-400 h-full">
          <div class='flex items-center p-6 gap-4'>
            <Button text="add task +" addTask={handleAddTask}/>
            <Input text={text} setText={setText}/>
            
        </div>

          <div class="w-full h-[50dvh] lg:h-[60dvh] px-7 overflow-y-auto">
            <div class="h-[60dvh] md:h-[50dvh] ">
              <ul class="grid flex-col gap-5 p-3 lg:p-6 bg-sky-100">
              <p class={`text-lg font-bold`}>ToDo</p>
                {tasks.map((item,index)=>(
                   item.important==true&&item.completed==false&&
                      <TaskCard item={item} handleUpdateTask={handleUpdateTask}  handleDeleteTask={handleDeleteTask} handleCompleted={handleCompleted}></TaskCard>
                ))
                }
                {tasks.map((item)=>(
                   item.important==false&&item.completed==false&&<TaskCard item={item} handleUpdateTask={handleUpdateTask}  handleDeleteTask={handleDeleteTask} handleCompleted={handleCompleted}></TaskCard>
                ))}
                {getCompletedCount() == tasks.length&&<p class={`italic text-gray-500/50 text-sm md:text-lg`}>There is no task to do... try to add some</p>}
                
                <p class={`text-lg font-bold`}>Completed</p>
                {tasks.map((item)=>(
                  item.completed ? <TaskCard item={item} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} handleCompleted={handleCompleted}></TaskCard> : ""
                ))}
                {getCompletedCount() == 0&&<p class={`italic text-gray-500/50 text-sm md:text-lg`}>There is no task to do... try to add some</p>}
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div class={`flex w-screen md:w-400 h-[70dvh] items-center justify-center ${job!=null&&job.title!==''&&"hidden"}`}>
         <div class='flex items-center justify-center text-center gap-4'>
          <img src={error} class="size-20"></img>
          <p class={`text-3xl font-bold  text-gray-500`}>Job not set yet</p>
         </div>


      </div>
    </div>
  )
}
