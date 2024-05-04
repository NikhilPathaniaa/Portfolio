import React, { useRef } from 'react'
import Comments from './Comments';



const PopUp1 = ({onClose,additionalProp,additionalProp1}) => {
    const modelRef = useRef();

    const closeModel = (e) => {
        if(modelRef.current === e.target)
        {
            onClose();
        }
    }
  return (
    <div ref={modelRef} onClick={closeModel} id="portfiloOne" className="modal-container model popup">
    <div className="dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]">
    <div className="pr-3 pb-2">
        <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
            Web Developer Project {additionalProp1}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                    <i
                        className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                    Project :&nbsp;
                    <span className="font-medium"> {additionalProp }</span>
                </p>
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                    <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                    Langages :&nbsp;
                    <span className="font-medium">Wordpress</span>
                </p>
            </div>
           
            <div className="space-y-2">
                <p
                    className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                    <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                    Client :&nbsp; <span className="font-medium">Sandeep Singh</span>
                </p>
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                    <i
                        className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                    Preview :&nbsp;
                    <span
                        className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                        <a href="https://khabarfilhaal.com/" target="_blank"
                            rel="noopener noreferrer">www.khabarfilhaal.com</a>
                    </span>
                    
                </p>
            </div>
        </div>
    
        <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Mollitia placeat magnam possimus iusto blanditiis pariatur
            labore explicabo quo repellat hic dolorum numquam
            asperiores, voluptatum fugiat reiciendis aspernatur, non,
            odio aperiam voluptas ex tempora vitae. Dolor, consequatur
            quidem! Quas magni distinctio dolorum dolore natus, vel
            numquam accusamus. Nostrum eligendi recusandae qui tempore
            deserunt!
        </p>
        <div className="pr-3">
            <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                src="images/work_images/1.jpg" alt="portfolio image" />
        </div>
    </div>
        <Comments id={additionalProp1}/>
    </div>

    
    <button onClick={onClose} className="close bg-close-light dark:bg-close-dark">Close</button>
</div>
  )
}

export default PopUp1