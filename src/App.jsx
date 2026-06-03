import { useEffect, useRef, useState } from 'react'
import {v4 as uuid} from 'uuid'


function App() {

  const inputRef = useRef();
  const [fileName,setFileName] = useState('No file choosen...');
  const [files , setFiles] = useState(); 
  const [totalSpace, setTotalSpace] = useState();
  const [freeSpace, setFreeSpace] = useState();
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
        setFreeSpace(data['free'])
        setTotalSpace(data['total'])
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
              <div class={`h-[100dvh] w-full p-2`}>
            
                  <div class={`h-[50dvh] w-full  bg-[#D9D9D9] rounded-xl px-2 overflow-y-auto mb-2`}>
                    {files ?
                        files.map((item,i)=>(
                          <div
                            key={i}
                            className={`grid grid-cols-[1fr_100px_80px] items-center w-full py-1 border-b border-gray-400 text-gray-600 cursor-pointer  ${i%2==0 ? "" : "bg-gray-400"}`}
                          >
                              <div>
                                <span className={`px-2 border-r border-gray-400 `}>{i}</span>
                                <span className='pl-2'>{item.name}</span>
                                {item.name.includes("html")&&<span className='text-[10px] text-orange-500 font-bold ml-2'> 
                                          HTML
                                  </span>}
                                {item.name.includes("js")&&<span className='text-[10px] text-yellow-500 font-bold ml-2'> 
                                          Js
                                  </span>}
                                {item.name.includes("py")&&<span className='text-[10px] text-green-500 font-bold ml-2'> 
                                          PYTHON
                                  </span>}
                              
                              </div>
                                
                                <div className="text-left">
                                      {!item.isDir && item.size+" Kb"}
                                </div>
                              {!item.isDir&&
                                <div className='text-right text-red-700 cursor-pointer'>
                                  Delete
                                </div>
                              }
                          
                          </div>
                        ))
                        : <div>Loading</div>
                      }  
                </div>
                <div className={`flex items-center justify-between bg-[#D9D9D9] w-full h-[10dvh] rounded-xl p-4 text-gray-600 text-sm`}>
                      <div className='flex items-center'>
                          <div className='bg-[#FF8800] h-[10px] w-[10px] rounded-full mr-1 '>
                          </div>
                          <p>used space : {(totalSpace - freeSpace)/1024}Kb</p>
                          
                          <div className='bg-[#4099FF] h-[10px] w-[10px] rounded-full ml-2 mr-2 '>
                        </div>
                        <p>free space : {freeSpace/1024}Kb</p>

                         
                      <div className='bg-gray-400 h-[10px] w-[10px] ml-2 mr-2 rounded-xl'>
                      </div>
                      <p>total space : {totalSpace/1024}Kb</p>
                      </div>


                </div>
 
              </div>

        </div>
      </div>

    </>
  )
}

export default App
