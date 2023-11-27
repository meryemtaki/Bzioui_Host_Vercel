import { useState, useRef } from 'react';
import '../project1/Project1.css';
import vd from '../../../assets/VID-20231031-WA0006.mp4'
import img1 from '../../../assets/Plaquette 1_page-0001.jpg';
import img2 from '../../../assets/Plaquette 1_page-0002.jpg';
import img3 from '../../../assets/Plaquette 1_page-0003.jpg';
import img4 from '../../../assets/Plaquette 1_page-0004.jpg';
import img5 from '../../../assets/Plaquette 1_page-0005.jpg';
import img6 from '../../../assets/Plaquette 1_page-0006.jpg';
import img7 from '../../../assets/Plaquette 1_page-0007.jpg';
import img8 from '../../../assets/Plaquette 1_page-0008.jpg';
import img9 from '../../../assets/Plaquette 1_page-0009.jpg';
import img10 from '../../../assets/Plaquette 1_page-0010.jpg';
import img11 from '../../../assets/Plaquette 1_page-0011.jpg';
import img12 from '../../../assets/Plaquette 1_page-0012.jpg';
import img13 from '../../../assets/Plaquette 1_page-0013.jpg';
import img14 from '../../../assets/Plaquette 1_page-0014.jpg';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,img11,img12,img13,img14];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const showImagesCount = 2; // Number of images to show at a time

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - showImagesCount : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - showImagesCount ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className=" mb-8">
        <video
          className="object-fill sizevd w-full"
          autoPlay
          loop
          muted
          ref={videoRef}
          onClick={toggleVideo}
        >
          <source src={vd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={toggleVideo}
        >
          <FontAwesomeIcon icon={isVideoPlaying ? faPause : faPlay} size="2x" />
        </button>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold mb-10">GALERIE PHOTO DU PROJET</h1>
      </div>

      <div className="slid-section relative mb-12">
        <div className="flex">
          {images.slice(currentImageIndex, currentImageIndex + showImagesCount).map((image, index) => (
            <a
              key={index}
              data-fancybox="gallery"
              href={image}
              data-caption={`Image ${currentImageIndex + index + 1}`}
              className="size-image object-fill w-1/2 mr-10 cursor-pointer"
            >
              <img src={image} alt={`Image ${currentImageIndex + index + 1}`} />
            </a>
          ))}
        </div>
        <div className="arrow-left absolute top-1/2 transform -translate-y-1/2">
          <button onClick={previousImage} className="arrow-style h-12 w-10 p-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="arrow-right absolute top-1/2 transform -translate-y-1/2">
          <button onClick={nextImage} className="arrow-style h-12 w-10 p-2">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
      </div>

      <section className="p-4 lg:p-8 dark:bg-white-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img4} alt="" className="imgsec h-80 aspect-video"/>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
				{/* <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
				<h3 className="text-3xl font-bold title-text">Le Patio </h3>
				<p className="my-6 dark:text-gray-900">La résidence Le Patio surprend, tant par son design élégant que par son service premium. 
Aujourd’hui, de nombreux futurs acquéreurs ont des envies de bien-être et de confort dans leurs appartements. C’est ce que nous leur proposons avec la résidence haut de gamme Le Patio.
<h3 className='text-xl font-bold title-text'>Une résidence à la pointe de la technologie</h3> <br />
Le Patio répond non seulement à des exigences élevées au niveau du confort, mais aussi aux standards actuels en matière de consommation d’énergie. À l’intérieur, la qualité de vie y est particulière pour ses résidents !
        </p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={img1} alt="" className="imgsec h-80  aspect-video"/>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
				{/* <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
				<p className="my-6 dark:text-gray-900"><h3 className='text-xl font-bold title-text'>Une architecture d’intérieur soignée</h3> <br />
Il s’agit également de l’un des éléments phares de cette propriété de luxe. 
Les espaces, l’agencement, la lumière, les couleurs, ou encore les équipements sont tous des éléments certifiant notre résidence de luxe. Les appartements du Patio, résidence haut de gamme se traduit notamment par de grandes pièces spacieuses avec une bonne hauteur sous plafond disposant de toutes les commodités.
 <h3 className='text-xl font-bold title-text'>Matériaux nobles, durables et innovants</h3> <br />
Le Patio a été conçu avec des matériaux nobles pour durer. Que ça soit pour les matériaux de construction ou pour les matériaux de finitions, ces derniers transforment votre intérieur.  
        </p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img10} alt="" className="imgsec h-80 -500 aspect-video"/>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
				{/* <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
				<p className="my-6 dark:text-gray-900"><h3 className='text-xl font-bold title-text'>Une sécurité garantie</h3> <br />
Le Patio assure plus de sécurité à ses futurs habitants grâce à un système de surveillance actif en permanence. Une multitude de technologies sont disponibles (digicode, lecteur de badges, vidéosurveillance, gardiennage). Le tout pour garantir aux habitants une sécurité optimale dans leur lieu de vie.
<h3 className='text-xl font-bold title-text'>Plus-value immobilière considérable en cas de revente </h3>
La résidence Le Patio est aussi un placement refuge, idéal pour les investisseurs. La qualité des matériaux et son emplacement lui confèrent une valeur ajoutée. Idéal pour vous garantir un bel avenir et réaliser une plus-value immobilière en cas de revente !

        </p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
	</div>
</section>
    </>
  );
};

export default ImageSlider;
