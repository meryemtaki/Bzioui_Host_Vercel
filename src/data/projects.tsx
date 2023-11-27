import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'


interface Project {
  imageRoute: string
  name: string
}

export const projects: Project[] = [
  {
    imageRoute: project1,
    name: 'BASSATINE BOUSKOURA',
  },
  {
    imageRoute: project2,
    name: 'BASSATINE ELWAHA',
  },
  {
    imageRoute: project3,
    name: 'Le Patio',
  },
  {
    imageRoute: project4,
    name: 'LE LOTUS',
  },
  

]
