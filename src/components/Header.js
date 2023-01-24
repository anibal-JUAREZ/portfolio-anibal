import React from 'react';
import './Header.css';
import mainPhoto from '../../src/assets/images/main-picture.png';
import CV from '../pdf/CV-Anibal-Juarez-webDev.pdf'
const Header = () => {
  return (
    <section className='about_me'>
            <div className='information'>
                <p>Je m'appelle</p>
                <p className='main-header'>Anibal Juarez</p>
                <p>Je suis</p>
                <p className='title'>Développeur Web</p>
                <div>
                    <button><a href={CV} target="_blank" rel="noopener noreferrer">Voir CV</a></button>
                </div>
            </div>
            <div className='main-img'>
                <img src={mainPhoto}/>
            </div>
    </section>
  )
}
 export default Header;