import React, { useEffect, useState } from 'react'
import Portfolio from './Portfolio'

const FilterPortfolio = () => {
    
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost/find/Post')
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
    <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]" >
        <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12 ">
                <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>   
                <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">       
                
                            {/* portfolio items one start */}

                            {data.map(values => (
                            <Portfolio
                            key={values.id}
                            id={values.id}
                            title={values.title}
                            image={values.image}
                            />
                            ))}
                </div>
            </div>
        </div>
    </section>

    </>

        

  )
}

export default FilterPortfolio