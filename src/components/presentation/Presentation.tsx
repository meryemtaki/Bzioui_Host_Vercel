// import { useState } from 'react'
import './Presentation.css'
import presentatiomImg from '../../assets/presentation.jpg'

// import video from '../../assets/video.mp4'
// import thumbnail from '../../assets/thumbnail.png'

const Presentation = () => {
  // const [isPlaying, setIsPlaying] = useState(false)

  // const handlePlayPause = () => {
  //   setIsPlaying(!isPlaying)
  // }

  return (
    <div className='presentation' id='presentation'>
      <div className='text'>
        <p className='title-text'>
          <span>|</span> BZIOUI IMMOBILIER <span>|</span>
        </p>
        <h2>Découvrez votre oasis de confort dans nos résidences au Maroc</h2>
        <p className='para'>
          Des logements raffinés et spacieux adaptés à vos besoins,dans des
          emplacements prestigieux au Maroc
        </p>
        <div className='props'>
          <p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='none'
            >
              <circle cx='13' cy='13' r='13' fill='#CFCFCF' />
              <circle cx='13' cy='13' r='4' fill='#3B3A5D' />
            </svg>
            Syndic
          </p>
          <p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='none'
            >
              <circle cx='13' cy='13' r='13' fill='#CFCFCF' />
              <circle cx='13' cy='13' r='4' fill='#3B3A5D' />
            </svg>
            Parties communes
          </p>
          <p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='none'
            >
              <circle cx='13' cy='13' r='13' fill='#CFCFCF' />
              <circle cx='13' cy='13' r='4' fill='#3B3A5D' />
            </svg>
            Support 24/7
          </p>
        </div>
      </div>
      <div className='image'>
        <img src={presentatiomImg} alt='image illustration why us?' />
      </div>
    </div>
  )
}

export default Presentation
