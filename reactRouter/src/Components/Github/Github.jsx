import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
     const [data , setData] = useState(0);
    useEffect(()=>{
        fetch('https://api.github.com/users/adityasharma1')
        .then(response =>response.json())
        .then(data=>
       { console.log(data);
        setData(data)})
    },[])
  return (
   <>
    <div className='text-center  bg-gray-500 text-white text-3xl'>Github followers : {data.followers}
    <div>
        GitHub Account : {data.login}
    </div>
    <img src="https://avatars.githubusercontent.com/u/24360185?v=4" alt="" />
    </div>
    </>
  )
}

export default Github