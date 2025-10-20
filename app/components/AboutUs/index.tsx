import Image from "next/image";
import DownMotion from "../MotionWrapper/DownMotion";

const index = () => {
  return (
    <section id="about">
      <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
          <DownMotion>
          <div className="flex flex-col sm:flex mb-6">
              <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5">About Googolgen.</h3>
              <p className="text-justify text-gunmetalgray">
                At Googolgen Education Foundation, we follow the vision of NEP 2020 by introducing science, technology, and innovation to young minds through <b>play-based, hands-on learning</b>. 
                Our programs are designed by experts and inspired by global best practices—including <b>inputs from IIT and NIT professors</b>—making sure your child builds a strong foundation in <b>STEM</b>(Science Technology Engineering and Mathematics), <b>Robotics</b>, and <b>AI</b>(Artificial Intelligence).
              </p>
          </div>
          </DownMotion>
          <div className="w-full grid md:grid-cols-3 gap-8 text-center mb-6">
          
          <DownMotion>
            <div className="bg-[#32ed73] h-60 px-6 py-10 rounded-lg justify-self-start">

              <Image className="mx-auto mb-4" src="/assets/icons/light-bulb.png" alt="light bulb" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Play-Based Learning</h3>
              <p>Kids explore STEM by tinkering, building, and experimenting hands-on.</p>
            </div>
          </DownMotion>

          <DownMotion>
            <div className="bg-[#32ceed] h-60 px-6 py-10 rounded-lg justify-self-center">
              <Image className="mx-auto mb-4" src="/assets/icons/robot.png" alt="light bulb" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">AI & Robotics</h3>
              <p>From age 3 to 18, every child gets a taste of the future—today.</p>
            </div>
          </DownMotion>

          <DownMotion>
            <div className="bg-[#edea55] h-60 px-6 py-10 rounded-lg justify-self-end">
              <Image className="mx-auto mb-4" src="/assets/icons/training.png" alt="light bulb" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Aligned with NEP 2020</h3>
              <p>A learning system, not a course—designed around the new education vision.</p>
            </div>
          </DownMotion>
        </div>
      </div>
    </section>

  )
}

export default index