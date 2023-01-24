import React, {useEffect, useState} from 'react'
import Card from './Card'
import './Projects.css'
 const Projects = () => {
    const [allProjects, setAllProjects]=useState([])
    useEffect(()=>{
        fetch('/projects.json')
        .then((response)=>response.json())
        .then((data)=>setAllProjects(data))
    },[])
  return (
    <section className='projects' id='projects'>
     
            <p className='main-title'>projets</p>
            <section className='all-projects'>
            {allProjects.length !== 0? allProjects.map((oneProject)=>(
                    <Card 
                        key={oneProject.id} 
                        title={oneProject.title} 
                        type={oneProject.type}
                        logo={oneProject.logo}
                        technologies={oneProject.technologies}
                        github={oneProject.github}
                        links={oneProject.links}
                        images={oneProject.images}
                    />
                )):(<p className='loading'>chargement en cours...</p>)}
            </section>
            
        
    </section>
  )
}

export default Projects