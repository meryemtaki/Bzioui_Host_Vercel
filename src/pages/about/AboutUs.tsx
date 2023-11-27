import './About.css';
import imageStory from '../../assets/story.jpg';
import aboutImg from '../../assets/about-image.jpg';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='content-about'>
        <div className='story'>
          <div className='underline'></div>
          <p>
            Bien avant le phénomène de mode Ecolo que tout le monde veut
            s’approprier aujourd’hui, le groupe <span>BZIOUI IMMO</span> a
            toujours mis un point d’honneur a faire profiter ses clients des
            bienfaits d’un habitat saint et respectueux de la nature. C’est tout
            naturellement qu’est né le concept de <span>JNANE BOUSKOURA</span>.
            Des villas très modernes dans un écrin de verdure. Le succès ne
            s’est pas fait attendre et le projet a été totalement vendu en
            quelques mois seulement.
          </p>
        </div>
      </div>
      <div className='title'>
        <p className='title-text'>
          <span>|</span> L'histoire du Groupe BZIOUI IMMO<span>|</span>
        </p>
        <p className='para'>
          Groupe BZIOUI IMMO a débuté dans les années quatre-vingt au quartier
          des hôpitaux. Là est né le concept novateur des Résidences Du Palais
          qui a su allier la tradition et la modernité en proposant à ses
          clients d’alors des logements de grand luxe. Au cœur de cette période
          qui a vu l’invention du skateboard et du walkman, les Résidences du
          Palais furent l’étincelle de l’expansion hallucinante du groupe BZIOUI
          IMMO. Ces résidences à l’architecture avant-gardiste et qui n’ont pas
          pris une ride, ont été construites dans les quartiers les plus chics
          de la capitale économique. La vision du fondateur du groupe, M. Bzioui
          Youssef, l’a poussé a développer en parallèle des logements de grands
          luxe, l’immobilier professionnel et les villas.
        </p>
      </div>
      <div className='content'>
        <div className='text'>
          <p className='para1'>
            Aujourd’hui nous pensons déjà à la ville de demain, aux cités pour
            les nouvelles générations. En tant que promoteur engagé, nous
            participons au développement et à l’embellissement des villes au
            travers de nos projets immobiliers en redéfinissant les codes de
            notre métier. Tout cela ne c’est pas fait en un jour. C’est plus de
            30 années d’expérience dans un Maroc en pleine mutation économique.
            L’histoire du Groupe BZIOUI IMMO a débuté dans les années quatre-vingt
            au quartier des hôpitaux.
          </p>
        </div>
        <div className='image'>
          <img src={imageStory} alt='image illustration why us?' />
        </div>
      </div>
      <div className='last-content'>
        <div className='image'>
          <img src={aboutImg} alt='image illustration why us?' />
        </div>
        <div className='text'>
          <p className='para1'>
            2017 fut une date charnière dans le parcours de notre groupe
            immobilier avec le lancement de BASSATINE BOUSKOURA. Un chantier
            titanesque de plusieurs milliers de logements et de commerces. Le
            concept est humaniste avant tout avec pour principale défit:
            «Inventer des logements dignes et décents pour chaque citoyen à des
            prix raisonnables » Le pari a été gagné! Nous avons construit des
            résidences fermées, avec piscines, ascenseurs, espaces verts,
            commerces et toutes les commodités. A partir de 250.000 dh et pour
            la première fois au Maroc le logement économique et social a
            retrouvé ses lettres de noblesse grâce à un groupe qui a mis
            l’humain et la nature au cœur de ses préoccupations. Malgré les
            innombrables contraintes et l’apparition du Covid-19 en 2020, le
            Groupe BZIOUI IMMO a livré les premières unités en Avril 2021. Et
            l’histoire continue….
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
