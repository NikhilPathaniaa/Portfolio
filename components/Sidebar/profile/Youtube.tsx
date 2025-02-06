import { FaYoutube } from "react-icons/fa6";

const Youtube = () => {
  return (
    <a href="https://youtube.com/@freelancenikhil?si=SH_QRcbD4xr3mvzE" target="_blank" rel="noopener noreferrer">
      <span className="bg-white dark:bg-black  shadow-md flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white text-[#fa5252]">
        <FaYoutube />
      </span>
    </a>
  );
};

export default Youtube;
