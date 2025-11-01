'use client';
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import DownMotion from "@/app/components/MotionWrapper/DownMotion";
import type { Course } from "./coursesData";
import { courseDetailsData } from "./coursesData";

// ==================================================================
// 1. MODAL COMPONENT
// ==================================================================
// This component displays the selected course's details.
const SyllabusModal = ({ course, onClose }: {course: Course, onClose: MouseEventHandler}) => {
  if (!course) return null;

  return (
    // Backdrop
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-6 lg:p-10"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl font-light text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-midnightblue text-3xl lg:text-4xl font-semibold mb-4">
          {course.title}
        </h2>
        <p className="text-gunmetalgray text-lg mb-6">
          {course.goal}
        </p>

        {/* Course Details (Duration, Target, etc.) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-500 uppercase">Duration</h4>
            <p className="text-midnightblue text-lg font-medium">{course.duration}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-500 uppercase">Target Group</h4>
            <p className="text-midnightblue text-lg font-medium">{course.targetGroup}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-500 uppercase">Certificate</h4>
            <p className="text-midnightblue text-lg font-medium">{course.certificate}</p>
          </div>
        </div>

        {/* Modules Section */}
        <h3 className="text-midnightblue text-2xl font-semibold mb-5 border-b pb-2">
          Course Syllabus
        </h3>
        <div className="space-y-6">
          {course.modules.map((module, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="text-xl font-semibold text-midnightblue mb-3">
                {module.title}
                {module.duration && (
                  <span className="text-sm font-normal text-gunmetalgray ml-2">({module.duration})</span>
                )}
              </h4>
              
              {module.topics && module.topics.length > 0 && (
                <div className="mb-3">
                  <h5 className="font-semibold text-gray-700 mb-2">Topics Covered:</h5>
                  <ul className="list-disc list-inside text-gunmetalgray space-y-1">
                    {module.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}

              {module.practicalWork && module.practicalWork.length > 0 && (
                <div className="mb-3">
                  <h5 className="font-semibold text-gray-700 mb-2">Practical Work:</h5>
                  <ul className="list-disc list-inside text-gunmetalgray space-y-1">
                    {module.practicalWork.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}

              {module.miniProject && (
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Mini Project:</h5>
                  <p className="text-gunmetalgray">{module.miniProject}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};


// ==================================================================
// 2. MAIN PAGE COMPONENT
// ==================================================================
const CoursesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <section id="courses">
        <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
          
          {/* --- Page Header --- */}
          <DownMotion>
            <div className="flex flex-col sm:flex mb-12 text-center">
              <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-6">
                Explore Our Programs
              </h3>
              <p className="text-lg text-gunmetalgray max-w-3xl mx-auto">
                We offer a wide range of courses designed for every learner, 
                from young beginners exploring logic to advanced students 
                building with AI and modern web technologies.
              </p>
            </div>
          </DownMotion>

          {/* --- Courses Grid --- */}
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            
            {courseDetailsData.map((course) => (
              <DownMotion key={course.slug}>
                
                {/* NEW CARD DESIGN with Image and Modal Button */}
                <div 
                  className={`
                    h-full rounded-lg overflow-hidden
                    flex flex-col text-left
                    bg-white border border-slate-200 
                    shadow-md transition-all duration-300 
                    hover:shadow-lg hover:-translate-y-1
                  `}
                >
                  {/* Card Image */}
                  <div className="relative w-full h-48">
                    <Image 
                      src={course.imageUrl} 
                      alt={course.title} 
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Text Content - 'flex-grow' pushes link to bottom */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-midnightblue mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gunmetalgray text-sm">
                        {course.description}
                      </p>
                    </div>
                    
                    {/* "Learn More" Button */}
                    <div className="mt-5">
                      <button
                        onClick={() => openModal(course)}
                        className="font-medium text-midnightblue inline-flex items-center group hover:text-[#32ceed]"
                      >
                        Learn More
                        <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
                
              </DownMotion>
            ))}

          </div>
        </div>
      </section>

      {/* Render the modal component */}
      <SyllabusModal course={selectedCourse!} onClose={closeModal} />
    </>
  )
}

export default CoursesPage;