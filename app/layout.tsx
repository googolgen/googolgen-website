import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import type { Viewport } from 'next';
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};


export const metadata = {
  title: 'Googolgen Education Foundation – Advanced Computer Training Institute',
  description: 'Join Googolgen Education Foundation for basic to advanced computer courses—coding, web & app development, AI, Python, C, C++, and more with certified programs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
