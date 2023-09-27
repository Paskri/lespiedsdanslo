import Image from 'next/image'
import './gastronomy.css'
import { Dancing_Script } from 'next/font/google'
const dScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
})
import legumes from '../../../public/images/vegetables.jpg'
import faitMaison from '../../../public/images/fait-maison.jpg'
import plat1 from '../../../public/images/plat-1.jpg'
export default function Gastronomy() {
  return (
    <section id="gastronomy">
      <div className="title">
        <h2 className={dScript.className}>Gastronomie Italienne</h2>
        <span>La qualité avant tout</span>
      </div>
      <div className="g-bloc">
        <div className="image">
          <Image
            className="gastro-img"
            style={{ opacity: '0.9' }}
            src={legumes.src}
            width={legumes.width}
            height={legumes.height}
            alt="Nos légumes frais"
          />
        </div>
        <div className="text-right">
          <h3 className={dScript.className}>Nos légumes frais</h3>
          <p>
            Nous selectionons les meilleurs produits du terroir auprès de nos
            producteurs partenaires.{' '}
          </p>
          <p>
            Tous nos légumes sont acquis en circuit court, dans une démarche
            éthique afin de vous garantir des saveurs inoubliables.
          </p>
          <p>
            Il sont ensuite préparés avec soin juste avant d&apos;être servis
          </p>
        </div>
      </div>
      <div className="g-bloc reverse">
        <div className="text-left">
          <h3 className={dScript.className}>Nos pâtes faites maison</h3>
          <p>Toutes nos pâtes sont faites maison.</p>
          <p>Nous avons à cœur de vous garantir les meilleures produits.</p>
          <p>
            Ainsi, nous préparons nos pâtes nous même à partir de produits
            locaux.
          </p>
          <p>Cette expérience unique vous apportera entière satisfaction.</p>
        </div>
        <div className="image">
          <Image
            className="gastro-img"
            src={faitMaison.src}
            width={faitMaison.width}
            height={faitMaison.height}
            alt="Notre savoir faire"
          />
        </div>
      </div>
      <div className="g-bloc">
        <div className="image">
          <Image
            className="gastro-img"
            src={plat1.src}
            width={plat1.width}
            height={plat1.height}
            alt="Nos pâtes fait-maison"
          />
        </div>
        <div className="text-right">
          <h3 className={dScript.className}>Notre savoir faire</h3>
          <p>Les produits ne seraient rien sans notre savoir faire.</p>
          <p>
            Nos racines italiennes remontent à trois générations au sein de la
            famille de notre chef. Ces traditions culinaires ancestrales nous
            permettent de vous offrir une expérience inoubliable de la haute
            gastronomie italienne.
          </p>
        </div>
      </div>
    </section>
  )
}
