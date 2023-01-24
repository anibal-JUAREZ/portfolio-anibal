import React, {useState} from 'react';
import './Card.css';
import Modal from './Modal';

 const Card = (props) => {
    const [openModal, setOpenModal]=useState(false);

    const openModalHandler = ()=>{
        setOpenModal(!openModal)
    }

  return (
    <>
        <div className='card'>
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
        />
        }
    </>
  )
}

export default Card;