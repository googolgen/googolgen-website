import Link from 'next/link'
import React from 'react'
import FAQSection from '../components/FAQ'

const ContactUsPage = () => {
  return (
    <>
    <section id="contact" className="max-w-4xl mx-auto px-8 lg:px-0 flex flex-col items-center bg-white py-16">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
        <ul className="w-full text-lg text-gray-700 space-y-4 p-8 rounded-2xl bg-gradient-to-b from-[#31f1ebc3] to-[#6a87e7c8]">
          <li><strong>Email:</strong> <Link href="mailto:contactgoogolgen25@gmail.com">contactgoogolgen25@gmail.com</Link></li>
          <li><strong>Phone:</strong> <a href="tel:+919734815716">9734815716</a> / <a href="tel:+919242235970">9242235970</a></li>
          <li><strong>WhatsApp:</strong> <Link href="https://wa.me/919242235970">9242235970</Link></li>
          <li><strong>Location:</strong>
            <ol>
              <li>
                1. Chaitanyapur, Near Juger Jatri Club, Haldia, Purba Medinipur, 721645
              </li>
              <li>2. Khanjanchak, Basudevpur, Near Kuchina Showroom, Haldia, Purba Medinpur, 721602</li>
            </ol>
          </li>
          <li><strong>Register Here:</strong> <a href="https://forms.gle/6U2hmov3zTFvT4BL9" target='_blank' className="text-blue-600 underline">Fill the Form</a></li>
        </ul>
    </section>

    {/* Google Map */}
    <section className='max-w-4xl mx-auto px-8 lg:px-0 flex flex-col gap-12 items-center bg-white '>
      {/* Main Branch */}
      <div className='w-full'>
        <h1 className="text-4xl font-bold text-green-700 mb-6">Main Branch (Chaitanyapur)</h1>
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1847.8686925608592!2d88.085645!3d22.1359864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f3bb9193ae0d%3A0x10326c11134bdbdb!2sJawaharlal%20Nehru%20Youth%20Computer%20Centre%20(COMPUTER%20SOLUTION)!5e0!3m2!1sen!2sin!4v1760901757483!5m2!1sen!2sin" 
            width="100%"
            height="450"
            className="border-0 w-full"
            allowFullScreen={false}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      
      {/* KhanjanChak Branch */}
      <div className='w-full'>
        <h1 className="text-4xl font-bold text-green-700 mb-6">Khanjanchak Branch</h1>
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3696.783907156893!2d88.1309627!3d22.0960681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f78ab3d08141%3A0xf6ccce70478bc5a4!2sJawahar%20Lal%20Nehru%20Yuva%20Kendra%20(COMPUTER%20SOLUTION%20)!5e0!3m2!1sen!2sin!4v1760902160346!5m2!1sen!2sin" 
            width="100%"
            height="450"
            className="border-0 w-full"
            allowFullScreen={false}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
    <FAQSection/>
    </>
  )
}

export default ContactUsPage