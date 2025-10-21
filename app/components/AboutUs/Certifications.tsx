import DownMotion from "../MotionWrapper/DownMotion";
import Image from "next/image";

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8">
        <DownMotion>
          <div className="flex flex-col mb-6">
            <h3 className="text-midnightblue text-4xl lg:text-5xl font-semibold mb-10">
              Our Certificate Courses
            </h3>
            <p className="text-justify text-gunmetalgray">
              At <b>Googolgen Education Foundation</b>, students can earn both our
              <b> in-house certificates</b> and certificates from our recognized
              franchise partners —
              <b> Jawaharlal Nehru Youth Computer & Technical Skill Development (JNYCTSD)</b>
              and the
              <b> National Certification Board of Skill Development (NCBSD)</b>.
              <br />
              These collaborations ensure that learners receive not only practical
              computer education but also certifications that are nationally
              acknowledged and valued.
            </p>
          </div>
        </DownMotion>

        <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Googolgen Card */}
          <DownMotion>
            <a
              href="#courses"
              className=" flex flex-col h-full items-center justify-between p-8 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <Image
                className="mx-auto mb-4"
                src="/assets/logo/logo.png"
                alt="Googolgen Logo"
                width={70}
                height={70}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Googolgen Education Foundation
                </h3>
                <p>
                  Our own certified programs designed for hands-on learning and
                  future-ready digital skills.
                </p>
              </div>
            </a>
          </DownMotion>

          {/* JNYCTSD Card */}
          <DownMotion>
            <a
              href="https://jnyctsd.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-center justify-around p-8 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <Image
                className="mx-auto mb-4"
                src="/assets/carousel/jnystd_logo.png"
                alt="JNYCTSD Logo"
                width={70}
                height={70}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">JNYCTSD</h3>
                <p>
                  A national initiative for computer and technical skill
                  development, recognized across India.
                </p>
              </div>
            </a>
          </DownMotion>

          {/* NCBSD Card */}
          <DownMotion>
            <a
              href="https://www.ncbsdskillindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full items-center justify-around p-8 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <Image
                className="mx-auto mb-4"
                src="/assets/carousel/ncbsd.png"
                alt="NCBSD Logo"
                width={70}
                height={70}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">NCBSD</h3>
                <p>
                  National Certification Board providing skill-based certification
                  for technical and vocational courses.
                </p>
              </div>
            </a>
          </DownMotion>
        </div>
      </div>
    </section>
  )
}

export default Certifications