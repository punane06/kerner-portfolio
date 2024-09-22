import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kadi Kerner portfolio',
  description: 'Front-End Developer Kadi Kerner portfolio'
}

/* TODO add more metadata info (also other parts) */

export default function Home() {
  return (
    <div>
      <h1 className='text-green-300'>
        Home Page
      </h1>
      <div className="bg-red-200 h-screen">
          heroj aljksfh 
      </div>
      <div className="bg-yellow-400 h-80" id="portfolio">
          Portfolio
      </div>
      <div className="bg-green-400 h-80" id="aboutme">
          About Me
      </div>
      <div className="bg-blue-400 h-8S0" id="contact">
          Contact
      </div>
    </div>
  );
}
