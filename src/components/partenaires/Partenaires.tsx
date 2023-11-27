import './Partenaires.css'
import parte1 from '../../assets/parte1.jpg'
import parte2 from '../../assets/parte2.png'
import parte3 from '../../assets/parte3.png'
import parte4 from '../../assets/parte4.png'
import parte5 from '../../assets/parte5.png'
import parte6 from '../../assets/parte6.png'
import parte7 from '../../assets/parte7.png'
import parte8 from '../../assets/parte8.png'
import parte9 from '../../assets/parte9.png'
const Partenaires = () => {
  return (
    <div className='partenaires'>
      <div className='content-parte'>
        <div className='title-parte'>
          <p className='title-text'>
            <span>|</span> NOS PARTENAIRES <span>|</span>
          </p>
        </div>
        <div className='content-logo'>
          <img src={parte1} alt='logo partenaire' />
          <img src={parte2} alt='logo partenaire' />
          <img src={parte3} alt='logo partenaire' />
          <img src={parte4} alt='logo partenaire' />
          <img src={parte5} alt='logo partenaire' />
          <img src={parte6} alt='logo partenaire' />
          <img src={parte7} alt='logo partenaire' />
          <img src={parte8} alt='logo partenaire' />
          <img src={parte9} alt='logo partenaire' />
        </div>
        <div className='button'>
          <button>
            Explore Now{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
            >
              <path
                d='M16.8027 8.64209C16.8027 4.22401 13.2208 0.64209 8.80273 0.64209C4.38466 0.64209 0.802734 4.22401 0.802734 8.64209C0.802734 13.0602 4.38466 16.6421 8.80273 16.6421C13.2208 16.6421 16.8027 13.0602 16.8027 8.64209ZM8.62389 12.1559C8.5665 12.099 8.52089 12.0314 8.48966 11.9568C8.45843 11.8823 8.44219 11.8023 8.44186 11.7215C8.44154 11.6406 8.45715 11.5605 8.48778 11.4857C8.51842 11.4109 8.56349 11.3429 8.62043 11.2856L10.6327 9.25747H5.49504C5.33183 9.25747 5.17531 9.19264 5.0599 9.07723C4.94449 8.96183 4.87966 8.8053 4.87966 8.64209C4.87966 8.47888 4.94449 8.32235 5.0599 8.20695C5.17531 8.09154 5.33183 8.02671 5.49504 8.02671H10.6327L8.62043 5.99863C8.5635 5.9412 8.51845 5.87312 8.48784 5.79828C8.45722 5.72344 8.44165 5.64331 8.44201 5.56245C8.44237 5.48159 8.45864 5.40159 8.48992 5.32703C8.52119 5.25246 8.56684 5.18478 8.62427 5.12786C8.6817 5.07094 8.74978 5.02588 8.82462 4.99527C8.89946 4.96466 8.9796 4.94908 9.06045 4.94944C9.22376 4.95016 9.38008 5.01572 9.49504 5.13171L12.5485 8.20863C12.6629 8.3239 12.7271 8.4797 12.7271 8.64209C12.7271 8.80448 12.6629 8.96028 12.5485 9.07555L9.49504 12.1525C9.43811 12.21 9.3704 12.2557 9.29578 12.287C9.22116 12.3183 9.1411 12.3346 9.06018 12.3349C8.97927 12.3352 8.89908 12.3196 8.82422 12.2889C8.74935 12.2582 8.68128 12.213 8.62389 12.1559Z'
                fill='#CDB279'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Partenaires
