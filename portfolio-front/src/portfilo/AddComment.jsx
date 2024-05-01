import React, { useState } from 'react'

const AddComment = (props) => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit  = (e) => {
        e.preventDefault()
        const data = {name,message}
        console.log(data);
        
        fetch(`http://localhost/add/${props.id}`,{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(data)
        })
            .then(console.log("new data added"))
            .catch((error)=> console.log(error))   
    }

  return (
    <div className="pt-3">
                        <div className="pr-3 pb-4">
                            <form className="w-full">
                                <label className="block mb-2">
                                <span className="dark:text-white text-[25px] font-medium">Name</span>
                                <input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder="Your name" className="w-full dark:bg-gray-800 bg-gray-100"/>
                                
                                </label>
                                <label className="block mb-2">
                                    <span className="dark:text-white text-[25px] font-medium">Leave a Reply</span>
                                    <textarea value={message}  onChange={(e)=>setMessage(e.target.value)}
                                        className="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray"
                                        rows="3"></textarea>
                                </label>
                                <button onClick= {handleSubmit} className="comment-btn">Comment</button>
                            </form>
                        </div>
                    </div>
  )
}

export default AddComment