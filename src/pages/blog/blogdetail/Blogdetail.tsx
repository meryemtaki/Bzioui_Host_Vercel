import React from 'react';
import { useParams } from 'react-router-dom';
import './Blogdetail.css';
import imgblog from '../../../assets/project2.png';
import imgblog2 from '../../../assets/project3.png';
import imgblog3 from '../../../assets/project4.png';
import Comment from '../Comment/Comment';
import Leavcomment from '../Leavecomment/Leavcomment';


interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  description: JSX.Element;
}

const createBlogPost = (id: string, title: string, date: string, image: string, description: JSX.Element): BlogPost => ({
  id,
  title,
  date,
  image,
  description,
});

const blogPosts: BlogPost[] = [
  createBlogPost(
    'post1',
    'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'October 1, 2023',
    imgblog,
<div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img className="ml-80 pl-7" src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <img src={imgblog3} alt="Image 1" />
        <img src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        
        <blockquote className=" text-xl italic font-semibold text-gray-900 dark:text-black">
            <svg className=" w-11 h-12 text-gray-400 dark:text-gray-600 pt-8 pl-4 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <p className="quototxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit assumenda optio pariatur illo suscipit, quaerat tempora aliquam quod dolorem odio sapiente sint error hic excepturi at quam minus maiores explicabo!</p>
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
      </div>
    ),
  
  createBlogPost(
    'post2',
    'Lorem ipsum dolor sit amet, consectetur',
    'October 1, 2023',
    imgblog2,
    
<div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img className="ml-80 pl-7" src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <img src={imgblog3} alt="Image 1" />
        <img src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        
        <blockquote className=" text-xl italic font-semibold text-gray-900 dark:text-black">
            <svg className=" w-11 h-12 text-gray-400 dark:text-gray-600 pt-8 pl-4 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <p className="quototxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit assumenda optio pariatur illo suscipit, quaerat tempora aliquam quod dolorem odio sapiente sint error hic excepturi at quam minus maiores explicabo!</p>
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
      </div>
    ),
  
  createBlogPost(
    'post3',
    'Lorem ipsum dolor sit amet, consectetur',
    'October 1, 2023',
    imgblog3,
<div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img className="ml-80 pl-7" src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <img src={imgblog3} alt="Image 1" />
        <img src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        
        <blockquote className=" text-xl italic font-semibold text-gray-900 dark:text-black">
            <svg className=" w-11 h-12 text-gray-400 dark:text-gray-600 pt-8 pl-4 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <p className="quototxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus pariatur enim error ut sint molestiae provident. Enim, quo iste, accusantium libero quis sed amet quam architecto explicabo, odio perferendis.</p>
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
      </div>
      
    ),
  
];

const Blogdetail: React.FC = () => {
  const { postId } = useParams();

  const selectedBlogPost = blogPosts.find(post => post.id === postId);

  if (!selectedBlogPost) {
    return <div>Post not found</div>;
  }

  const { title, image, description } = selectedBlogPost;

  return (
    <>
      <div className="blogdetail">
        <div className="blogdetail-image">
          <img className='imgdetail' src={image} alt={title} style={{ width: '100%' }} />
        </div>
        <div className="container">
            <div className="blogdetail-header">
              <button className="btntips">Tips</button>
              <h1>{title}</h1>
              <div className="cnt flex items-center space-x-4">
                <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-3 -mb-4   h-8 w-13" alt="" loading="lazy"/>
                <button>
                  Admin
                </button>
                <p>{selectedBlogPost.date}</p>
                <p>0 Commentaire</p>
              </div>
            </div>
            <div className="blogdetail-content ">
              {description}
            </div>
        </div>

        <div className="post_tags_single"> 
          <a className="brdr" href="#" rel="tag">ideas</a>
          <a className="brdr" href="#" rel="tag">interior</a>
          <a className="brdr" href="#" rel="tag">news</a>
        </div>

      <div className=" p-6 flex items-center justify-center">

        <div className="iconlike flex max-w-screen-lg ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-6 pr-2 mt-2 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <h3 className="mt-2">0</h3>
        <div>

        <div className="iconsm flex flex-wrap justify-center gap-2 ">
          <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </button>

          <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </button>

          <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/></g></svg>
          </button>
        </div>
    </  div>
        </div>

        </div>


      </div>
      <Comment/>
      <Leavcomment/>
    </>
  );
};

export default Blogdetail;
