import { useState, useRef } from 'react';
import '../project1/Project1.css';
import vd from '../../../assets/VID-20231031-WA0007.mp4'
import img1 from '../../../assets/plaquette lotus (1)-01.jpg';
import img2 from '../../../assets/plaquette lotus (1)-02.jpg';
import img3 from '../../../assets/plaquette lotus (1)-03.jpg';
import img4 from '../../../assets/plaquette lotus (1)-04.jpg';
import img5 from '../../../assets/plaquette lotus (1)-05.jpg';
import img6 from '../../../assets/plaquette lotus (1)-06.jpg';
import img7 from '../../../assets/plaquette lotus (1)-07.jpg';
import img8 from '../../../assets/plaquette lotus (1)-08.jpg';
import img9 from '../../../assets/plaquette lotus (1)-09.jpg';
import img10 from '../../../assets/plaquette lotus (1)-10.jpg';
import img11 from '../../../assets/plaquette lotus (1)-11.jpg';
import img12 from '../../../assets/plaquette lotus (1)-12.jpg';
import img13 from '../../../assets/plaquette lotus (1)-12.jpg';
import img14 from '../../../assets/plaquette lotus (1)-14.jpg';



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
				{/* <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
				<h3 className="text-3xl font-bold title-text">LE LOTUS </h3>
				<p className="my-6 dark:text-gray-900">Succombez à notre résidence de prestige au cœur de Bouskoura, LE LOTUS. Située à côté des grands axes, de grands centres commerciaux, hôpitaux, écoles et universités, nous avons conçu une résidence aux appartements spacieux qui se distinguent par leur qualité en termes de prestations, d’architectures et d’emplacement.
        </p>
				{/* <button type="button" class="self-start">Action</button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={img1} alt="" className="imgsec h-80 aspect-video"/>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-200">
				{/* <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
				<p className="my-6 dark:text-gray-900">
        Appartements contemporains aux équipements de luxe et au prestige certain. Si vous rêvez de jouir d’une généreuse terrasse, d’une cour ensoleillée ou d'un jardin paisible, si vous imaginez habiter un lieu bénéficiant de commerces de proximités, d’écoles et de toutes autres commodités essentielles à votre bien-être, LE LOTUS VOUS OFFRE tous ce dont vous rêvez.
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
