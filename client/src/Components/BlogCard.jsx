import React from 'react';
import { Link } from 'react-router-dom';

// Thêm prop id vào đây
const BlogCard = ({ id, image, title, description }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/blog/${id}`} className="block">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/blog/${id}`} className="block">
          <h3 className="text-lg font-lora font-semibold text-gray-800 hover:text-black transition-colors">
            {title}
          </h3>
        </Link>
        <div className="w-[10%] h-[3px] bg-gray-300 mb-1 mt-1"></div>
        <p className="text-gray-600 mt-2 font-lora text-sm line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;