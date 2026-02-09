import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import FloatingContact from '../Components/FloatingContact';

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
                const data = await res.json();
                setBlog(data);
                setLoading(false);
            } catch (error) {
                console.error("Lỗi khi fetch blog:", error);
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) return <div className="text-center pt-20">Đang tải bài viết...</div>;
    if (!blog) return <div className="text-center pt-20">Không tìm thấy bài viết</div>;

    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <FloatingContact />
            <Header />
            <Banner 
                title={blog.title}
                backgroundImageDesktop={blog.image}
                backgroundImageMobile={blog.image}
                scrollRef={contentRef}
            />
            
            <div className="relative bg-white max-w-4xl mx-auto px-4 py-12" ref={contentRef}>
                <h1 className="text-3xl md:text-4xl font-lora font-bold text-gray-900 mb-4 leading-tight">
                    {blog.title}
                </h1>
                <p className="text-gray-500 italic mb-8">Ngày đăng: {new Date(blog.createdAt).toLocaleDateString('vi-VN')}</p>
                
                {/* Render nội dung HTML từ database */}
                <div 
                    className="prose prose-lg max-w-none text-gray-700 font-lora"
                    dangerouslySetInnerHTML={{ __html: blog.content }} 
                />
            </div>
            <Footer />
        </div>
    );
}

export default BlogDetail;