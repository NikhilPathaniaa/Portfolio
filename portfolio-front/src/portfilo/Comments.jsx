import ShowComment from './ShowComment'
import AddComment from './AddComment'
import React, { useEffect, useState } from 'react'

const Comments = () => {

  
  const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost/Comment')
        .then(res=>res.json())
        .then(result=>{
            setData(result.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
    },[])
  return (
    <>
    {/* <p>{time.toLocaleTimeString()}</p> */}
    {data.map(values => (
      <ShowComment
        key={values.id}
        name={values.name}
        message= {values.message}
        time={values.time}
      />
    ))}
        
        <AddComment/>
    </>
  )
}

export default Comments