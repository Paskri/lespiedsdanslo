import './chef.css'
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import chef from '../../../public/images/chef.jpg'
import sign from '../../../public/images/Signature.png'
const dScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
})
export default function Chef() {
  return (
    <>
      <svg
        id="wave1"
        style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
        viewBox="0 0 1440 150"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{ transform: 'translate(0, 0px)', opacity: '1' }}
          fill="#f8f8f8"
          d="M0,105L240,87.5C480,70,960,35,1440,27.5C1920,20,2400,40,2880,52.5C3360,65,3840,70,4320,80C4800,90,5280,105,5760,102.5C6240,100,6720,80,7200,75C7680,70,8160,80,8640,72.5C9120,65,9600,40,10080,30C10560,20,11040,25,11520,27.5C12000,30,12480,30,12960,25C13440,20,13920,10,14400,12.5C14880,15,15360,30,15840,40C16320,50,16800,55,17280,52.5C17760,50,18240,40,18720,30C19200,20,19680,10,20160,10C20640,10,21120,20,21600,37.5C22080,55,22560,80,23040,85C23520,90,24000,75,24480,67.5C24960,60,25440,60,25920,60C26400,60,26880,60,27360,72.5C27840,85,28320,110,28800,110C29280,110,29760,85,30240,65C30720,45,31200,30,31680,30C32160,30,32640,45,33120,65C33600,85,34080,110,34320,122.5L34560,135L34560,150L34320,150C34080,150,33600,150,33120,150C32640,150,32160,150,31680,150C31200,150,30720,150,30240,150C29760,150,29280,150,28800,150C28320,150,27840,150,27360,150C26880,150,26400,150,25920,150C25440,150,24960,150,24480,150C24000,150,23520,150,23040,150C22560,150,22080,150,21600,150C21120,150,20640,150,20160,150C19680,150,19200,150,18720,150C18240,150,17760,150,17280,150C16800,150,16320,150,15840,150C15360,150,14880,150,14400,150C13920,150,13440,150,12960,150C12480,150,12000,150,11520,150C11040,150,10560,150,10080,150C9600,150,9120,150,8640,150C8160,150,7680,150,7200,150C6720,150,6240,150,5760,150C5280,150,4800,150,4320,150C3840,150,3360,150,2880,150C2400,150,1920,150,1440,150C960,150,480,150,240,150L0,150Z"
        />
      </svg>

      <section id="chef">
        <div className="wrapper">
          <div className="title">
            <h2 className={dScript.className}>Notre chef</h2>
          </div>
          <div className="g-bloc reverse">
            <div className="text-left">
              <h3 className={dScript.className}>
                &quot; Allessandro Moretti incarne l&apos;essence même de la
                haute gastronomie italienne. &quot;
              </h3>
              <div className="note">(Guide Michelin 2021)</div>
              <p>
                Originaire de la Toscane, il a hérité des secrets culinaires de
                sa famille, qu&apos;il a perfectionnés dans les cuisines
                renommées de Milan et de Rome.{' '}
              </p>
              <p>
                Fort de ses années d&apos;expérience, Allessandro crée des plats
                authentiques qui célèbrent la fraîcheur des ingrédients locaux,
                offrant ainsi à nos clients une expérience culinaire italienne
                inoubliable.{' '}
              </p>
              <p>
                Sa passion et son dévouement pour l&apos;art de la cuisine
                transparaissent dans chaque bouchée, faisant de chaque repas un
                voyage gustatif innoubliable.
              </p>
              <Image
                className="signature"
                src={sign.src}
                width={sign.width}
                height={sign.height}
                alt="Nos pâtes fait-maison"
              />
            </div>
            <div className="image">
              <Image
                className="gastro-img"
                src={chef.src}
                width={chef.width / 1.5}
                height={chef.height / 1.5}
                alt="Allessandro working"
              />
            </div>
          </div>
        </div>
      </section>
      <svg
        id="wave2"
        style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
        viewBox="0 0 1440 150"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{ transform: 'translate(0, 0px)', opacity: '1' }}
          fill="#f8f8f8"
          d="M0,105L240,87.5C480,70,960,35,1440,27.5C1920,20,2400,40,2880,52.5C3360,65,3840,70,4320,80C4800,90,5280,105,5760,102.5C6240,100,6720,80,7200,75C7680,70,8160,80,8640,72.5C9120,65,9600,40,10080,30C10560,20,11040,25,11520,27.5C12000,30,12480,30,12960,25C13440,20,13920,10,14400,12.5C14880,15,15360,30,15840,40C16320,50,16800,55,17280,52.5C17760,50,18240,40,18720,30C19200,20,19680,10,20160,10C20640,10,21120,20,21600,37.5C22080,55,22560,80,23040,85C23520,90,24000,75,24480,67.5C24960,60,25440,60,25920,60C26400,60,26880,60,27360,72.5C27840,85,28320,110,28800,110C29280,110,29760,85,30240,65C30720,45,31200,30,31680,30C32160,30,32640,45,33120,65C33600,85,34080,110,34320,122.5L34560,135L34560,150L34320,150C34080,150,33600,150,33120,150C32640,150,32160,150,31680,150C31200,150,30720,150,30240,150C29760,150,29280,150,28800,150C28320,150,27840,150,27360,150C26880,150,26400,150,25920,150C25440,150,24960,150,24480,150C24000,150,23520,150,23040,150C22560,150,22080,150,21600,150C21120,150,20640,150,20160,150C19680,150,19200,150,18720,150C18240,150,17760,150,17280,150C16800,150,16320,150,15840,150C15360,150,14880,150,14400,150C13920,150,13440,150,12960,150C12480,150,12000,150,11520,150C11040,150,10560,150,10080,150C9600,150,9120,150,8640,150C8160,150,7680,150,7200,150C6720,150,6240,150,5760,150C5280,150,4800,150,4320,150C3840,150,3360,150,2880,150C2400,150,1920,150,1440,150C960,150,480,150,240,150L0,150Z"
        />
      </svg>
    </>
  )
}
