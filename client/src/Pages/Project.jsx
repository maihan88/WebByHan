import { useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import ProjectPage from '../Project/ProjectPage';
import FloatingContact from '../Components/FloatingContact';

function Project() {
    const contentRef = useRef(null);

    return (
        <div className="w-screen h-screen">
            <FloatingContact />
            <Header />
            <Banner 
                title="DỰ ÁN" 
                backgroundImageDesktop="https://lendecor.vn/wp-content/uploads/2024/02/9-2.jpg"
                backgroundImageMobile="https://lendecor.vn/wp-content/uploads/2024/01/duan-len-mobi.jpg"
                scrollRef={contentRef}
            />
            <div className="relative bg-white" ref={contentRef}>
                <section className="relative md:pt-[30px] pb-[30px] z-10">
                    <div
                        className="
                          absolute inset-0
                          overflow-hidden
                          bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So3.svg')]
                          bg-left-top
                          bg-[length:34%_auto]
                          bg-no-repeat
                          z-0
                        "
                    ></div>
                    <div className="relative z-10">
                        <ProjectPage />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Project;
