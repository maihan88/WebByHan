import { useRef } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import IntroCaption from "../Introduction/IntroCaption";
import MeetOurTeam from "../Introduction/MeetOurTeam";
import FloatingContact from "../Components/FloatingContact";

const Introduction = () => {
    const contentRef = useRef(null);
    
    const subtitleText = "BÊN BÍ THEO ĐUỔI BỐN PHẦN ẤM ÊM, LEN'S DECOR Ở ĐÂY ĐỂ GIÚP BẠN TẠO NÊN NHỮNG KHÔNG GIAN THOẢI MÁI VÀ HẠNH PHÚC, LÀ CHỐN MONG VỀ VÀ MUỐN GẮN BÓ NHIỀU HƠN.";

    return (
        <div className="w-screen h-screen">
            <FloatingContact />
            <Header />
            <Banner 
                        title="VỀ CHÚNG TÔI" 
                        subtitle={subtitleText}
                        backgroundImageDesktop="https://lendecor.vn/wp-content/uploads/2024/05/z5011640169101_c1032521087fc5c4f2cd33457689cdc9-jpg-e1715918633509.webp"
                        backgroundImageMobile="https://lendecor.vn/wp-content/uploads/2024/05/z5011640169101_c1032521087fc5c4f2cd33457689cdc9-jpg-e1715918633509.webp"
                        scrollRef={contentRef}
            />
            <div className="relative z-10 overflow-x-hidden bg-white"ref={contentRef}>
                <section className="relative pt-[30px] pb-[30px]">
                    <div
                        className="
                          absolute inset-0
                          overflow-hidden
                          bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So3.svg')]
                          bg-left-top
                          bg-[length:34%_auto]
                          bg-no-repeat
                        "
                    ></div>
                    <IntroCaption />
                </section>
                <div className="relative z-10 bg-white">
                <section className="relative pt-[30px] pb-[30px]">
                    <div
                        className="
                          absolute inset-0
                          overflow-hidden
                          bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So1.svg')]
                          bg-left-top
                          bg-[length:34%_auto]
                          bg-no-repeat
                        "
                    ></div>
                    <MeetOurTeam />
                </section>    
                <Footer />
            </div>
        </div>
    </div>
    );
};

export default Introduction;