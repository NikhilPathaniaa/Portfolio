import ShowComment from './ShowComment'
import AddComment from './AddComment'
import React, { useEffect, useState } from 'react'

const Comments = (props) => {

  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost/post/${props.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      }
        catch (error) {
            console.error('Error fetching data:', error);
        }
      }
      fetchComments()
    },[props])

  return (
    <>
    {/* <p>{time.toLocaleTimeString()}</p> */}

    {isLoading  && data.length > 0 ? (
        data.map((values) => (
          <ShowComment
            key={values.id}
            name={values.name}
            message={values.message}
            time={values.time}
          />
        ))
      ) : (
        <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
          <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg">
            <p>No comments yet.</p> 
          </div>
        </div>
        
      )}

        
        <AddComment id={props.id}/>
    </>
  )
}

export default Comments