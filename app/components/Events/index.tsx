import Image from "next/image";
import DownMotion from "../MotionWrapper/DownMotion";

const index = () => {
  return (
    <section id="events">
      <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
        <DownMotion>
          <div className="flex flex-col sm:flex mb-6">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5">Previous Events</h3>

            {/* <!-- Past Event Card Container --> */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full p-6 md:p-10 border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">

                <div className="lg:w-1/2 w-full">
                  <span className="inline-block bg-gray-400 text-white text-xs font-semibold px-4 py-1 rounded-full mb-2 uppercase tracking-wide">
                    Past Event
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#363636] mb-2 leading-tight">
                    ONLINE CAREER GUIDE SESSION
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#505050] mb-6">
                    Cyber Security and Ethical Hacking
                  </h2>

                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    This event, conducted on <span className="font-bold">Sunday, August 03, 2025</span>, was a career guide session for school students interested in Cyber Security and Ethical Hacking. It featured <b>Air Commodore Niranjan Kumar Parhi</b> (Retired) as a guest speaker.
                  </p>

                  <div className="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700 p-4 rounded-lg flex items-center space-x-2 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-2 4h4m-2 4h2m-2 4h2m-2-4v2m0 0a2 2 0 11-4 0m4 0a2 2 0 100-4m-4 0a2 2 0 11-4 0" />
                    </svg>
                    <p className="font-medium text-lg">Event for School Students (class 6 to 12)</p>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    className=" top-0 left-0 w-full h-[348px]"
                    width="560"
                    // height="315" 
                    src="https://www.youtube.com/embed/Hb2flX3S7FE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* <!-- Who Attended Column --> */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-yellow-400 inline-block">WHO ATTENDED?</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2 text-xl">&bull;</span>
                      <span>Students from classes 6 to 12</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2 text-xl">&bull;</span>
                      <span>Individuals curious about hacking, coding, or cyber safety</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2 text-xl">&bull;</span>
                      <span>Those with an interest in technology, no prior tech knowledge needed</span>
                    </li>
                  </ul>
                </div>

                {/* <!-- Event Highlights Column --> */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-yellow-400 inline-block">EVENT HIGHLIGHTS</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2 text-xl">&bull;</span>
                      <span>Introduced students to real-world applications of ethical hacking for good.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2 text-xl">&bull;</span>
                      <span>Discussed the high demand for cybersecurity professionals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2 text-xl">&bull;</span>
                      <span>Explored career options in India and globally.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </DownMotion>
      </div>
    </section>

  )
}

export default index