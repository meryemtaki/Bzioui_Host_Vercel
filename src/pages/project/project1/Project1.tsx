import { useState, useRef } from 'react';
import './Project1.css';
import vd from '../../../assets/VID-20231031-WA0004.mp4';
import img1 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0001.jpg';
import img2 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0002.jpg';
import img3 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0003.jpg';
import img4 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0004.jpg';
import img5 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0005.jpg';
import img6 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0006.jpg';
import img7 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0007.jpg';
import img8 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0008.jpg';
import img9 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0009.jpg';
import img10 from '../../../assets/BASSATINE BOUSKOURA_pages-to-jpg-0010.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
        <h1 className="txt-color text-center text-4xl font-bold mb-10">GALERIE PHOTO DU PROJET</h1>
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
			<img src={img6} alt="" className="imgsec h-80 aspect-video"/>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
				{/* <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
				<h3 className="text-3xl font-bold title-text">BASSATINE ELWAHA</h3>
				<p className="my-6 dark:text-gray-900 ">BASSATINE EL WAHA redéfinis le luxe urbain moderne situé en plein cœur de la ville impériale Marrakech. Tout est conçu pour répondre aux besoins des résidents, non seulement par son design réfléchi et sophistiqué, mais surtout par l’attention portée à tous les petits détails. 
Les appartements alliant modernité et authenticité grâce au savoir faire de l’artisanat marocain, sont baignés de lumière. Studios, logements de 2 ou 3 chambres avec cuisine équipée à des prix défiant toute concurrence. 
        </p>
				{/* <button type="button" class="self-start">Action</button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={img5} alt="" className="imgsec h-80  aspect-video"/>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
				{/* <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
				<p className="my-6 dark:text-gray-900">Les résidences sont méticuleusement conçues avec des lignes épurées et moderne et une palette de matériaux riches pour le confort et l’élégance. 
Bassatine EL WAHA est un projet exceptionnel et son environnement extérieur l’est tout autant. Des espaces paysagés et sécurisés sont à votre disposition afin que puissiez profiter de l’air frais des montagnes de l’Atlas. Profitez d’une quiétude bienfaisante avec vos enfants dans les piscines à ciel ouvert ou dépensez-vous dans nos terrains de mini foot et notre circuit de jogging. 
        </p>
				{/* <button type="button" class="self-start">Action</button> */}
			</div>
		</div>

	</div>
</section>

    </>
  );
};


export default ImageSlider;





    // <div className=" mb-8">
    //     <video
    //       className="object-fill sizevd w-full"
    //       autoPlay
    //       loop
    //       muted
    //       ref={videoRef}
    //       onClick={toggleVideo}
    //     >
    //       <source src={vd} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //     <button
    //       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    //       onClick={toggleVideo}
    //     >
    //       <FontAwesomeIcon icon={isVideoPlaying ? faPause : faPlay} size="2x" />
    //     </button>
    //   </div>


    //   <div>
    //     <h1 className="text-center text-4xl font-bold mb-10">GALERIE PHOTO DU PROJET</h1>
    //   </div>




      // <section className="p-4 lg:p-8 dark:bg-white-800 dark:text-gray-100">
// 	<div class="container mx-auto space-y-12">
// 		<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
// 			<img src={img6} alt="" class="imgsec h-80 aspect-video"/>
// 			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
// 				{/* <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
// 				<h3 class="text-3xl font-bold title-text ">BASSATINE BOUSKOURA – LIVRAISON IMMEDIATE</h3>
// 				<p class="my-6 dark:text-gray-900">BASSATINE BOUSKOURA est un projet immobilier dans le grand Casablanca. Au croisement des grands axes routiers, la ville de Bouskoura est en pleine expansion. Avec sa forêt, ses centres commerciaux, sa proximité à l’aéroport international, devenir propriétaire aujourd’hui est un gage de confort, de bien-être, d’économies et d'écologie. 
// Des résidences moyen standing mais qui n’ont rien à envier aux luxueuses propriétés, espaces verts, piscines, ascenseurs, sécurité, syndic professionnel, tout est mis à votre disposition pour une vie agréable avec un budget raisonnable.

//         </p>
// 				{/* <button type="button" class="self-start">Action</button> */}
// 			</div>
// 		</div>
// 		<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
// 			<img src={img8} alt="" class="imgsec h-80 aspect-video"/>
// 			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
// 				{/* <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
// 				<p class="my-6 dark:text-gray-900">La construction respecte les dernières normes parasismiques et environnementales (logements peu énergivores). Ces normes de construction strictes garantissent aux futurs propriétaires de profiter d'un confort de vie idéal, dans des logements parfaitement conçus phoniquement et thermiquement. 
// Ce programme neuf d'habitation est livrable immédiatement. Vous souhaitez vous installer ou investir pour mettre en location ? BASSATINE BOUSKOURA est le bon choix.
// Nous proposons aussi des locaux commerciaux et bureaux. Quel que soit le bien immobilier que vous cherchez, nos équipes sont là pour vous proposer de nombreuses offres bien situées pour y habiter ou pour y implanter votre entreprise. 
//         </p>
// 				{/* <button type="button" class="self-start">Action</button> */}
// 			</div>
// 		</div>

// 	</div>
// </section>