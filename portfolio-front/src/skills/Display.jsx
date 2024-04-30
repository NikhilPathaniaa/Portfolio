import React, { useEffect, useState } from 'react'

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
    
    <div>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                            <div className="col-span-12 space-y-2.5">
                                <div className="lg:mr-16">
                                    {data1.map(values =>(
                                    <div key={values.id}>
                                    Id: {values.id}
                                    Name: {values.name}
                                    Email: {values.email}
                                    Message: {values.message}
                                    </div>
                                    ))}

                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default Display