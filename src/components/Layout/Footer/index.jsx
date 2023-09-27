import './footer.css'
import { Dancing_Script } from 'next/font/google'
const dScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
})
import trip from '../../../../public/images/trip.png'
import michelin from '../../../../public/images/michelin.png'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-left">
          <ul>
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#chef">Le chef</a>
            </li>
            <li>
              <a href="#carte">La carte</a>
            </li>
            <li>
              <a href="#reservation">Réservations</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <Image
            src={trip.src}
            width={trip.width / 2.6}
            height={trip.height / 2.6}
            alt="Trip advisor logo"
          />
          <Image
            src={michelin.src}
            width={michelin.width / 3.3}
            height={michelin.height / 3.3}
            alt="Trip advisor logo"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <p>Réalisation : Pascal krieg dans Next.js</p>
        <p>
          Tous les droits sur les contenus et les images sont réservés par Les
          pieds dans l&apos;O
        </p>
      </div>
    </footer>
  )
}
