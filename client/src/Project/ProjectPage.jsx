import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projects } from '../Data/projects';
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
    scale: 1.03,
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const ProjectsPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProjects = selectedTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedTab);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageTitle = () => {
    switch(selectedTab) {
      case 'real': return 'DỰ ÁN THỰC TẾ';
      case '3d': return 'DỰ ÁN 3D';
      default: return "DỰ ÁN CỦA LEN'S DECOR";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto md:px-2 px-3 py-10">
      <h1 className="md:text-3xl text-2xl font-bold font-lora text-center uppercase mb-6">
        {getPageTitle()}
      </h1>
      <div className="md:w-24 md:h-[3px] w-12 h-[1.5px] bg-black mx-auto mb-8"></div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 md:space-x-6">
        {['all', 'real', '3d'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setCurrentPage(1);
            }}
            className={`md:px-6 px-2 py-2 text-lg ${
              selectedTab === tab 
                ? ' text-black md:text-[22px] text-[18px] font-semibold font-lora' 
                : ' text-gray-400 md:text-[22px] text-[18px] font-semibold font-lora hover:text-black'
            } rounded-full`}
          >
            {tab === 'all' ? 'Tất cả dự án' : 
             tab === 'real' ? 'Hình ảnh thực tế' : 
             'Hình ảnh 3D'}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}  // Truyền index vào variants
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            className="relative group cursor-pointer overflow-hidden"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>


      {/* Pagination */}
      <div className=" flex justify-center items-center mt-8 space-x-2 md:space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`md:px-4 px-1 py-2 rounded ${
            currentPage === 1 ? 'font-lora md:text-[20px] bg-transparent text-gray-400 cursor-not-allowed' : 'md:text-[20px] font-lora bg-transparent text-gray-700 hover:text-black'
          }`}
        >
          &laquo; Trước
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === index + 1 ? 'text-black font-lora text-[20px]' : ' text-gray-400 hover:text-black font-lora'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`md:px-4 px-1 py-2 rounded ${
            currentPage === totalPages ? 'md:text-[20px] font-lora bg-transparent text-gray-400 cursor-not-allowed' : 'md:text-[20px] font-lora bg-transparent text-gray-700 hover:text-black'
          }`}
        >
          Sau &raquo;
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
