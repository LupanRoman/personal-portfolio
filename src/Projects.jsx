import React from 'react';
import project from './assets/project1.png'

const Projects = () => {
  return (
    <>
      <div className="projects-component" id='projects'>
        
        <div className="project1">
        <a target={"_blank"} 
        href="https://online-store-8q296khrv-lupanroman.vercel.app/">
        <img src={project} alt="" width='300'/>
        </a>
        <p>Keyboard Online Store</p>
        </div>

        <div className="project2">
        <a href="">
          Coming soon... 
        </a>
        {/* <p>Planner app</p> */}
        </div>
      </div>

      
    </>
  )
}

export default Projects