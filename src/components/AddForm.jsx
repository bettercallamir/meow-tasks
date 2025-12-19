import React, { useState } from 'react'


export default function AddForm({item,handleUpdateTask,closeForm}) {

  const [text,setText] = useState(item.title);
  const [descriptipn,setDiscript] = useState(item.description);
  const [isImportant,setImportant] = useState(item.important);
  const [changed,setChanged] = useState(false);


  return (
    <div class="relative flex-col p-4"> 

      <p class={`text-xl font-bold py-1`}>title</p>
      <input type="text" class={`w-full sm:w-[20dvw] bg-white rounded-sm px-2 mb-2`} placeholder={item.title !='' ? item.title : "Enter new title..."} onChange={(e)=> {e.target.value != '' && setChanged(true); e.target.value.trim()!=='' ? setText(e.target.value) : setText(item.title)}} ></input>
      <p class={`text-xl font-bold py-1`}>description</p>
      <textarea cols="40" rows="5" class={`w-full sm:w-[20dvw] bg-white rounded-sm px-2 mb-2`} placeholder={item.description !='' ? item.description : "Enter new description..."} onChange={(e)=> {e.target.value != ''&&setChanged(true); e.target.value != ''? setDiscript(e.target.value) : setDiscript(item.description)}} ></textarea>
      <div class="flex gap-2 items-center">
        <p class={`text-xl font-bold py-1`}>is important?</p>
        <input type='checkbox' class="size-5"  onChange={()=>{setChanged(true); setImportant(!isImportant)}} checked={changed ? isImportant : item.important} readOnly></input>
      </div>
      <button onClick={()=>{changed && handleUpdateTask(item.id,text,descriptipn,isImportant); closeForm(false)} } class={`px-6 py-2 rounded-xl ${changed ? "hover:shadow-lg" : null} shadow-yellow-500/50 cursor-pointer font-bold transition duration-500 ${(changed) ? "bg-yellow-500" : "bg-gray-500"}`}>save</button>
    </div>
  )
}
