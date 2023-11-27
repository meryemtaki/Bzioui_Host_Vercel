import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <div className='underline'></div>
        <h1>L’IMMOBILIER À LA PORTÉE DE TOUS!</h1>
        <p>
          Découvrez nos offres du moment et habitez l'appartement <br /> de vos
          rêves !
        </p>
        <div className='button'>
          <button>
            Découvrez nos projets
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
            >
              <path
                d='M17 8.05176C17 3.63368 13.1942 0.0517578 8.5 0.0517578C3.80579 0.0517578 0 3.63368 0 8.05176C0 12.4698 3.80579 16.0518 8.5 16.0518C13.1942 16.0518 17 12.4698 17 8.05176ZM8.30998 11.5656C8.249 11.5087 8.20054 11.441 8.16736 11.3665C8.13417 11.2919 8.11692 11.212 8.11658 11.1311C8.11623 11.0503 8.13281 10.9702 8.16537 10.8954C8.19792 10.8206 8.24581 10.7526 8.3063 10.6952L10.4444 8.66714H4.98558C4.81217 8.66714 4.64586 8.60231 4.52324 8.4869C4.40062 8.37149 4.33173 8.21497 4.33173 8.05176C4.33173 7.88855 4.40062 7.73202 4.52324 7.61662C4.64586 7.50121 4.81217 7.43637 4.98558 7.43637H10.4444L8.3063 5.4083C8.24582 5.35087 8.19795 5.28279 8.16542 5.20795C8.13289 5.13311 8.11635 5.05297 8.11673 4.97212C8.11711 4.89126 8.1344 4.81126 8.16763 4.73669C8.20086 4.66213 8.24937 4.59445 8.31038 4.53753C8.3714 4.4806 8.44374 4.43555 8.52325 4.40494C8.60277 4.37432 8.68791 4.35875 8.77383 4.35911C8.94733 4.35983 9.11343 4.42539 9.23558 4.54137L12.4799 7.6183C12.6014 7.73356 12.6696 7.88937 12.6696 8.05176C12.6696 8.21415 12.6014 8.36995 12.4799 8.48522L9.23558 11.5621C9.17509 11.6196 9.10314 11.6654 9.02386 11.6967C8.94458 11.728 8.85951 11.7442 8.77354 11.7446C8.68756 11.7449 8.60237 11.7292 8.52282 11.6985C8.44328 11.6678 8.37095 11.6227 8.30998 11.5656Z'
                fill='#FFBB50'
              />
            </svg>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Banner