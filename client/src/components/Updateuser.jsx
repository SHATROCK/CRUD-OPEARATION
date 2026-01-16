import React from 'react'
import { useState,useEffect } from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios";


function Updateuser() {
    const {id} = useParams()
    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [age,setage] = useState()
    const navigate = useNavigate()

    //  useEffect(()=>{
    //    axios.get(`http://localhost:5000/getUser/${id}`)
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err))
    //   },[])
    useEffect(() => {
  axios.get(`http://localhost:5000/getUser/${id}`)
    .then(result => {
      console.log(result.data)
      setname(result.data.name)
      setemail(result.data.email)
      setage(result.data.age)
    })
    .catch(err => console.log(err))
}, [id])


const update = (e)=>{
     e.preventDefault();
    axios.put("http://localhost:5000/Updateuser/"+id,{
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
            <h2 className='text-2xl font-semibold text-white p-2 border rounded text-center border-b-amber-200 border-l-fuchsia-500 border-t-amber-200 border-r-fuchsia-500 '>Update User</h2>
            <form action="" className='mt-5' onSubmit={update}>
                <label htmlFor="name" className='text-2xl text-amber-400 font-semibold'>Name:</label><br />
                <input type="text" placeholder='Enter Name Here' className=" w-full p-2 rounded bg-amber-50 outline-0 border-0" value={name} onChange={(e)=>setname(e.target.value)}/><br />

                <div className='mt-4'>
                    <label htmlFor="name" className='text-2xl text-amber-400 font-semibold '>Email:</label><br />
                
                <input type="text" placeholder='Enter email Here' className=" w-full p-2 rounded bg-amber-50 outline-0 border-0" value={email} onChange={(e)=>setemail(e.target.value)}/><br />
                </div>

                <div className='mt-4'>
                    <label htmlFor="name" className='text-2xl text-amber-400 font-semibold '>Age:</label><br />
                
                <input type="text" placeholder='Enter Age Here' className=" w-full p-2 rounded bg-amber-50 outline-0 border-0" value={age} onChange={(e)=>setage(e.target.value)}/><br />
                </div>

                    
                        <button className='text-2xl font-semibold text-white p-2 border rounded text-center  mt-3 w-full capitalize'>Update</button>
                    

        </form>
        </div>
    </div>
  )
}

export default Updateuser
