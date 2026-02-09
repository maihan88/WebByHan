import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home.jsx';
import Introduction from './Pages/Introduction.jsx';
import Project from './Pages/Project.jsx';
import ProjectDetail from './Pages/ProjectDetail.jsx'; // Trang chi tiết dự án
import BlogNews from './Pages/Blog&News.jsx';
import BlogDetail from './Pages/BlogDetail.jsx'; // Trang chi tiết Blog (Sẽ tạo ở bước 4)
import Contact from './Pages/Contact.jsx';
import SearchResults from './Pages/SearchResults.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Introduction />} />
        
        {/* Route cho Project */}
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} /> {/* Route động */}

        {/* Route cho Blog */}
        <Route path="/blog-news" element={<BlogNews />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> {/* Route động */}

        <Route path="/lien-he" element={<Contact />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;