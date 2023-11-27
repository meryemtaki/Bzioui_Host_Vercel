import './Blog.css';
import BlogPost from '../blogpost/BlogPost';
import imgblog from '../../../assets/project2.png';
import imgblog2 from '../../../assets/project3.png';
import imgblog3 from '../../../assets/project4.png';
import Blogsidebar from '../blogsidebar/Blogsidebar';

function Blog() {
  const blogPosts = [
    {
      id: 'post1',
      title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
      date: 'October 1, 2023',
      image: imgblog,
      description: 'Bzioui Immobilier, c’est d’abord une marque de fabrique reconnue : des résidences qui donnent la priorité aux espaces verts et aux jardins suspendus tout en étant situées à des adresses de prestige, au cœur des villes.',
    },
    {
      id: 'post2',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      date: 'October 1, 2023',
      image: imgblog2,
      description: 'Bzioui Immobilier, c’est d’abord une marque de fabrique reconnue : des résidences qui donnent la priorité aux espaces verts et aux jardins suspendus tout en étant situées à des adresses de prestige, au cœur des villes.',
    },
    {
      id: 'post3',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      date: 'October 1, 2023',
      image: imgblog3,
      description: 'Bzioui Immobilier, c’est d’abord une marque de fabrique reconnue : des résidences qui donnent la priorité aux espaces verts et aux jardins suspendus tout en étant situées à des adresses de prestige, au cœur des villes.',
    },
    
  ];

  return (
    <div className="container">
      <div className="sidebar">
           <h1>Recherche</h1>
        <input className="searshblog" type="text" placeholder="Recherche" />
        <h2>recentes poste</h2>
        {blogPosts.map((post, index) => (
          <Blogsidebar
            key={index}
            title={post.title}
            date={post.date}
            image={post.image}
          />
        ))}       
      </div>
      <div className="content">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            postId={post.id}
            title={post.title}
            date={post.date}
            image={post.image}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
