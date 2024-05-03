// import React, { useState } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
import { createContext, useEffect, useState } from "react";
import VideoStoring from "./VideoStoring";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

const PostCreator = () => {
    const [publicId, setPublicId] = useState("");
    // Replace with your own cloud name
    const [cloudName] = useState("dtesk39pq");
    // Replace with your own upload preset
    const [uploadPreset] = useState("portfolioImages");
  
    const [uwConfig] = useState({
        cloudName,
        uploadPreset
        });

    const cld = new Cloudinary({
        cloud: {
          cloudName
        }
      });

      const myImage = cld.image(publicId);
      const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);
  
  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.url);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };
  let image = publicId
  return (
    <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
    <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
        Post Creation </h2>
    <div
        className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
    

        <h3 className="text-4xl">
            <span className="text-gray-lite dark:text-[#A6A6A6]">I'm always open to discussing
                product</span>
            <br />
            <span className="font-semibold dark:text-white">design work or partnerships.</span>
        </h3>

        <h3>Upload Image</h3>
            {myImage}
            <CloudinaryScriptContext.Provider value={{ loaded }}>
                <button
                    id="upload_widget"
                    className="cloudinary-button"
                    onClick={initializeCloudinaryWidget}
                >
                    Upload
                </button>
            </CloudinaryScriptContext.Provider> 
            
            <VideoStoring image={image} uwConfig={uwConfig} setPublicId={setPublicId}/>
            
        
    </div>
</div>
  )
}

export default PostCreator