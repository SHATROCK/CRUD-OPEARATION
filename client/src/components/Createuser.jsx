import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Createuser() {

const [name,setname] = useState()
const [email,setemail] = useState()
const [age,setage] = useState()
const navigate = useNavigate()

const submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:5000/createUser",{
       name,email,age
    })
    .then(result =>{ 
        console.log(result)
         navigate('/')
    })
    .catch(err => console.log(err))
}

  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='bg-gray-600 p-8 rounded w-80  border-6 border-emerald-400'>
            <h2 className='text-2xl font-semibold text-white p-2 border rounded text-center border-b-amber-200 border-l-fuchsia-500 border-t-amber-200 border-r-fuchsia-500 '>Add New Users</h2>
            <form action="" onSubmit={submit} className='mt-5'>
                <label htmlFor="name" className='text-2xl text-amber-400 font-semibold'>Name:</label><br />
                <input type="text" placeholder='Enter Name Here' className=" w-full p-2 rounded bg-amber-50 outline-0 border-0" onChange={(e)=>setname(e.target.value)} /><br />

                <div className='mt-4'>
                    <label htmlFor="name" className='text-2xl text-amber-400 font-semibold '>Email:</label><br />
                
                <input type="text" placeholder='Enter email Here' className=" w-full p-2 rounded bg-amber-50 outline-0 border-0"  onChange={(e)=>setemail(e.target.value)}/><br />
                </div>

                <div className='mt-4'>
                    <label htmlFor="name" className='text-2xl text-amber-400 font-semibold '>Age:</label><br />
                
                <input type="text" placeholder='Enter Age Here' className=" w-full p-2 rounded bg-amber-50 outline-0 border-0"  onChange={(e)=>setage(e.target.value)}/><br />
                </div>

                    
                        <button className='text-2xl font-semibold text-white p-2 border rounded text-center  mt-3 w-full capitalize'>submit</button>
                    

        </form>
        </div>
    </div>
  )
}

export default Createuser
