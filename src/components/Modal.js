import React from 'react';
import './Modal.css';

 const Modal = (props) => {
     console.log(props.top)
     const closeWindowsHandler=()=>{
         props.closeWindowHandler();
     }
     let textLink;
     let link;
     let pageLinks;
     let photos;
     let demo;
     if(props.github){
         link = <a target="_blank" rel="noopener noreferrer" href={props.github}><img className='github-icon' src={`/images/technologies/github.png`} alt='github icon'/></a>;
         textLink="Code";
     }
     if(props.links){
        textLink="Liens vers les pages";
        pageLinks = props.links.map((link, index)=>(
            
                <a key = {index} target="_blank" rel="noopener noreferrer" href={link}><img className='github-icon' src={`/images/technologies/link.png`} alt='link icon'/></a>
           
        ))
       
     }

     if(props.images.length > 0){
         photos = props.images.map((image, index)=>(
            <img className='projects-modal' src={`/images/projects/${image}`} />
         ))
     }
     if(props.demo){
         demo=<a target="_blank" rel="noopener noreferrer" href={props.demo}><img className='github-icon' src={`/images/technologies/link.png`} alt='link icon'/></a>
     }
  return (
    <>
        <div onClick={closeWindowsHandler} className='backdrop'></div>
        <section className='modal-projets' style={{top:`${props.top}px`}}>
         
            <div onClick={closeWindowsHandler} className='close-button'><p>x</p></div>
            
            
            <p className='project-title'>Titre</p>
            <p className='project-information'>{props.title}</p>
            <p className='project-title'>Technologies</p>
            <section className='technology-section'>
                {
                    props.technologies.map((technology, index)=>(
                        <img key = {index} src={`/images/technologies/${technology}.png`} alt={` ${technology} icon`}/>
                    ))
                }
                
            </section>
            <p className='project-title'>{textLink}</p>
            {link}
            {pageLinks}
            <p className='project-title'>{props.images.length>0 ? "Photos" : "" }</p>
            {photos}
           { props.demo && <p className='project-title'>Demo</p>}
            {demo}
        </section>
    </>
  )
}


export default Modal;