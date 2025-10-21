import Image from "next/image";
import DownMotion from "../MotionWrapper/DownMotion";

const index = () => {
  return (
    <section id="about">
      <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
          <DownMotion>
          <div className="flex flex-col sm:flex mb-6">
              <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-10">About Googolgen.</h3>
              <p className="text-justify text-gunmetalgray">
                At <b>Googolgen Education Foundation</b>, we aim to make every learner future-ready by blending traditional computer education with modern technologies. Following the vision of NEP 2020, we introduce students to the world of <b>coding, AI, and digital innovation</b> through engaging, practical, and hands-on learning experiences.<br/>
              As a registered organization and franchise partner of <b>Jawaharlal Nehru Youth Computer & Technical Skill Development(JNYCTSD)</b> and the <b>National Certification Board of Skill Development(NCBSD)</b>, Googolgen ensures every student receives <b>recognized certification</b> and industry-relevant training. Our mission is to bring advanced computer education—including programming (C, C++, Java, Python), web and app development, AI, and game development—to every aspiring learner in our region.  
              </p>
          </div>
          </DownMotion>
          <div className="w-full grid md:grid-cols-3 gap-8 text-center mb-6">
          
          <DownMotion>
            <div className="bg-[#32ed73] h-60 px-6 py-10 rounded-lg justify-self-start">
              <Image className="mx-auto mb-4" src="/assets/icons/light-bulb.png" alt="light bulb" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
              <p>Students learn by doing—exploring coding, design, and development through interactive, real-world projects.</p>
            </div>
          </DownMotion>

          <DownMotion>
            <div className="bg-[#32ceed] h-60 px-6 py-10 rounded-lg justify-self-center">
              <Image className="mx-auto mb-4" src="/assets/icons/robot.png" alt="light bulb" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Modern Technologies</h3>
              <p>From AI and programming to web, app, and game development, we prepare students for the skills of tomorrow.</p>
            </div>
          </DownMotion>

          <DownMotion>
            <div className="bg-[#edea55] h-60 px-6 py-10 rounded-lg justify-self-end">
              <Image className="mx-auto mb-4" src="/assets/icons/training.png" alt="light bulb" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Aligned with NEP 2020</h3>
              <p>We follow the new education vision of creativity, innovation, and digital empowerment—making learning future-ready.</p>
            </div>
          </DownMotion>
        </div>
      </div>
    </section>
  )
}

export default index