import Image from 'next/image';
import RightMotion from '../MotionWrapper/RightMotion';
import LeftMotion from '../MotionWrapper/LeftMotion';

const OurVisionPage = () => {
  return (
    <div className="min-h-screen bg-white mx-auto max-w-7xl py-12 px-4 lg:px-8">
      
      <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5">Our Vision</h3>
          
      <p className="text-base text-gray-700 mb-4 text-justify">
        At InspireIQ Lab, our mission is simple: <strong>help children become thoughtful creators of the future</strong>.
      </p>
      <p className="text-base text-gray-700 mb-4 text-justify">
        We imagine a world where every child, regardless of background, can experiment with robotics and AI, where learning is joyful, and innovation grows from simplicity and sustainability.
      </p>
      <p className="text-base text-gray-700 text-justify">
        We’re not here to rush childhood — we’re here to <strong>enrich it</strong> with curiosity, creativity, and compassion.
      </p>
          <RightMotion>
            <section className='grid mt-6 md:grid-cols-2 w-full border border-black rounded-3xl mb-12'>
              <div className='p-10'>
                <h1 className="text-4xl font-semibold mb-4">The Big Picture</h1>
                <p className="text-base text-gray-700 mb-4">
                We envision a future where children don’t just consume technology—they build it.<br/><br/>
                A world where classrooms extend beyond walls, and learning is driven by curiosity, experimentation, and purposeful play.<br/><br/>
                At InspireIQ Lab, we’re creating a system that empowers kids to become confident explorers of science, AI, robotics, and innovation.<br/><br/>
                Not someday—<b>today</b>.
                </p>
              </div>
              <div className='p-10 flex items-center justify-center'>
                <Image 
                  src="/assets/gallery/Coding-computer/img1.jpg" 
                  alt="kids are playing with legos"
                  className='object-cover w-full h-full rounded-2xl'
                  width={500} height={0} />
              </div>
            </section>
          </RightMotion>

          <LeftMotion>
            <section className='grid mt-6 md:grid-cols-2 w-full border border-black rounded-3xl mb-12'>
              <div className='p-10 flex items-center justify-center'>
                <Image 
                  src="/assets/gallery/3D-Pen-fun/img2.jpg" 
                  alt="students working on projects together"
                  className='object-cover w-full h-full rounded-2xl'
                  width={500} height={0} />
              </div>
              <div className='p-10'>
                <h1 className="text-4xl font-semibold mb-4">Long-Term Impact</h1>
                <p className="text-base text-gray-700 mb-4">
                Our aim isn’t short-term learning—it’s long-term transformation.<br/><br/>
                We want kids to grow up with the mindset of creators, not just consumers. With the confidence to solve problems, the tools to build what they imagine, and the vision to see how they can improve the world around them.<br/><br/>
                This isn’t just about STEM. It’s about developing thinkers, doers, and dreamers.
                </p>
              </div>
            </section>
          </LeftMotion>
    
          <RightMotion>
            <section className='grid mt-6 md:grid-cols-2 w-full border border-black rounded-3xl'>
              <div className='p-10'>
                <h1 className="text-4xl font-semibold mb-4">Community & Culture Building</h1>
                <p className="text-base text-gray-700 mb-4">
                We’re more than a lab—we’re a movement.<br/><br/>
  A place where parents, educators, and kids come together to co-create a culture of learning that’s playful, inclusive, and future-facing.<br/>
  We believe in nurturing not only smart minds but kind hearts and resilient spirits.<br/><br/>
  Through community workshops, open lab days, and interactive events—we’re building a culture that celebrates creativity and lifelong curiosity.
                </p>
              </div>
              <div className='p-10 flex items-center justify-center'>
                <Image 
                  src="/assets/gallery/Robotics_Age-7 to 11/img3.webp" 
                  alt="kids are building cars together"
                  className='object-cover w-full h-full rounded-2xl'
                  width={500} height={0} />
              </div>
            </section>
          </RightMotion>
    
        </div>

  )
}

export default OurVisionPage