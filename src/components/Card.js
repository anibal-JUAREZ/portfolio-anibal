import React, {useState, useRef} from 'react';
import './Card.css';
import Modal from './Modal';

 const Card = (props) => {
    const [openModal, setOpenModal]=useState(false);
    const projectCard = useRef(null);
    const openModalHandler = ()=>{
        setOpenModal(!openModal)
    }
   
  return (
    <>
        <div className='card' ref={projectCard}>
            <section></section>
            <div className='image'>
                    <img src={`/images/icons/${props.logo}`}/>
                </div>
            <p>{props.title}</p>
            <p>{props.type}</p>
           
            <div> <button type='button' onClick={openModalHandler}>Découvrir &#8250;</button></div>
        </div>
        {openModal &&
         <Modal
            title={props.title} 
            technologies={props.technologies}
            github={props.github}
            links={props.links}
            closeWindowHandler={openModalHandler}
            images={props.images}
            top={projectCard.current.offsetTop}
            demo={props.demo}
        />
        }
    </>
  )
}

export default Card;