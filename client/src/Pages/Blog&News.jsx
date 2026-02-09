import { useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import BlogPage from '../Blog&News/BlogPage';
import FloatingContact from '../Components/FloatingContact';

const BlogNews = () => {
    const contentRef = useRef(null);
    const subtitleText = "MỖI CÔNG TRÌNH KIẾN TRÚC ĐỀU MANG TRONG MÌNH MỘT CÂU CHUYỆN RIÊNG.";

    return (
        <div>
            <FloatingContact />
            <Header />
            <Banner 
                title="BLOG & TIN TỨC"
                subtitle={subtitleText}
                backgroundImageDesktop="https://lendecor.vn/wp-content/uploads/2024/02/8-7-1366x910.jpg"
                backgroundImageMobile="https://lendecor.vn/wp-content/uploads/2024/02/57-3-911x1366.jpg"
                scrollRef={contentRef}
            />
            <div className="relative bg-white" ref={contentRef}>
                <section className="relative md:pt-[30px] pb-[30px] z-10">
                    <div className="relative z-10">
                        <BlogPage/>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default BlogNews;