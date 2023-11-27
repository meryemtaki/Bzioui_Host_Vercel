import { projects } from '../../data/projects'
import './Projects.css'
const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='title'>
        <p className='title-text'>
          <span>|</span> Nos Projets <span>|</span>
        </p>
        <p className='para'>
          Bzioui Immobilier, c’est d’abord une marque de fabrique reconnue : des
          résidences qui donnent la priorité aux espaces verts et aux jardins
          suspendus tout en étant situées à des adresses de prestige, au cœur
          des villes.
        </p>
      </div>
      <div className='projects-content'>
        {projects.map((project, index) => {
          return (
            <div key={index} className='image'>
            <img src={project.imageRoute} alt='image project' className='img-hover-effect' />
              <div className='project-name'>
                <p>{project.name}</p>
                <div className='underline'></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
