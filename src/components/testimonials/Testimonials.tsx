import React, { useEffect, useState } from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

interface Testimonial {
  title: string
  para: string
  imageUrl: string
  name: string
}

const Testimonials: React.FC = () => {
  const [people] = useState<Testimonial[]>(testimonials)
  const [index, setIndex] = useState<number>(2)
  const [peopleToShow, setPeopleToShow] = useState<Testimonial[]>([])

  useEffect(() => {
    let visiblePeople: Testimonial[] = []
    if (window.innerWidth > 960) {
      visiblePeople = people.slice(index, index + 3)
    } else if (window.innerWidth > 500) {
      visiblePeople = people.slice(index, index + 2)
    } else {
      visiblePeople = people.slice(index, index + 1)
    }

    setPeopleToShow(visiblePeople)
  }, [index, people])

  const handleNext = () => {
    if (index < people.length - 1) {
      setIndex(index + 1)
    }
  }

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  // Touch swipe handling
  let touchStartX = 0
  let touchEndX = 0

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX

    if (touchEndX < touchStartX) {
      handleNext()
    } else if (touchEndX > touchStartX) {
      handlePrevious()
    }
  }

  return (
    <div className='testimonials' id='testimonials'>
      <div className='testimonial-title'>
        <p>
          <span>|</span>TEMOIGNAGE<span>|</span>
        </p>
      </div>
      <div className='testi-content'>
        {peopleToShow.map((person, personIndex) => {
          return (
            <article
              className=''
              key={personIndex}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ position: 'relative' }}
            >
              <div className='top'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='27'
                  viewBox='0 0 35 27'
                  fill='none'
                >
                  <g opacity='0.1'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M33.3084 4.21692C28.5365 6.55966 26.1506 9.31235 26.1506 12.4751C28.1845 12.7093 29.8664 13.539 31.1963 14.9642C32.5261 16.3894 33.1911 18.039 33.1911 19.9132C33.1911 21.9046 32.5457 23.5835 31.2549 24.9501C29.9642 26.3167 28.341 27 26.3853 27C24.195 27 22.298 26.1117 20.6943 24.3351C19.0907 22.5586 18.2888 20.4013 18.2888 17.8633C18.2888 10.2494 22.5522 4.29503 31.0789 0L33.3084 4.21692ZM16.4683 4.21692C11.6573 6.55966 9.25186 9.31235 9.25186 12.4751C11.3249 12.7093 13.0263 13.539 14.3562 14.9642C15.686 16.3894 16.3509 18.039 16.3509 19.9132C16.3509 21.9046 15.6958 23.5835 14.3855 24.9501C13.0752 26.3167 11.4422 27 9.48654 27C7.29618 27 5.40897 26.1117 3.82487 24.3351C2.24077 22.5586 1.44873 20.4013 1.44873 17.8633C1.44873 10.2494 5.6925 4.29503 14.1802 0L16.4683 4.21692Z'
                      fill='#3531B6'
                    />
                  </g>
                </svg>
                <p className='title-testi'>{person.title}</p>
                <p className='para-testi'>{person.para}</p>
                <div className='triangle'></div>
              </div>
              <div className='bottom'>
                <img src={person.imageUrl} alt={`${person.name} advice`} />
                <p className='name'>{person.name}</p>
                <p className='role'>{person.name}</p>
              </div>
            </article>
          )
        })}
      </div>
      <div className='dot'>
  <div
    className={index === 0 ? 'active' : ''}
    onClick={() => setIndex(0)}
  ></div>
  <div
    className={index === 1 ? 'active' : ''}
    onClick={() => setIndex(1)}
  ></div>
  <div
    className={index === 2 ? 'active' : ''}
    onClick={() => setIndex(2)}
  ></div>
</div>

      <div className='arrows'>
        <button
          className='left'
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className='right'
          onClick={() => setIndex(index + 1)}
          disabled={index === 3}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Testimonials
