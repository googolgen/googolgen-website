'use client';
import { useState, useEffect } from 'react';

// Import Swiper Core and required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

// Data

interface PhotoData {
  id: number,
  src: string[],
  alt: string,
  title: string,
  description: string
};

const photosData = [
  {
    id: 1,
    src: [
      '/assets/gallery/gallery1.jpeg',
    ],
    alt: 'Students learning basic computer operations in the lab',
    title: 'Learning by Doing',
    description: 'Students at Googolgen gain hands-on experience with real computers, learning essential skills like typing, file management, and internet basics—building a strong foundation for the digital age.'
  },
  {
    id: 2,
    src: [
      '/assets/gallery/gallery2.jpeg',
    ],
    alt: 'Young learners exploring MS Paint and creative design tools',
    title: 'Creativity in Action',
    description: 'Kids from junior classes express their creativity using MS Paint and design tools, learning computer basics while having fun with colors, shapes, and imagination.'
  },
  {
    id: 3,
    src: [
      '/assets/heroslider/img1.jpeg',
    ],
    alt: 'Student coding a simple project in C language',
    title: 'Coding the Future',
    description: 'Students explore programming languages like C, C++, and Python through guided lessons and projects, developing logic, problem-solving, and computational thinking skills.'
  },
  {
    id: 4,
    src: [
      '/assets/heroslider/img2.jpeg',
    ],
    alt: 'Instructor teaching students about web development concepts',
    title: 'Building the Web',
    description: 'Through HTML, CSS, and JavaScript classes, students learn how websites are made and even create their own responsive web pages under expert guidance.'
  },
  {
    id: 5,
    src: [
      '/assets/heroslider/img3.jpeg',
    ],
    alt: 'Students attending a digital literacy session',
    title: 'Digital Empowerment for All',
    description: 'Googolgen ensures every student—from beginners to advanced learners—gets the right mix of theoretical knowledge and practical skills to excel in today’s digital world.'
  },
  {
    id: 6,
    src: [
      '/assets/gallery/gallery3.jpeg',
    ],
    alt: 'Students exploring hardware components of a computer',
    title: 'Inside the Machine',
    description: 'Learners take apart and understand real computer components—like the motherboard, RAM, and hard drive—developing curiosity about how technology works from the inside out.'
  },
];



interface VideoData {
  id: number,
  youtubeId: string,
  title: string,
  description: string
};

const videosData: VideoData[] = [
  {
    id: 1,
    youtubeId: 'FgscGSuEQLk',
    title: 'Learn Digital Skills Fast | GOOGOLGEN Education',
    description: 'Quick insight into GOOGOLGEN’s practical tech learning. Build real computer skills, confidence, and a digital-ready future.'
  },
  {
    id: 2,
    youtubeId: 'TnlTk4-74h4',
    title: 'GOOGOLGEN Digital Learning System',
    description: 'Explore smart classrooms, modern labs, and certification programs shaping future tech professionals.'
  },
  {
    id: 3,
    youtubeId: 'xLHJoJdess0',
    title: 'Empower Your Digital Future | GOOGOLGEN Courses',
    description: 'Discover expert-led computer courses and high-tech facilities that fuel your digital growth.'
  },
];


// Photo Card Component
const PhotoCard = ({ photo, onImageClick }: {
  photo: PhotoData,
  onImageClick: (photo: PhotoData) => void
}) => (
  <div
    className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg hover:shadow-[#4F46E5]/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
    onClick={() => onImageClick(photo)}
  >
    <Image width={1000} height={0} className="w-full h-56 object-cover" src={photo.src[0]} alt={photo.alt} />
    <div className="p-5">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{photo.title}</h3>
      <p className="text-gray-600 text-sm">{photo.description.substring(0, 100)}...</p>
    </div>
  </div>
);

// Video Card Component
const VideoCard = ({ video }: { video: VideoData }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg hover:shadow-[#14B8A6]/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2">
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{video.title}</h3>
      <p className="text-gray-600 text-sm">{video.description}</p>
    </div>
  </div>
);

// Modal Component
const Modal = ({ photo, onClose }: {
  photo: PhotoData,
  onClose: () => void
}) => {
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Close on backdrop click
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-full overflow-y-auto flex flex-col md:flex-row animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className='relative w-full md:w-1/2 flex-shrink-0 h-auto md:rounded-l-2xl bg-black'>
          <Swiper
            className='w-full h-[400px]'
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {photo.src.map((path) => {
              return (
                <SwiperSlide key={path}>
                  <Image width={1000} height={0} src={path} alt="nothing" className='w-full h-full object-contain' />
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* TODO: Implement the maximize and minize */}
          {/* <img 
              src='./assets/icons/maximize.svg' 
              alt='maximize icon'
              height={20}
              width={20}
              className='absolute right-4 bottom-4 cursor-pointer z-50'
          /> */}

        </div>

        <div className="p-8 flex flex-col">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{photo.title}</h2>
          <p className="text-gray-700 flex-grow">{photo.description}</p>
          <button
            onClick={onClose}
            className="mt-6 self-start bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          >
            Close
          </button>
        </div>
      </div>
      <button
        onClick={onClose}
        className="hidden md:block absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
        aria-label="Close modal"
      >
        &times;
      </button>
    </div>
  );
};

// --- Gallery Page ---
export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null);

  const handleImageClick = (photo: PhotoData) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const TabButton = ({ tabName, label }: { tabName: string, label: string }) => {
    const isActive = activeTab === tabName;
    return (
      <button
        onClick={() => setActiveTab(tabName)}
        className={`px-6 py-3 text-lg font-semibold rounded-t-lg transition-all duration-300 relative focus:outline-none ${isActive
            ? 'text-slate-900'
            : 'text-gray-500 hover:text-slate-900'
          }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
        )}
      </button>
    );
  };

  return (
    <div className="md:mx-40 bg-gray-50 min-h-screen text-slate-800 font-sans">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900">
            A Glimpse Into Our Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the moments of creation, collaboration, and fun that happen here every day.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <TabButton tabName="photos" label="Photo Gallery" />
          <TabButton tabName="videos" label="Video Reel" />
        </div>

        {/* Content Area */}
        <main>
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {photosData.map(photo => (
                <PhotoCard key={photo.id} photo={photo} onImageClick={handleImageClick} />
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {videosData.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </main>
      </div>

      {selectedPhoto &&
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      }

      {/* We need to define the animation classes used if they are not part of standard Tailwind */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
        .aspect-w-16 { position: relative; padding-bottom: 56.25%; }
        .aspect-h-9 { height: 0; }
        .aspect-w-16 > iframe { position: absolute; width: 100%; height: 100%; top: 0; left: 0; }
      `}</style>
    </div>
  );
}