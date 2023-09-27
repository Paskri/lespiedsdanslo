'use client'
import './contact.css'
import { Dancing_Script } from 'next/font/google'
const dScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
})
function onSubmit() {
  console.log('formulaire envoyé')
}
export default function Contact() {
  return (
    <section id="contact">
      <div className="title">
        <h2 className={dScript.className}>Nous contacter</h2>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Nom</label>
          <input id="name" type="text" name="name" placeholder="Votre nom" />
          <label htmlFor="name">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre email"
            required
          />
          <label htmlFor="name">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="contact-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3269.5788869593716!2d5.980569207166571!3d43.107388926215805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1695491545999!5m2!1sen!2sfr"
          width="100%"
          height={450}
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-content">
        <div className={`${dScript.className} address-title`}>
          Les pieds dans l&apos;O{' '}
        </div>
        <br />
        <p>3 rue des Oliviers Bleus</p>
        <p>Bord de Mer</p>
        <p>83130 La Garde</p>
        <p>France</p>
        <br />
        <p>Tél : 05 00 01 02 03</p>
        <p>Fax : 05 10 11 12 13</p>
        <p>contact@lespiedsdanslo.com</p>
      </div>
    </section>
  )
}
/* */
