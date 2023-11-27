import './Whyus.css'
import imageReason from '../../assets/thumbnail.png'

const Whyus = () => {
  return (
    <div className='whyus' id='whyus'>
      <div className='title'>
        <p className='title-text'>
          <span>|</span> POURQUOI NOUS CHOISIR? <span>|</span>
        </p>
      </div>
      <div className='content'>
        <div className='text'>
          <p className='para1'>
            Chaque projet immobilier que nous avons réalisé dans plusieurs
            villes au Maroc est le fruit d'un travail minutieux et de notre
            expertise approfondie.
          </p>
          <p className='para2'>
            Nous avons pris soin de concevoir des résidences qui se démarquent
            par leur architecture unique, leur nombre de logements varié, leur
            emplacement stratégique et leurs caractéristiques exceptionnelles.
          </p>
          <button>
            Voir plus
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
            >
              <path
                d='M17 8.5C17 4.08192 13.1942 0.5 8.5 0.5C3.80579 0.5 0 4.08192 0 8.5C0 12.9181 3.80579 16.5 8.5 16.5C13.1942 16.5 17 12.9181 17 8.5ZM8.30998 12.0138C8.249 11.9569 8.20054 11.8893 8.16736 11.8147C8.13417 11.7402 8.11692 11.6602 8.11658 11.5794C8.11623 11.4985 8.13281 11.4184 8.16537 11.3437C8.19792 11.2689 8.24581 11.2008 8.3063 11.1435L10.4444 9.11539H4.98558C4.81217 9.11539 4.64586 9.05055 4.52324 8.93514C4.40062 8.81974 4.33173 8.66321 4.33173 8.5C4.33173 8.33679 4.40062 8.18026 4.52324 8.06486C4.64586 7.94945 4.81217 7.88462 4.98558 7.88462H10.4444L8.3063 5.85654C8.24582 5.79911 8.19795 5.73103 8.16542 5.65619C8.13289 5.58135 8.11635 5.50122 8.11673 5.42036C8.11711 5.3395 8.1344 5.2595 8.16763 5.18494C8.20086 5.11037 8.24937 5.04269 8.31038 4.98577C8.3714 4.92885 8.44374 4.88379 8.52325 4.85318C8.60277 4.82257 8.68791 4.80699 8.77383 4.80735C8.94733 4.80807 9.11343 4.87363 9.23558 4.98962L12.4799 8.06654C12.6014 8.18181 12.6696 8.33761 12.6696 8.5C12.6696 8.66239 12.6014 8.81819 12.4799 8.93346L9.23558 12.0104C9.17509 12.0679 9.10314 12.1136 9.02386 12.1449C8.94458 12.1762 8.85951 12.1925 8.77354 12.1928C8.68756 12.1931 8.60237 12.1775 8.52282 12.1468C8.44328 12.1161 8.37095 12.0709 8.30998 12.0138Z'
                fill='#BC994C'
              />
            </svg>
          </button>
        </div>
        <div className='image'>
          <img src={imageReason} alt='image illustration why us?' />
        </div>
      </div>
      <div className='bottom'>
        <div className='reason'>
          <div className='circle'>
            <p>01</p>
          </div>
          <h3>Accopagnement</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className='reason'>
          <div className='circle'>
            <p>02</p>
          </div>
          <h3>Flexibilité</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className='reason'>
          <div className='circle'>
            <p>03</p>
          </div>
          <h3>Engagement</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
    </div>
  )
}

export default Whyus
