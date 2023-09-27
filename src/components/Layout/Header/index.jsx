import './header.css'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
const dScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
})
const backgroundImg = require('../../../../public/images/lpdl-background.jpg')

export default function Header() {
  return (
    <header>
      <Image
        src={backgroundImg.default.src}
        width={backgroundImg.default.width}
        height={backgroundImg.default.height}
        alt="Les pieds dans l'O - terasse"
      />
      <h1 className={dScript.className}>Les pieds dans l&apos;O</h1>
      <span>Restaurant</span>
      <nav className="menu">
        <ul>
          <li>
            <a href="#gastronomy">À propos</a>
          </li>
          <li>
            <a href="#chef">Le chef</a>
          </li>
          <li>
            <a href="#carte">La carte</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <svg
        id="wave"
        style={{
          transform: 'rotate(0deg)',
          transition: '0.3s',
        }}
        viewBox="0 0 1440 110"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{
            transform: 'translate(0, 0px)',
            opacity: '1',
          }}
          fill="white"
          d="M0,99L30,84.3C60,70,120,40,180,36.7C240,33,300,55,360,60.5C420,66,480,55,540,58.7C600,62,660,81,720,77C780,73,840,48,900,34.8C960,22,1020,22,1080,25.7C1140,29,1200,37,1260,45.8C1320,55,1380,66,1440,71.5C1500,77,1560,77,1620,77C1680,77,1740,77,1800,73.3C1860,70,1920,62,1980,62.3C2040,62,2100,70,2160,69.7C2220,70,2280,62,2340,60.5C2400,59,2460,62,2520,62.3C2580,62,2640,59,2700,51.3C2760,44,2820,33,2880,33C2940,33,3000,44,3060,40.3C3120,37,3180,18,3240,22C3300,26,3360,51,3420,60.5C3480,70,3540,62,3600,62.3C3660,62,3720,70,3780,75.2C3840,81,3900,84,3960,80.7C4020,77,4080,66,4140,55C4200,44,4260,33,4290,27.5L4320,22L4320,110L4290,110C4260,110,4200,110,4140,110C4080,110,4020,110,3960,110C3900,110,3840,110,3780,110C3720,110,3660,110,3600,110C3540,110,3480,110,3420,110C3360,110,3300,110,3240,110C3180,110,3120,110,3060,110C3000,110,2940,110,2880,110C2820,110,2760,110,2700,110C2640,110,2580,110,2520,110C2460,110,2400,110,2340,110C2280,110,2220,110,2160,110C2100,110,2040,110,1980,110C1920,110,1860,110,1800,110C1740,110,1680,110,1620,110C1560,110,1500,110,1440,110C1380,110,1320,110,1260,110C1200,110,1140,110,1080,110C1020,110,960,110,900,110C840,110,780,110,720,110C660,110,600,110,540,110C480,110,420,110,360,110C300,110,240,110,180,110C120,110,60,110,30,110L0,110Z"
        />
      </svg>
    </header>
  )
}
