import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(1);
  const[number,setNumber]=useState(false);
  const[character,setCharacter]=useState(false);
  const[password,setPassword]=useState();


  const passwordGenerator=useCallback(()=>{
    let pass=" ";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="1234567890";
    if(character)str+="!@#$%^&*()";

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
    }

    setPassword(pass);


  },[length,number,character])
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
    text-orange-500  bg-gray-700 '>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3'
        placeholder='password' readOnly />
        
      </div>
    </div>
    </>
  )
}

export default App
