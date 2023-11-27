import React from 'react';
import './Blogsidebar.css';

interface BlogsidebarProps {
  title: string;
  date: string;
  image: string;
}

const Blogsidebar: React.FC<BlogsidebarProps> = ({ title, date, image }) => {
  return (
    <div className="blogsidebar">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
};

export default Blogsidebar;
