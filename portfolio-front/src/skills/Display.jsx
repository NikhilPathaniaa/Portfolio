import React, { useEffect, useState } from 'react'
import ClientsCount from './ClientsCount';
import PostCreator from './PostCreator';
const Display = () => {

    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost/find')
        .then(res=>res.json())
        .then(result=>{
            setData(result.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
    },[])

  return (
    
    <>
        {isLoading  && data.length > 0 ? (
        data.map((values) => (
        <ClientsCount key={values.id}
        id={values.id}
        name={values.name}
        email={values.email}
        message={values.message}
        />                                                       
        ))
        ) : (
            <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
                <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg">
                <p>No comments yet.</p> 
                </div>
            </div>
  
        )}

        <PostCreator/>
    </>
  )
}

export default Display