"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Priya Das",
    profession: "Student",
    comment: "Googolgen Education Foundation has completely changed the way I look at computer education. I joined their Python and Web Development classes, and the teachers made even complex topics so easy to understand. The environment is very friendly, and they always encourage practical learning instead of just theory. I’ve already built my first website — something I never thought I could do this early!",
    imgSrc: "/assets/icons/user-f.png",
  },
  {
    name: "Rahul Sen",
    profession: "Student",
    comment: "Learning at Googolgen has been an amazing experience. The teachers are patient, knowledgeable, and genuinely care about every student’s progress. I started with basic computer classes and now I’m learning C++ and AI concepts! The best part is that they focus on real-world applications and projects, not just exams. I feel more confident about pursuing a career in technology now.",
    imgSrc: "/assets/icons/user.png",
  },
  {
    name: "Sangeeta Mishra",
    profession: "Parent",
    comment: "I enrolled my daughter in Googolgen’s computer fundamentals and coding program, and I’m truly happy with her progress. She looks forward to every class and has started showing great interest in technology. The foundation’s focus on modern skills like programming, web development, and AI makes it stand out from other computer centers. I would highly recommend Googolgen to all parents who want their children to learn future-ready skills.",
    imgSrc: "/assets/icons/user-f.png",
  },
]

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {

  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    };

    return (
      <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 mt-10" id="testimonial">
        <div className="sm:flex justify-between items-center">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Testimonials.</h3>
          </div>
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                  <div className="absolute w-20 h-20 rounded-full overflow-clip ring-4 top-[-45px]">
                    <Image src={items.imgSrc} alt={items.imgSrc} width={80} height={80} className="inline-block w-full object-contain" />
                  </div>
                  <h4 className='text-base font-normal text-darkgray my-8'>{items.comment}</h4>
                  <hr style={{ color: "#D7D5D5" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                      <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    );
  }
}
