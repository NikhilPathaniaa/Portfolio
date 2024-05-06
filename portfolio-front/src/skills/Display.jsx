import React, { useEffect, useState } from 'react'
import ClientsCount from './ClientsCount';
import PostCreator from './PostCreator';
const Display = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost/find')
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
        {data.map((values) => (
        <ClientsCount key={values.id}
        id={values.id}
        name={values.name}
        email={values.email}
        message={values.message}
        />                                                       
        ))}

        <PostCreator/>
    </>
  )
}

export default Display