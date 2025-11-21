import React from 'react'

function navBar() {
  return (
    <nav class='flex h-20 bg-sky-700 inset-x-0 inset-y-0 justify-between items-center p-6' >
        <div class="relative" name="logo">
        <img class="h-20  w-20 object-cover object-top " src='src/assets/cat.png'></img>
        </div>
        <div class='text-sky-100 text-xl font-bold text-shadow-lg cursor-pointer lg:px-10' name="logo">Meow Tasks</div>


        <div name="logo" class="text-sky-100 text-xl font-bold " >
            <button class="cursor-pointer lg:hidden" name="hamburger">☰</button>
        </div>
    </nav>
  )
}

export default navBar