import React,{useEffect, useState} from 'react'


function index() {
  const [message,setMessage] = useState("LOading");
  useEffect(()=>{
    fetch("http://localhost:8080/api/home")
    .then(res=>res.json())
    .then(data=>{
      setMessage(data.message)
    })
  },[])
  return (
    <div>
      <h1>Hello new connection made</h1>
      {message}
    </div>
  )
}

export default index