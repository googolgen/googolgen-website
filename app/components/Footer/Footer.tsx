import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: {
    label: string;
    url: string;
  }[];
}

interface SocialLink {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLink[] = [
  {
    imgSrc: '/assets/footer/facebook.svg',
    link: 'https://www.facebook.com/share/178FLEUERr',
    width: 10
  },
  {
    imgSrc: '/assets/footer/youtube.svg',
    link: 'https://www.youtube.com/@googolgen',
    width: 14
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: [
      { label: 'Home', url: '/' },
      { label: 'About Us', url: '/about-us' },
      { label: 'Courses', url: '/courses' },
      { label: 'Gallery', url: '/gallery' },
      { label: 'Contact Us', url: '/contact-us' },
    ],
  },
  {
    id: 2,
    section: "Contact",
    link: [
      { label: 'Help / FAQ', url: '/#faq' },
      { label: 'Press', url: '#' },
      { label: 'Affiliates', url: '#' },
      { label: 'Partners', url: '#' },
      { label: 'Careers', url: '#' },
    ]
  },
  {
    id: 3,
    section: "More",
    link: [
      { label: 'Blog', url: '/#' },
      { label: 'Certificates', url: '/#' },
      { label: 'Testimonials', url: '/#testimonial' },
      { label: 'How we work?', url: '#' },
      { label: 'Badges & Recognition', url: '#' },
    ]
  }
];

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        <div className='sm:col-span-6 lg:col-span-5'>
          <div className="flex flex-shrink-0 items-center border-right">
            <Image src="/assets/logo/logo.jpeg" alt="logo" width={96} height={96} />
            <div className='flex flex-col items-center gap-2 ml-6 md:ml-4'>
              <span className='text-3xl font-bold text-Blueviolet'>Googolgen</span>
            </div>
          </div>
          <h3 className='text-base font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'>
            Start learning today, build digital skills that last a lifetime.
          </h3>
          <div className='flex gap-4'>
            {socialLinks.map((item, i) => (
              <a href={item.link} target="_blank" key={i}>
                <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                  <Image src={item.imgSrc} alt={item.imgSrc} width={item.width} height={item.width} className="sepiaa" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {products.map((section) => (
          <div key={section.id} className="sm:col-span-2">
            <p className="text-black text-lg font-medium mb-9">{section.section}</p>
            <ul>
              {section.link.map((linkItem, idx) => (
                <li key={idx} className='mb-5'>
                  <Link href={linkItem.url} className="text-darkgray text-base font-normal space-links">
                    {linkItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* All Rights Reserved */}
      <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
        <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>
          Copyright &copy; 2025 Googolgen Education Foundation. All rights reserved.
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className='text-dark-red opacity-75 text-sm font-normal'>
            Email: <Link className="hover:text-black hover:underline" href="mailto:contactgoogolgen25@gmail.com" target="_blank">contactgoogolgen25@gmail.com</Link>
          </h4>
          <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
          <h4 className='text-dark-red opacity-75 text-sm font-normal'>
            WhatsApp: <Link className="hover:text-black hover:underline" href="https://wa.me/919242235970" target="_blank">+91-9242235970</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
