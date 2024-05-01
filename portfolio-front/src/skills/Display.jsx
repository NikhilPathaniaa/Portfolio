import React, { useEffect, useState } from 'react'
import ClientsCount from './ClientsCount';
const Display = () => {

    const [data1,setData] = useState([]);

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
        {data1.map(values =>(
        <ClientsCount key={values.id}
        id={values.id}
        name={values.name}
        email={values.email}
        message={values.message}
        />                                                       
        ))}
    </>
  )
}

export default Display