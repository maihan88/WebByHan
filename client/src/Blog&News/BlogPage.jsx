import React, { useState, useEffect } from 'react';
import BlogCard from '../Components/BlogCard';
import { blogData } from '../Data/blogData';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: custom * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const paginatedBlogs = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto md:px-4 px-6 py-12">
      <h1 className="md:text-3xl text-2xl font-semibold text-center font-lora mb-8">
        BLOG & TIN TỨC
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedBlogs.map((post, index) => (
          <motion.div key={post.id}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          className="relative group cursor-pointer overflow-hidden"
          >
            <BlogCard
              image={post.image}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-full border ${
            currentPage === 1
              ? 'text-gray-400 font-lora border-gray-300 cursor-not-allowed'
              : 'text-black font-lora border-black'
          }`}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border ${
              currentPage === index + 1
                ? 'bg-black font-lora text-white border-black'
                : 'text-black font-lora border-black hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-full border ${
            currentPage === totalPages
              ? 'text-gray-400 font-lora border-gray-300 cursor-not-allowed'
              : 'text-black font-lora border-black'
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
