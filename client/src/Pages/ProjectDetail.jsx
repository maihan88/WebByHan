import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import FloatingContact from '../Components/FloatingContact';

function ProjectDetail() {
    const { id } = useParams(); // Lấy ID từ URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/projects/${id}`);
                const data = await res.json();
                setProject(data);
                setLoading(false);
            } catch (error) {
                console.error("Lỗi khi fetch project:", error);
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) return <div className="text-center pt-20">Đang tải dữ liệu...</div>;
    if (!project) return <div className="text-center pt-20">Không tìm thấy dự án</div>;

    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <FloatingContact />
            <Header />
            <Banner 
                title={project.name} 
                backgroundImageDesktop={project.image}
                backgroundImageMobile={project.image}
                scrollRef={contentRef}
            />
            
            <div className="relative bg-white container mx-auto px-4 py-10" ref={contentRef}>
                {/* Thông tin chung */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <h2 className="text-3xl font-lora font-bold mb-4 text-gray-800">{project.name}</h2>
                        <ul className="space-y-2 text-gray-600 font-lora">
                            <li><strong>Địa điểm:</strong> {project.location || "Đang cập nhật"}</li>
                            <li><strong>Diện tích:</strong> {project.area || "Đang cập nhật"}</li>
                            <li><strong>Năm thực hiện:</strong> {project.year || "2025"}</li>
                            <li><strong>Hạng mục:</strong> {project.category === 'real' ? 'Thi công thực tế' : 'Thiết kế 3D'}</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <div>
                        <img src={project.image} alt="Main" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Gallery Ảnh */}
                <h3 className="text-2xl font-lora font-bold mb-6 text-center">HÌNH ẢNH CHI TIẾT</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery && project.gallery.length > 0 ? (
                        project.gallery.map((img, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                                <img src={img} alt={`Gallery ${index}`} className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full col-span-3">Chưa có hình ảnh chi tiết.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectDetail;