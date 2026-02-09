import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dữ liệu testimonial
const CustomerRating = [
  {
    id: 1,
    name: "Chị Phương",
    text: "Là một người hoạt động trong lĩnh vực làm đẹp nên tiêu chuẩn về cái đẹp của chị rất cao và Len đã đáp ứng được tất cả yêu cầu của chị. Chúc cho Len ngày càng phát triển hơn nữa.\nChị nghĩ là mình chỉ cần tập trung kiếm tiền thôi còn làm nhà đã có Len lo rồi",
    image: "https://lendecor.vn/wp-content/uploads/2024/02/Chi-Phuong-280x280.jpg"
  },
  {
    id: 2,
    name: "Anh Nam",
    text: "Tôi biết Len qua Facebook, nhưng mà đi đến quyết định lựa chọn Len cho công trình của mình thì phải là sau khi xem công trình thực tế. Tôi xem đến tận 5 căn của Len, từ căn đang xây thô, căn đã hoàn thiện cho đến căn đã được sử dụng. Sau khi xem xong, tôi cảm thấy đúng với nhu cầu của tôi.",
    image: "https://lendecor.vn/wp-content/uploads/2024/02/Anh-Nam-feeback-280x280.webp"
  },
  {
    id: 3,
    name: "Anh Đức Anh",
    text: "Ban đầu mình chưa có ý tưởng chi tiết. Các bạn trong team Len đã hỗ trợ mình nhiều trong việc đưa ra ý tưởng từ ngoại thất cho đến nội thất. Khi Len đưa cho mình bản thiết kế là mình đồng ý luôn. Team Len từ khâu thiết kế đến sau khi hoàn thành công trình đã hỗ trợ rất nhanh chóng. Đội ngũ thi công tại công trường rất là gọn gàng và nhiệt tình",
    image: "https://lendecor.vn/wp-content/uploads/2024/02/Anh-Duc-Anh-280x280.webp"
  },
  {
    id: 4,
    name: "Anh Thuận",
    text: "Cám ơn anh Tuyền, các bạn thiết kế, thi công đã chăm chút hoàn thiện cho căn nhà ở mức độ là trên 90% so với thiết kế ban đầu. Tôi hy vọng sẽ có cơ hội gặp lại Len trong những công trình sau",
    image: "https://lendecor.vn/wp-content/uploads/2024/01/H5.1.svg"
  },
  {
    id: 5,
    name: "Anh Thịnh",
    text: "Cách đây 6 năm, đó là một cái gì đó rất mới mẻ với em khi làm nhà. Em tìm những giải pháp chú trọng vào chi tiết và Len cho thấy được điều đấy. Sau 6 năm thì thường người ta sẽ thay đổi 1 đội thi công khác, nhưng em nghĩ rằng mình đang làm căn nhà mới của mình theo phong cách của Len và cũng không có vấn đề gì trong quá trình làm việc với Len, nên cũng chẳng có lý do gì để mình không tìm đến Len đầu tiên cả",
    image: "https://lendecor.vn/wp-content/uploads/2024/02/Anh-Thinh-fb-280x280.webp"
  },
  {
    id: 6,
    name: "Chị Trang",text: "Điều tiên quyết để chị lựa chọn Len's Decor là sự tử tế, sự chân thành đối với khách hàng. Đây là căn thứ 3 chị xây dựng và cũng là căn chị ưng ý nhất. Chị được tiếp xúc với các bạn là những người hết lòng vì khách hàng, chỉn chu ngay từ đầu cho đến cả khi đã bàn giao nhà xong. Đó là cái duyên cái phúc của chị để tìm được đội ngũ như Len's Decor.",
    image: "https://lendecor.vn/wp-content/uploads/2024/02/Chi-Trang-fb-280x280.webp" 
  },
  {
    id: 7,
    name: "Anh Kiệt",
    text: `"Từ lúc hình thành bản vẽ cho đến lúc hoàn thành công trình, Len rất chu đáo và tận tâm. 
Mỗi người công nhân ở đây được bố trí công việc, phối hợp nhau rất hài hòa để công việc diễn ra tốt đẹp. 
Tinh thần làm việc của anh em rất đáng hoan nghênh và ghi nhận, nỗ lực tăng ca. Tôi rất quý tinh thần của anh em"`,
    image: "https://lendecor.vn/wp-content/uploads/2024/12/Anh-Kiet-280x280.webp" 
  }
];

const textSlideVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


const imagePopVariant = {
  hidden: { opacity: 0.5, scale: 0.85 },
  visible: custom => ({
    opacity: custom ? 1 : 0.5,
    scale: custom ? 1 : 0.85,
    transition: {
      opacity: { duration: 0.8, ease: 'easeOut' },
      scale: { duration: 0.8 }
    }
  })
};

const mobileFadeVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const RatingSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const arrowColor = "#000000";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-10 w-full box-border block">
      {/* Nội dung chính */}
      <div className="box-border align-middle content-center self-center justify-center mx-auto max-w-[1250px] flex flex-row flex-wrap">
        
        {/* Phần mô tả */}
        <motion.div
          className="md:mt-56 block box-border relative basis-[100%] max-w-[100%] md:basis-[42%] md:max-w-[42%] m-0 px-[10px] pb-[10px]"
          variants={textSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        > 
          <div className="ml-auto mr-0 md:text-left text-center relative w-full">
            <h2 className="font-semibold font-lora text-[24px] md:text-[36px] mb-[18px] mt-0 md:leading-[55px]">
              KHÁCH HÀNG NÓI GÌ VỀ LEN'S DECOR?
            </h2>
            <div className="w-[30%] h-[2px] md:mx-0 mx-[35%] bg-black mb-6"></div>
            <div className="mt-8"></div>
            <p className="text-black mb-5 font-lora md:px-0 px-3 md:mr-[35px]">
              Hành trình kiến tạo nên tổ ấm cho mỗi khách hàng là khác nhau,
              nhưng sự hài lòng của khách hàng luôn là điểm đến cuối cùng mà đội ngũ chúng tôi luôn hướng tới.
            </p>
            <div className="mt-8"></div>
            <Link to="https://www.youtube.com/@lensdecor">
              <button className="bg-black text-white px-[40px] py-[8px] hover:bg-gray-800 transition-colors font-lora md:block hidden">
                XEM TRÊN YOUTUBE
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Phần swiper */}
        <div className="relative w-full md:basis-[58%] md:max-w-[58%] m-0">
          <div className={`relative ${isMobile ? 'min-h-[500px]' : 'min-h-[700px]'}`}>
              {/* Desktop Swiper (Vertical) */}
              {!isMobile && (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  direction="vertical"
                  slidesPerView={2}
                  centeredSlides={true}
                  loop={true}
                  allowTouchMove={true}
                  slideToClickedSlide={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation={{
                    nextEl: '.swiper-button-next-custom-desktop',
                    prevEl: '.swiper-button-prev-custom-desktop',
                  }}
                  pagination={{
                    el: '.vertical-pagination',
                    clickable: true,
                    verticalClass: 'swiper-pagination-vertical',
                  }}
                  spaceBetween={40}
                  style={{ height: '700px', padding: '0px 10px' }}
                  className="h-full"
                >
                  {CustomerRating.map((customer, index) => (
                    <SwiperSlide
                      key={customer.id}
                      className="transition-all duration-300 h-auto"
                    >
                       <motion.div
                       variants={imagePopVariant}
                        custom={activeIndex === index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                       className="pointer-events-none bg-[#f8f4ec] w-full mt-[5px] h-[350px] p-8 shadow-xl"
                     >
                     
                          {/* Wrapper for entire content */}
                          <div className="flex flex-col h-full pt-9 pl-12 pb-7 pr-5">
                            {/* Text Section */}
                            <div className="flex-1 text-left mb-4">
                              <p className="pointer-events-none text-[16px] font-lora text-black leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                                {customer.text}
                              </p>
                            </div>

                            {/* Quote Icon and Customer Info */}
                            <div className="flex items-center justify-between mt-auto">
                              {/* Customer Info */}
                              <div className="flex items-center">
                                <div className="w-[80px] h-[80px] overflow-hidden rounded-full shadow-md">
                                  <img
                                    src={customer.image}
                                    className="w-full h-full object-cover rounded-full"
                                    alt={customer.name}
                                  />
                                </div>
                                <div className="ml-4">
                                  <h3 className="text-[16px] font-lora font-semibold text-[#4a3b2f]">{customer.name}</h3>
                                </div>
                              </div>

                              {/* Decorative Quote Icon */}
                              <div className="pr-18">
                                <img src="https://lendecor.vn/wp-content/uploads/2024/01/Group-1.svg" alt="Quote Icon" className="w-[70px] h-[70px]" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {/* Mobile Swiper (Horizontal) */}
              {isMobile && (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  direction="horizontal"
                  slidesPerView={1}
                  centeredSlides={true}
                  loop={true}
                  allowTouchMove={true}
                  slideToClickedSlide={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation={{
                    nextEl: '.swiper-button-next-custom-mobile',
                    prevEl: '.swiper-button-prev-custom-mobile',
                  }}
                  pagination={true}
                  className="h-full mobile-swiper"
                  spaceBetween={80}
                  style={{ height: '500px', padding: '0px 20px' }}
                >
                  {CustomerRating.map((customer, index) => (
                    <SwiperSlide
                      key={customer.id}
                      className="transition-all duration-300 h-auto"
                    >
                      <motion.div
                        variants={mobileFadeVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-[#f8f4ec] h-[420px] shadow-lg mx-2"
                      >
                        {/* Wrapper for entire content */}
                        <div className="flex flex-col h-full pt-6 px-6 pb-4">
                          {/* Text Section */}
                          <div className="flex-1 text-left mb-4">
                            <p className="text-[16px] font-lora text-black leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                              {customer.text}
                            </p>
                          </div>

                          {/* Customer Info */}
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center">
                              <div className="w-[64px] h-[64px] overflow-hidden rounded-full shadow-md">
                                <img src={customer.image}
                                  className="w-full h-full object-cover rounded-full"
                                  alt={customer.name}
                                />
                              </div>
                              <div className="ml-4">
                                <h3 className="text-[16px] font-lora font-semibold text-[#4a3b2f]">{customer.name}</h3>
                              </div>
                            </div>
                            
                            {/* Quote Icon */}
                            <div>
                              <img src="https://lendecor.vn/wp-content/uploads/2024/01/Group-1.svg" alt="Quote Icon" className="w-[40px] h-[40px]" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {/* Desktop Navigation */}
              {!isMobile && (
                <>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[210px] z-20 swiper-button-prev-custom-desktop bg-transparent w-10 h-10 flex items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
                      <path d="M15 19L8 12L15 5" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[200px] z-20 swiper-button-next-custom-desktop bg-transparent w-10 h-10 flex items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
                      <path d="M9 5L16 12L9 19" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="vertical-pagination swiper-pagination-vertical absolute right-[-4%] top-[39%] z-20 flex flex-col  gap-3"></div>
                </>
              )}

              {/* Mobile Navigation Arrows */}
              {isMobile && (
                <>
                  <div className="absolute top-1/2 left-0 -translate-y-[60px] z-20 swiper-button-prev-custom-mobile bg-transparent w-10 h-10 flex items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M15 19L8 12L15 5" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 right-0 -translate-y-[60px] z-20 swiper-button-next-custom-mobile bg-transparent w-10 h-10 flex items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5L16 12L9 19" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </>
              )}
            </div>
        </div>

        {/* Mobile YouTube Button */}
        <div className="w-full flex justify-center mt-6 mb-8">
          <Link to="https://www.youtube.com/@lensdecor" className="w-full px-8">
            <button className="bg-black text-white px-[40px] py-[8px] hover:bg-gray-800 transition-colors font-lora md:hidden mx-auto block w-full">
              XEM TRÊN YOUTUBE
            </button>
          </Link>
        </div>
      </div>

      <style>
        {`
          /* Desktop Vertical Pagination */
          .swiper-pagination-vertical .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #000;
            opacity: 0.4;
            border-radius: 50%;
            transition: opacity 0.3s ease, transform 0.3s ease;
          }

          .swiper-pagination-vertical .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(2.0);
          }
          
          /* Mobile Horizontal Pagination */
          .mobile-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #ccc;
            opacity: 0.6;
            border-radius: 50%;
            display: inline-block;
            margin: 0 4px;
            transition: opacity 0.3s ease, transform 0.3s ease;
            border: 1px solid #ddd;
          }
          
          .mobile-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            background: #000;
            transform: scale(1.5);
          }
          
          .mobile-swiper .swiper-pagination {
            bottom: 15px;
          }
        `}
      </style>
    </div>
  );
};

export default RatingSlide;