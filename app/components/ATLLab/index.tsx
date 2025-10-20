import DownMotion from "../MotionWrapper/DownMotion";
import Image from "next/image";

const ATLLabSection = () => {
  return (
    <section id="atl-lab">
      <div className="mb-6 mx-auto max-w-7xl py-8 px-4 lg:px-8">
        <DownMotion>
          <div className="flex flex-col sm:flex mb-6">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5">
              Atal Tinkering Lab (ATL)
            </h3>
            <p className="text-justify text-gunmetalgray">
              Atal Tinkering Lab is a visionary initiative under the <b>Atal Innovation Mission</b> by the Government of India, aiming to foster <b>creativity, scientific thinking, innovation, and entrepreneurship</b> among young students.
              ATL empowers schools with <b>cutting-edge tools and technology</b>—including 3D printers, robotics kits, IoT modules, and more—so that every child can turn their ideas into reality while learning 21<sup>st</sup>-century skills hands-on.
            </p>
          </div>
        </DownMotion>

        <div className="w-full grid md:grid-cols-3 gap-8 text-center mb-10">
          <DownMotion>
            <div className="bg-[#fbbf24] h-60 px-6 py-10 rounded-lg justify-self-start">
              <Image className="mx-auto mb-4" src="/assets/icons/light-bulb.png" alt="Innovation" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Innovation Culture</h3>
              <p>Encouraging critical thinking, problem-solving, and ideation from a young age.</p>
            </div>
          </DownMotion>

          <DownMotion>
            <div className="bg-[#34d399] h-60 px-6 py-10 rounded-lg justify-self-center">
              <Image className="mx-auto mb-4" src="/assets/icons/robot.png" alt="Tools and Tech" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Tech-Powered Labs</h3>
              <p>Access to 3D printers, robotics kits, sensors, IoT tools, and more.</p>
            </div>
          </DownMotion>

          <DownMotion>
            <div className="bg-[#60a5fa] h-60 px-6 py-10 rounded-lg justify-self-end">
              <Image className="mx-auto mb-4" src="/assets/icons/training.png" alt="Training & Support" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
              <p>ATL setup, training, and mentoring powered by experienced professionals.</p>
            </div>
          </DownMotion>
        </div>

        <DownMotion>
          <div className="grid md:grid-cols-2 gap-6 items-center mt-12">
            <div>
              <h4 className="text-3xl font-semibold text-midnightblue mb-4">Empowering the Next Generation</h4>
              <p className="text-gunmetalgray text-justify">
                ATL Labs aim to inspire millions of young innovators across India by making <b>STEM education engaging, practical, and future-ready</b>. 
                Schools under this mission become innovation hubs where curiosity meets execution. Whether it&apos;s a rural school or an urban institution, ATL brings a uniform opportunity to innovate.
              </p>
            </div>
            {/* <div className="rounded-lg overflow-hidden shadow-md"> */}
              {/* <Image src="/assets/images/atl-lab.jpg" alt="ATL Lab" width={600} height={400} className="w-full h-auto object-cover"/> */}
              {/* <iframe width="600" height="360" src="https://www.youtube.com/embed/6DUUyzNDiak?si=XZyha_bJOgyAC4V9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}

            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-md">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/6DUUyzNDiak?si=XZyha_bJOgyAC4V9" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </DownMotion>
      </div>
    </section>

  )
}

export default ATLLabSection