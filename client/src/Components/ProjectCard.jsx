import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    // Sử dụng _id từ MongoDB để tạo link
    <Link 
      to={`/project/${project._id}`} 
      className="block mb-4 cursor-pointer"
    >
      <div className="bg-gray-100 hover:shadow-lg transition-shadow duration-300">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-64 object-cover"
        />
        
        <h3 className="mt-2 py-4 md:text-[18px] font-lora text-center font-semibold text-gray-800 px-2">
          {project.name}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;