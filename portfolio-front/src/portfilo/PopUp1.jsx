import React, { useRef } from 'react'
import Comments from './Comments';

const PopUp1 = ({onClose,id,title,video,languages,content,client,preview}) => {
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
            Web Developer Project {id}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                    <i
                        className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                    Project :&nbsp;
                    <span className="font-medium"> {title }</span>
                </p>
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                    <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                    Langages :&nbsp;
                    <span className="font-medium">{languages}</span>
                </p>
            </div>
           
            <div className="space-y-2">
                <p
                    className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                    <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                    Client :&nbsp; <span className="font-medium">{client}</span>
                </p>
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                    <i
                        className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                    Preview :&nbsp;
                    <span
                        className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                        <a href="https://khabarfilhaal.com/" target="_blank"
                            rel="noopener noreferrer">{preview}</a>
                    </span>
                    
                </p>
            </div>
        </div>
    
        
        <div className="pr-3">
            <video autoPlay muted loop>
            <source src={video} />
        </video>
        <br/>
        <hr/>
        <br/>
        </div>
        <p  className="dark:text-white text-2line font-normal text-[15px] sm:text-sm" dangerouslySetInnerHTML={{ __html: content }} />
        <br/>
        <hr/>
        <br/>
    </div>
        <Comments id={id}/>
    </div>

    
    <button onClick={onClose} className="close bg-close-light dark:bg-close-dark">Close</button>
</div>
  )
}

export default PopUp1