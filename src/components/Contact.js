import React from 'react';
import './Contact.css';


 const Contact = () => {
  return (
    <section className='contact-section' id='contact-section'>
         <p className='main-title'>contactez-moi</p>
        <section className='card-section'>
            <article className='contact-card'>
                <img src='./images/contactSection/mail.png' alt='mail icon'/>
                <p className='information-title'>E-mail</p>
                <p>anibal.juarezr@gmail.com</p>
            </article>

          <article className='contact-card'>
                <img src='./images/contactSection/linkedin.png' alt='linkedin icon'/>
                <p className='information-title'>LinkedIn</p>
                <a  href='https://www.linkedin.com/in/anibal-juarez/' target="_blank" rel="noopener noreferrer">lien vers le profil</a>
            </article>

            <article className='contact-card'>
                <img src='./images/contactSection/telephone.png' alt='telephone icon'/>
                <p className='information-title'>Téléphone</p>
                <p>+33 7 82 21 51 87 </p>
            </article>
        </section>
       
        
    </section>
  )
}

export default Contact;