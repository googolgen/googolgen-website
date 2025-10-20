"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Founder, M.C.A (Jadavpur University)',
        name: 'Mr. M. K. Mandal',
        imgSrc: '/assets/mentor/mihir_kumar_mandal.jpeg',
    },
    {
        profession: 'B.Tech (CSE)',
        name: 'Mr. Soumyarup Das',
        imgSrc: '/assets/mentor/soumyarup_das.jpeg',
    },
    {
        profession: 'AI & Python Expert (B.Tech, CSE Data Science)',
        name: 'Mr. Subinay Panda',
        imgSrc: '/assets/mentor/subinay_panda.webp',
    },
    {
        profession: 'Android Developer (B.Tech, CSE Data Science)',
        name: 'Mr. Ranoshis Das',
        imgSrc: '/assets/mentor/ranoshis_das.jpeg',
    },
    {
        profession: 'B.Tech (CSE AI & Machine Learning)',
        name: 'Mr. Swarup Parua',
        imgSrc: '/assets/mentor/swarup_parua.jpeg',

    },
    {
        profession: 'B.Tech (CSE Data Science)',
        name: 'Mr. Mrinmoy Mandal',
        imgSrc: '/assets/mentor/mrinmoy_mandal.jpeg',

    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, 
                display: "flex", 
                justifyContent: "center", 
                // position: 'absolute', 
                alignItems: "center" , 
                background: "#6556ff", 
                padding: "28px", 
                borderRadius: "30px", 
                border: "1px solid #1A21BC",
                color: "black",
             }}
            onClick={onClick}
        >
            NextBtn
        </div>
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "#6556ff", display: "flex", justifyContent: "center", alignItems: "center" , padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        >PrevBtn</div>
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            //arrows: true,
            autoplay: false,
            speed: 1000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
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
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Meet with our <br /> experts.</h2>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative flex flex-col justify-center items-center">
                                        <div className="border-8 border-white w-48 h-48 rounded-full overflow-hidden">
                                        <Image src={items.imgSrc} alt="user-image" width={306} height={0} className="inline-block m-auto" />
                                        </div>
                                        <div className="relative w-14 h-14 left-[60px] bottom-[60px] bg-white rounded-full p-4">
                                            <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
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
