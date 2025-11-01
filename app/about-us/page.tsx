import Image from "next/image";
import DownMotion from '@/app/components/MotionWrapper/DownMotion';

const AboutUsPage = () => {
  return (
    <section id="about-page">

      {/* ========================================
      * 1. ABOUT US SECTION
      * ======================================== */}
      <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
        <DownMotion>
          <div className="flex flex-col sm:flex mb-6">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-10">About Googolgen</h3>
            <p className="text-justify text-gunmetalgray">
              At <b>Googolgen Education Foundation</b>, we aim to make every learner future-ready by blending traditional computer education with modern technologies. Following the vision of <b>NEP 2020</b>, we introduce students to the world of <b>coding, AI, and digital innovation</b> through engaging, practical, and hands-on learning experiences.<br/><br/>
              As a registered organization and franchise partner of <b>Jawaharlal Nehru Youth Computer & Technical Skill Development</b> and the <b>National Certification Board of Skill Development</b>, Googolgen ensures every student receives <b>recognized certification</b> and industry-relevant training. Our mission is to bring advanced computer education—including programming (C, C++, Java, Python), web and app development, AI, and game development—to every aspiring learner in our region.
            </p>
          </div>
        </DownMotion>
      </div>

      {/* ========================================
      * 2. OUR VISION & MISSION SECTION
      * (Reusing the card style from your demo)
      * ======================================== */}
      <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
        <div className="w-full grid md:grid-cols-2 gap-8 text-center mb-6">
          
          <DownMotion>
            {/* Using the blue card style */}
            <div className="bg-[#32ceed] min-h-[15rem] h-auto px-6 py-10 rounded-lg">
              <Image className="mx-auto mb-4" src="/assets/icons/light-bulb.png" alt="Vision Icon" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p>To make every learner future-ready by blending traditional computer education with modern technologies, following the vision of NEP 2020 for creativity and innovation.</p>
            </div>
          </DownMotion>

          <DownMotion>
            {/* Using the green card style */}
            <div className="bg-[#32ed73] min-h-[15rem] h-auto px-6 py-10 rounded-lg">
              <Image className="mx-auto mb-4" src="/assets/icons/robot.png" alt="Mission Icon" width={40} height={40}/>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p>To bring advanced computer education—including programming (C, C++, Java, Python), web and app development, AI, and game development—to every aspiring learner in our region.</p>
            </div>
          </DownMotion>

        </div>
      </div>

      {/* ========================================
      * 3. COMPANY DETAILS SECTION
      * ======================================== */}
      <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
        <DownMotion>
          <div className="flex flex-col sm:flex mb-6">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-10">Company Details</h3>
            <p className="text-justify text-gunmetalgray">
              <b>GOOGOLGEN EDUCATION FOUNDATION</b> is a Private Limited Company, governed by the Companies Act as a company limited by shares. Classified as a Non-government company, it is registered under the Registrar of Companies <b>RoC-Kolkata</b>. According to the Ministry of Corporate Affairs (MCA), this company was incorporated on <b>17-04-2025</b> and last updated on <b>26-08-2025</b>. Its <b>Corporate Identification Number (CIN) is U88900WB2025NPL278537</b>, and it carries the registration number <b>278537</b>.
            </p>
          </div>
        </DownMotion>
      </div>

      {/* ========================================
      * 4. DIRECTORS MESSAGE SECTION
      * ======================================== */}
      <div className='my-6 mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
        <DownMotion>
          <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-10 text-center">
            Message from Our Directors
          </h3>
        </DownMotion>

        {/* --- Grid for 2 Directors --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-12">

          {/* --- Director 1 --- */}
          <DownMotion>
            <div className="flex flex-col items-center">
              {/* NOTE: Replace with actual image path */}
              <Image 
                src="/assets/mentor/mihir_kumar_mandal.jpeg" 
                alt="Mihir Kumar Mondal" 
                width={128} 
                height={128} 
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md"
              />
              <h4 className="text-2xl font-semibold text-midnightblue mt-4">Mihir Kumar Mondal</h4>
              <p className="text-gunmetalgray font-medium mb-6">HR & Founder, GOOGOLGEN EDUCATION FOUNDATION</p>

              <blockquote className="mt-4 p-6 bg-gray-50 rounded-lg border-l-4 border-[#32ed73] w-full shadow-sm">
                {/* whitespace-pre-line preserves line breaks from your text */}
                <p className="text-gunmetalgray italic whitespace-pre-line">
                  {`🖋️ GOOGOLGEN EDUCATION FOUNDATION
“We don’t just teach computers — we inspire confidence, character, and contribution.” ✨
প্রিয় ছাত্রছাত্রী ও দর্শনার্থীবৃন্দ,
GOOGOLGEN EDUCATION FOUNDATION শুধুমাত্র একটি শিক্ষা প্রতিষ্ঠান নয় — এটি এক পরিবার, যেখানে আমরা বিশ্বাস করি শিক্ষা হলো জীবনের পরিবর্তনের চাবিকাঠি।
আমরা এমন এক সমাজ গড়ার স্বপ্ন দেখি, যেখানে প্রত্যেক শিক্ষার্থী:
নিজের যোগ্যতায় দাঁড়াবে,
আত্মনির্ভর হবে,
এবং অন্যের পাশে দাঁড়াতে শিখবে।
আমাদের লক্ষ্য স্পষ্ট — শিক্ষা, মানবিকতা ও সমাজসেবার এক অনন্য সংমিশ্রণ।
বর্তমানে আমাদের অধীনে চলা:
COMPUTER SOLUTION
Jawaharlal Nehru Youth Computer Centre (Franchise)
NCBSD Authorised Centre
এই প্রতিষ্ঠানগুলো এই লক্ষ্য পূরণের পথে নিরলসভাবে কাজ করছে।
আমরা বিশ্বাস করি, প্রতিটি ছাত্রছাত্রীই এক একটি সম্ভাবনা।
আমরা সেই সম্ভাবনাকে বাস্তবে রূপ দেওয়ার দায়িত্ব নিই —
পথ দেখাই, প্রশিক্ষণ দিই, এবং সাহস জোগাই নিজের স্বপ্ন পূরণের।
✨ Our mission is simple yet powerful:
To create skilled, responsible and compassionate citizens who can shape the digital future of India.
GOOGOLGEN-এ আমরা কেবল কম্পিউটার শেখাই না, আমরা জীবন গড়ার শিক্ষা দিই।
আপনার সাফল্যই আমাদের প্রকৃত প্রাপ্তি।
চলুন, একসাথে আগামীর ভবিষ্যৎ গড়ি। 🌟
— মিহির কুমার মন্ডল
HR & Founder, GOOGOLGEN EDUCATION FOUNDATION`}
                </p>
              </blockquote>
            </div>
          </DownMotion>

          {/* --- Director 2 --- */}
          <DownMotion>
            <div className="flex flex-col items-center">
              {/* NOTE: Replace with actual image path */}
              <Image 
                src="/assets/mentor/manas_kumar_hazra.jpeg" 
                alt="Manas Kumar Hazra" 
                width={128} 
                height={128} 
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md"
              />
              <h4 className="text-2xl font-semibold text-midnightblue mt-4">Manas Kumar Hazra</h4>
              <p className="text-gunmetalgray font-medium mb-6">Director, Googolgen Education Foundation</p>

              <blockquote className="mt-4 p-6 bg-gray-50 rounded-lg border-l-4 border-[#32ceed] w-full shadow-sm">
                {/* whitespace-pre-line preserves line breaks from your text */}
                <p className="text-gunmetalgray italic whitespace-pre-line">
                  {`প্রিয় ছাত্র-ছাত্রী ও অভিভাবকবৃন্দ,

নমস্কার।

আমি Googolgen Education Foundation (COMPUTER SOLUTION) এর ডাইরেক্টর হিসেবে আপনাদের সকলকে স্বাগত জানাচ্ছি। আমাদের লক্ষ্য হলো আপনাদেরকে আধুনিক প্রযুক্তির সাথে পরিচিত করা এবং কম্পিউটার শিক্ষার মাধ্যমে আপনাদের ভবিষ্যতকে আরও উজ্জ্বল করা।

আমাদের সেন্টারে আমরা বিভিন্ন ধরনের কোর্স অফার করি, যা আপনাদেরকে কম্পিউটার ব্যবহারের মৌলিক জ্ঞান থেকে শুরু করে উন্নত প্রযুক্তির দক্ষতা অর্জনে সহায়তা করবে। আমাদের অভিজ্ঞ ও যোগ্য শিক্ষকমণ্ডলী নিশ্চিত করবেন যে আপনারা সঠিকভাবে শিক্ষা লাভ করেন।

আমরা বিশ্বাস করি যে, কম্পিউটার শিক্ষা আজকের প্রতিযোগিতামূলক বিশ্বে আপনাদেরকে এগিয়ে রাখবে। তাই, আমরা আপনাদেরকে আমাদের কোর্সগুলোতে অংশগ্রহণ করতে এবং নিজেদের দক্ষতা বৃদ্ধি করতে উৎসাহিত করছি।

অভিভাবকদের প্রতি আমাদের অনুরোধ, আপনারা আপনাদের সন্তানদের শিক্ষার প্রতি মনোযোগী হোন এবং তাদেরকে প্রযুক্তির সাথে তাল মিলিয়ে চলতে সহায়তা করুন।

ধন্যবাদ।
Manas Kumar Hazra
         ( ডাইরেক্টর)
 Googolgen Education Foundation (COMPUTER SOLUTION)`}
                </p>
              </blockquote>
            </div>
          </DownMotion>

        </div>
      </div>

    </section>
  )
}

export default AboutUsPage;