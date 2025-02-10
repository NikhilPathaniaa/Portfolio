import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaArrowUpRightFromSquare, FaCode, FaRegFileLines, FaRegUser } from "react-icons/fa6";

interface portfolioData {
  id: number;
  preview: string;
  title: string;
  client: string;
  video: string;
  languages: string;
  content: string;
  image: string;
  category: string;
  solution: string;
  result: string;
  challenge: string;
  designation: string;
  feedback: string;
  onClose: () => void;
}

const DataPopUp = (props: portfolioData) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div key={props.id} className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl rounded-3xl bg-white dark:bg-[#323232] p-6 md:p-8 shadow-lg">
        {/* Close Button */}
        <button onClick={props.onClose} className="absolute top-4 right-4 text-lg text-gray-700 dark:text-white hover:text-red-500">
          ✖
        </button>

        {/* Modal Content */}

        <div className="overflow-y-auto max-h-[80vh]">
          <header className="flex md:flex-row flex-col gap-4">
            <h2 className="text-[#ef4060] block md:hidden dark:hover:text-[#FA5252] text-4xl text-center font-bold">{props.title}</h2>

            <Image width={500} height={500} src={props.image} alt="portfolio image" className="w-full z-0  cursor-default transition duration-200 ease-in-out transform rounded-3xl h-auto" />
            <section className="w-full">
              <h2 className="text-[#ef4060] hidden md:block dark:hover:text-[#FA5252] text-4xl text-center font-bold">{props.title}</h2>

              {/* Project Details */}
              <div className="grid grid-cols-1 my-6 gap-4">
                <div className="space-y-2">
                  <p className="text-black dark:text-white text-[1rem] flex items-center mt-2 lg:mt-0 sm:text-lg">
                    <FaRegFileLines className="mr-2" />
                    Project :&nbsp;
                    <span className="font-medium"> {props.category}</span>
                  </p>
                  <p className="text-black dark:text-white text-[1rem] flex items-center mt-2 lg:mt-0 sm:text-lg">
                    <FaCode className="mr-2" />
                    Tools :&nbsp;
                    <span className="font-medium">{props.languages}</span>
                  </p>

                  <p className="text-black dark:text-white text-[1rem] flex items-center mt-2 lg:mt-0 sm:text-lg">
                    <FaRegUser className="mr-2" />
                    Client :&nbsp;
                    <span className="font-medium">{props.client}</span>
                  </p>
                  <p className="text-black dark:text-white text-[1rem] flex items-center mt-2 lg:mt-0 sm:text-lg">
                    <FaArrowUpRightFromSquare className="mr-2" />
                    Preview :&nbsp;
                    <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                      <a href={"https://" + props.preview} target="_blank" rel="noopener noreferrer">
                        {props.preview}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </header>

          {/* Content */}
          {/* <p className="dark:text-white text-black text-base sm:text-lg font-normal mt-4" dangerouslySetInnerHTML={{ __html: content }} /> */}

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
              <h3 className="text-xl font-semibold text-[#ef4060]">Overview</h3>
              <p
                className="text-justify text-gray-700 dark:text-gray-300 font-['Poppins']"
                dangerouslySetInnerHTML={{
                  __html: props.content.replace(/\n/g, "<br>"),
                }}
              />
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
            <div className="mt-6 space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold text-[#ef4060]">Preview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Image width={500} height={500} src={props.image} alt="Project Screenshot 1" className="w-full rounded-lg shadow-md" />
                </div>
                <div>
                  <Image width={500} height={500} src={props.image} alt="Project Screenshot 2" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#ef4060]">Video</h3>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${props.video}`}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>

            {/* Challenges */}
            <div className="mt-6 space-y-4 ">
              <h3 className="text-xl font-semibold text-[#ef4060]">Challenges Faced</h3>
              <p
                className="text-justify text-gray-700 dark:text-gray-300 font-['Poppins']"
                dangerouslySetInnerHTML={{
                  __html: props.challenge
                    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Wraps text between ** ** in <b> tags
                    .replace(/\n/g, "<br>"), // Converts new lines to <br>
                }}
              />
            </div>

            {/* Solution */}
            <div className="mt-6 space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold text-[#ef4060]">Solution</h3>
              <p
                className="text-justify text-gray-700 dark:text-gray-300 font-['Poppins']"
                dangerouslySetInnerHTML={{
                  __html: props.solution
                    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Wraps text between ** ** in <b> tags
                    .replace(/\n/g, "<br>"), // Converts new lines to <br>
                }}
              />
            </div>

            {/* Results/Impact */}
            <div className="mt-6 space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold text-[#ef4060]">Results & Impact</h3>
              <p
                className="text-justify text-gray-700 dark:text-gray-300 font-['Poppins']"
                dangerouslySetInnerHTML={{
                  __html: props.result
                    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Wraps text between ** ** in <b> tags
                    .replace(/\n/g, "<br>"), // Converts new lines to <br>
                }}
              />
            </div>

            {/* Client Feedback */}
            <div className="mt-6 space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold text-[#ef4060]">Client Feedback</h3>
              <blockquote className="italic text-gray-700 dark:text-gray-300">
                <p>{props.feedback}</p>
                <footer className="mt-4 text-right">
                  - <b>{props.client}</b>, {props.designation}
                </footer>
              </blockquote>
            </div>

            {/* Contact CTA */}
            <div className="mt-6 text-center">
              <Link href="/contact" className="inline-block px-6 py-2 rounded-md bg-[#ef4060] text-white hover:bg-[#FF6B81] transition-colors">
                Contact Me for Similar Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPopUp;
