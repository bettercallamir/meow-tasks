import { useEffect, useRef, useState } from 'react'
import {v4 as uuid} from 'uuid'


function App() {

  const inputRef = useRef();
  const [fileName,setFileName] = useState('No file choosen...');
  const [files , setFiles] = useState(); 
  const url = "http://192.168.43.117/"
  useEffect(()=>{
    async function fetchData(){
      try{
        const res = await fetch(`${url}/api/files`);
        if (!res.ok){
          throw new Error("Failed to get files");
        }

        const data = await res.json();
        setFiles(data['files'])
        console.log(data)
      } catch(err){
        console.log(err.message)
      }
    }
      fetchData();

  },[])

  return (
    <>
      <div>
        <div class="block w-full h-[100dvh] p-2 sm:justify-center lg:justify-between bg-[#4099FF] gap-2 ">
              <h1 class='font-bold text-2xl text-[#D9D9D9] pb-2'>File Manager</h1>
              <div class={`flex w-full px-4 text-[#D9D9D9] gap-2`}>
                  <p>upload</p>
                  <div class={`w-[80dvw] md:w-[40dvw] lg:w-[20dvw] bg-[#D9D9D9] rounded-lg p-1`}>
                      <p class={`text-[#4099FF] text-sm`}>{fileName}</p>
                  </div>
                  <input ref={inputRef} type='file' class='hidden'
                      onChange={(e)=>{
                        const file = e.target.files?.[0];
                        setFileName(file ? file.name : "No file choosen...") 
                      }}
                  ></input>
                  <svg onClick={()=>{
                      inputRef.current?.click()
                  }} class={`cursor-pointer`} width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 6.34315 1.34315 5 3 5H29C30.6569 5 32 6.34315 32 8V24C32 25.6569 30.6569 27 29 27H3C1.34315 27 0 25.6569 0 24V8Z" fill="#D9D9D9"/>
                      <path d="M20.5 4C20.5 1.79086 22.7909 0 25 0H28C30.2091 0 32 1.79086 32 4V14C32 16.2091 30.2091 18 28 18H23C20.7909 18 19 16.2091 19 14L20.5 4Z" fill="#D9D9D9"/>
                  </svg>

                  <svg class={`cursor-pointer hover:-translate-y-1 transition`} width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 25H33V29C33 30.1046 32.1046 31 31 31H2C0.895431 31 0 30.1046 0 29V25Z" fill={fileName != "No file choosen..." ? "#D9D9D9" : "#A3A3A3"}/>
                      <path d="M13 7H19V24H13V7Z" fill={fileName != "No file choosen..." ? "#D9D9D9" : "#A3A3A3"}/>
                      <path d="M16 0L22.9282 12H9.0718L16 0Z" fill={fileName != "No file choosen..." ? "#D9D9D9" : "#A3A3A3"}/>
                  </svg>


              </div>
              <div class={`h-[100dvh] w-full p-2 `}>
                <ol class={`h-[60dvh] w-full  bg-[#D9D9D9] rounded-xl px-2 `}>
                      {files ?
                        files.map((i,item)=>(
                          <span></span><li class={`py-1`}>{item.name}</li>
                        ))
                        : <li>Loading</li>
                      }
                </ol>
              </div>

        </div>
      </div>

    </>
  )
}

export default App
