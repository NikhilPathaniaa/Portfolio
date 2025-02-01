import Image from "next/image";
import { useEffect } from "react";

interface portfolioData {
  id: number;
  preview: string;
  title: string;
  client: string;
  video: string;
  languages: string;
  content: string;
  image: string;
  onClose: () => void;
}

const DataPopUp = ({ onClose, image, id, title, video, languages, content, client, preview }: portfolioData) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl rounded-lg bg-white dark:bg-[#323232] p-6 md:p-8 shadow-lg">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-lg text-gray-700 dark:text-white hover:text-red-500">
          ✖
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[80vh]">
          <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">Web Developer Project {id}</h2>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-6 gap-4">
            <div className="space-y-2">
              <p className="dark:text-white flex items-center text-lg">
                <i className="fa-regular fa-file-lines hidden sm:block mr-4 text-xl"></i>
                Project :&nbsp;
                <span className="font-medium"> {title}</span>
              </p>
              <p className="dark:text-white flex items-center text-lg">
                <i className="fa-solid fa-code hidden sm:block mr-2 text-lg"></i>
                Languages :&nbsp;
                <span className="font-medium">{languages}</span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-lg">
                <i className="fa-regular fa-user hidden sm:block mr-2 text-lg"></i>
                Client :&nbsp;
                <span className="font-medium">{client}</span>
              </p>
              <p className="dark:text-white flex items-center text-lg">
                <i className="fa-solid fa-arrow-up-right-from-square hidden sm:block mr-2 text-lg"></i>
                Preview :&nbsp;
                <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                  <a href={preview} target="_blank" rel="noopener noreferrer">
                    {preview}
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Video Section (Full Width Inside Modal) */}
          <div className="w-full">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${video}`} // YouTube Thumbnail
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>

          {/* Content */}
          <p className="dark:text-white text-base sm:text-lg font-normal mt-4" dangerouslySetInnerHTML={{ __html: content }} />

          <hr className="my-6" />

          {/* Close Button */}
          {/* <div className="flex justify-center">
            <button onClick={onClose} className="px-6 py-3 text-lg font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600">
              Close
            </button>
          </div> */}

          {/*  */}

          {/* Body Section */}
          <div className="p-6">
            {/* Project Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#ef4060]">Project Overview</h3>
              <p className="text-gray-700 dark:text-gray-300">{content}</p>
            </div>

            {/* Technologies Used */}
            {/* <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-[#ef4060]">Technologies Used</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div> */}

            {/* Key Features */}
            {/* <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-[#ef4060]">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div> */}

            {/* Project Preview */}
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#ef4060]">Project Preview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Image src={image} alt="Project Screenshot 1" className="w-full rounded-lg shadow-md" />
                </div>
                <div>
                  <Image src={image} alt="Project Screenshot 2" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#ef4060]">Project Walkthrough</h3>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video}`}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>

            {/* Challenges */}
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#ef4060]">Challenges Faced</h3>
              <p className="text-gray-700 dark:text-gray-300">{content}</p>
            </div>

            {/* Results/Impact */}
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#ef4060]">Results & Impact</h3>
              <p className="text-gray-700 dark:text-gray-300">{content}</p>
            </div>

            {/* Client Feedback */}
            <div className="mt-6 space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold text-[#ef4060]">Client Feedback</h3>
              <blockquote className="italic text-gray-700 dark:text-gray-300">
                <p>{content}</p>
                <footer className="mt-4 text-right">
                  - {content}, {content}
                </footer>
              </blockquote>
            </div>

            {/* Contact CTA */}
            <div className="mt-6 text-center">
              <a href="contact-link" className="inline-block px-6 py-2 rounded-md bg-[#ef4060] text-white hover:bg-[#FF6B81] transition-colors">
                Contact Me for Similar Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPopUp;
