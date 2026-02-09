import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "../Components/ProjectCard";
import BlogCard from "../Components/BlogCard";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const query = params.get("s") || ""; // Lấy từ khóa từ URL

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Gọi API tìm kiếm từ Backend
      fetch(`http://localhost:5000/api/projects/search/query?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Lỗi tìm kiếm:", err);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      {/* Nút Trở về */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-black font-lora text-lg hover:text-gray-600 mb-6 transition-colors"
      >
        <span className="mr-2 text-xl">&larr;</span>
        <span>Trở về</span>
      </button>

      <h1 className="text-3xl md:text-4xl font-bold font-lora text-center uppercase mb-2">
        Kết Quả Tìm Kiếm
      </h1>
      
      {query && (
        <p className="text-center font-lora text-gray-500 mb-10">
          Từ khóa: <span className="font-semibold text-black">"{query}"</span>
        </p>
      )}

      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          <p className="mt-2 font-lora text-gray-600">Đang tìm kiếm...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="font-lora text-gray-600 text-lg">
                Không tìm thấy dự án nào phù hợp với từ khóa này.
              </p>
              <button 
                onClick={() => navigate('/project')}
                className="mt-4 px-6 py-2 bg-black text-white font-lora text-sm uppercase hover:bg-gray-800 transition"
              >
                Xem tất cả dự án
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;