import testi1 from '../assets/testi1.png'
import testi2 from '../assets/testi2.png'
import testi3 from '../assets/testi3.png'

interface Testimonial {
  title: string
  para: string
  imageUrl: string
  name: string
}

export const testimonials: Testimonial[] = [
  {
    title: 'Professional Partner',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.',
    imageUrl: testi1,
    name: 'Client 1',
  },
  {
    title: 'Incredible Experience',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.',
    imageUrl: testi2,
    name: 'Client 2',
  },
  {
    title: 'Dependable & Responsive',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.',
    imageUrl: testi3,
    name: 'Client 3',
  },
  {
    title: 'Professional Partner',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.',
    imageUrl: testi1,
    name: 'Client 4',
  },
  {
    title: 'Incredible Experience',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.',
    imageUrl: testi2,
    name: 'Client 5',
  },
  {
    title: 'Dependable & Responsive',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.',
    imageUrl: testi3,
    name: 'Client 6',
  },
]
