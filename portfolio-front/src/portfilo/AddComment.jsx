import React, { useState } from 'react'

const AddComment = ({ id, onUpdateComments }) => {

  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const baseUrl = 'images/work_images/small/';
  const image = `${baseUrl}${randomNumber}.jpg`;

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit  = async (e) => {
        e.preventDefault()
        const data = {name,message,image}
        console.log(data);
        try {
            const response = await fetch(`http://localhost/add/${id}`,{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to add comment');
          }
          // Notify the parent component to update comments
          onUpdateComments();
          // Clear input fields
          setName('');
          setMessage('');

          setSubmitStatus('success');
          // Clear the success message after a certain time
          setTimeout(() => setSubmitStatus(null), 3000);

        } catch (error) {
          console.error('Error adding comment:', error);
          // Set submit status to error
          setSubmitStatus('error');
        }    

    }

  return (
    <div className="pt-3">
                        <div className="pr-3 pb-4">
                            <form className="w-full" onSubmit={handleSubmit}>

                                {submitStatus === 'success' && <span style={{ color: 'green' }}>Comment submitted successfully!</span>}
                                {submitStatus === 'error' && <span style={{ color: 'red' }}>Failed to submit comment. Please try again.</span>}

                                <label className="block mb-2">
                                <span className="dark:text-white text-[25px] font-medium">Name</span>
                                <input required value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder="Your name" className="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray"/>
                                
                                </label>
                                <label className="block mb-2">
                                    <span className="dark:text-white text-[25px] font-medium">Leave a Reply</span>
                                    <textarea  required value={message}  onChange={(e)=>setMessage(e.target.value)}
                                        className="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray"
                                        rows="3"></textarea>
                                </label>
                                <button className="comment-btn">Comment</button>
                                
                            </form>
                        </div>
                    </div>
  )
}

export default AddComment