import { useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import ContactPage from '../Contact/ContactPage';
import FloatingContact from '../Components/FloatingContact';

function Contact() {
    const contentRef = useRef(null);

    return (
        <div className="w-screen h-screen">
            <FloatingContact />
            <Header />
            <Banner 
                title="LIÊN HỆ" 
                backgroundImageDesktop="https://lendecor.vn/wp-content/uploads/2024/02/banner-lien-he-len.jpg"
                backgroundImageMobile="https://lendecor.vn/wp-content/uploads/2024/02/lien-he-voi-len.jpg"
                scrollRef={contentRef}
            />
            <div className="relative bg-white" ref={contentRef}>
                <section className="relative pt-[10px] pb-[80px] z-10">
                    <div className="relative z-10">
                        <ContactPage/>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;