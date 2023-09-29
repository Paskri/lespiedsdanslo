import './carte.css'

import { Dancing_Script } from 'next/font/google'
const dScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
})

import carte from '../../../public/carte.json'

export default async function Carte() {
  /*let error = null
  let loading = true
  let carte = {}
  try {
    const response = await fetch('http://localhost:3000/carte.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    carte = await response.json()
    error = null
    loading = false
  } catch (err) {
    error = err
    loading = false
  }*/
  const menu = carte.menu
  const boissons = carte.boissons
  return (
    <section id="carte">
      <div className="title">
        <h2 className={dScript.className}>Notre carte</h2>
      </div>
      <div className="menu-wrapper">
        <div className="menu-left">
          {!menu ? (
            ''
          ) : (
            <>
              {Object.keys(menu).map((category) => {
                let title = category.replace('_', ' ')
                title = title.charAt(0).toUpperCase() + title.slice(1)
                return (
                  <>
                    <div key={category}>
                      <h3 className={dScript.className}>{title}</h3>
                    </div>
                    {menu[category].map((plat) => {
                      return (
                        <div key={plat.nom}>
                          <h4 className={dScript.className}>{plat.nom}</h4>
                          <div className="plat-container">
                            <p className="description">{plat.description}</p>
                            <p className="tarif">{plat.prix} €</p>
                          </div>
                        </div>
                      )
                    })}
                  </>
                )
              })}
            </>
          )}
        </div>
        <div className="separator">
          <div className="separator-content"></div>
        </div>
        <div className="menu-right">
          {!boissons ? (
            ''
          ) : (
            <>
              {Object.keys(boissons).map((category) => {
                let title = category.replace('_', ' ')
                title = title.charAt(0).toUpperCase() + title.slice(1)
                return (
                  <>
                    <div key={category}>
                      <h3 className={dScript.className}>{title}</h3>
                    </div>
                    {boissons[category].map((boisson) => {
                      return (
                        <div key={boisson.nom}>
                          <h4 className={dScript.className}>{boisson.nom}</h4>
                          <div className="plat-container">
                            <p className="description">{boisson.description}</p>
                            <p className="tarif">
                              {boisson.prix || boisson.prix_bouteille} €
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </>
                )
              })}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
