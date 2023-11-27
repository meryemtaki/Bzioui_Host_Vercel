import './Home.css'

import Banner from '../../components/banner/Banner'
import Experiences from '../../components/experiences/Experiences'
import Partenaires from '../../components/partenaires/Partenaires'
import Presentation from '../../components/presentation/Presentation'
import Projects from '../../components/projects/Projects'
import Testimonials from '../../components/testimonials/Testimonials'
import Whyus from '../../components/whyUs/Whyus'

const Home = () => {
  return (
    <div>
      <Banner />
      <Presentation />
      <Projects />
      <Whyus />
      <Experiences />
      <Testimonials />
      <Partenaires />
    </div>
  )
}

export default Home
