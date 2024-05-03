import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

const VideoStoring = ({ uwConfig, setPublicId, image }) => {

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
  let video = publicId

  return (
    <>
        <h3>Upload Video</h3>
            <CloudinaryScriptContext.Provider value={{ loaded }}>
                <button
                    id="upload_widget"
                    className="cloudinary-button"
                    onClick={initializeCloudinaryWidget}
                >
                    Upload
                </button>
            </CloudinaryScriptContext.Provider> 
            {myImage}
            <CloudinaryUploadWidget
            image={image}
            video={video}/>
    </>
  )
}

export default VideoStoring