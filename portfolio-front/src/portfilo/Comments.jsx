import ShowComment from './ShowComment'
import AddComment from './AddComment'
import React, { useEffect, useState } from 'react'

const Comments = (props) => {

  const [data,setData] = useState([]);

    useEffect(()=>{
      const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost/post/${props.id}/comments?page=${0}&size=5`)
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
    },[props])

    const updateComments = async() => {
      try {
        const response = await fetch(`http://localhost/post/${props.id}/comments?page=${0}&size=5`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error updating comments:', error);
      }
    };  
  return (
    <>
    {/* <p>{time.toLocaleTimeString()}</p> */}
    {data.length === 0 && 
      <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
        <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg">        
          <div className="pl-5"> 
            <div className="flex justify-center items-center">
              <h3 className="dark:text-white text-[22px] font-medium">No comments available</h3>
            </div>                 
          </div>
        </div>
      </div>
    }
    {data.map((values) => (
          <ShowComment
            key={values.id}
            name={values.name}
            message={values.message}
            time={values.time}
            image={values.image}
          />
        ))}

        
        <AddComment id={props.id} onUpdateComments={updateComments} />
    </>
  )
}

export default Comments