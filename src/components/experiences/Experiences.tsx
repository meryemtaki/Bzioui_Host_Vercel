import './Experiences.css'
import exp1 from '../../assets/exp1.png'
import exp2 from '../../assets/exp2.png'
import exp3 from '../../assets/exp3.png'

const Experiences = () => {
  return (
    <div className='experiences'>
      <div className='title'>
        <p className='title-text'>
          <span>|</span>BZIOUI IMMOBILIER<span>|</span>
        </p>
      </div>
      <div className='content-experiences'>
        <div className='exp'>
          <img src={exp1} alt='illustration 12 ans experiences' />
          <p className='number'>12</p>
          <p className='text-exp'>ans d’expérience</p>
        </div>
        <div className='exp'>
          <img src={exp2} alt='illustration 10 projects' />
          <p className='number'>10</p>
          <p className='text-exp'>Projects</p>
        </div>
        <div className='exp'>
          <img src={exp3} alt='illustration 7000+ biens livrés' />
          <p className='number'>7000+</p>
          <p className='text-exp'>Bien Livrés</p>
        </div>
      </div>
      <p className='text-para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
    </div>
  )
}

export default Experiences
