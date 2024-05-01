import ShowComment from './ShowComment'
import AddComment from './AddComment'
import React, { useEffect, useReducer, useState } from 'react'

const Comments = (props) => {

  // const [reducerValue, forceUpdate] = useReducer(x => x+1, 0)
  const [data,setData] = useState([]);

    useEffect(()=>{
      const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost/post/${props.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setData(data);
      }
        catch (error) {
            console.error('Error fetching data:', error);
        }
      }
      fetchComments()
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
        
        <AddComment id={props.id}/>
    </>
  )
}

export default Comments