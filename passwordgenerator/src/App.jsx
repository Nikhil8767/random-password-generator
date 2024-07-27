import { useState,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const[number,setNumber]=useState(false);
  const[character,setCharacter]=useState(false);
  const[password,setPassword]=useState();


  //useref hook this hook is used to establish the realtion
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=" ";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="1234567890123457890";
    if(character)str+="!@#$%^&*()*/-+<>?{}[]";

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass);


  },[length,number,character])


  const copypassword=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
    text-orange-500  bg-gray-700 '>
      <h1 className='text-white text-center'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3'
        placeholder='password' readOnly ref={passwordRef} />
        <button onClick={copypassword}>copy </button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} value={length} 
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>length {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={number} id='numberinput'
          onChange={()=>{
            setNumber((prev)=>!prev);
          }} />
          <label htmlFor="numberinput">number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={character} id='characterinput'
          onChange={()=>{
            setCharacter((prev)=>!prev);
          }} />
          <label htmlFor="characterinput">Character</label>
        </div>
        

      </div>
    </div>
    </>
  )
}

export default App
