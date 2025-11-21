import React from 'react'

export default function AddForm({currentTitle='',currentDescription=''}) {
  return (
    <div class="relative flex-col p-4"> 
      <p class={`text-xl font-bold py-1`}>title</p>
      <input type="text" class={`w-full sm:w-[20dvw] bg-white rounded-sm px-2 mb-2`} placeholder={currentTitle !='' ? currentTitle : "Enter new title..."}></input>
      <p class={`text-xl font-bold py-1`}>description</p>
      <textarea cols="40" rows="5" class={`w-full sm:w-[20dvw] bg-white rounded-sm px-2 mb-2`} placeholder={currentDescription !='' ? currentDescription : "Enter new description..."}></textarea>
    </div>
  )
}
