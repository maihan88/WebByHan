import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ThietKeNoiThat from '../Images/thiet-ke-noi-that-kien-truc.png';
import ThiCongXayDung from '../Images/thi-cong-xay-dung.png';
import NoiNgoaiThat from '../Images/thi-cong-noi-ngoai-that.png';
import CaiTaoNoiThat from '../Images/cai-tao-noi-ngoai-that.png';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    id: 1,
    image: ThietKeNoiThat,
    title: 'Thiết kế Kiến trúc - Nội thất',
    description: 'Các nhà thiết kế của Len\'s Decor tận dụng kỹ năng thiết kế và sức sáng tạo để tạo nên bản thiết kế 3D kiến trúc - nội thất, đáp ứng đồng thời về tính thẩm mỹ và công năng sử dụng. Mỗi không gian hứa hẹn mang đến trải nghiệm sống tuyệt hảo cho từng đối tượng khách hàng khác nhau.'
  },
  {
    id: 2,
    image: ThiCongXayDung,
    title: 'Thi công xây dựng',
    description: 'Với đội ngũ thi công lành nghề, Len\'s Decor sẽ góp phần đưa những ý tưởng thiết kế trên mặt giấy vào thực tế. Từ việc lập kế hoạch, tổ chức thi công theo bản vẽ đến khi bàn giao cho khách hàng, chúng tôi luôn luôn tuân thủ những tiêu chuẩn khắt khe nhằm mang đến những sản phẩm hoàn hảo nhất.'
  },
  {
    id: 3,
    image: NoiNgoaiThat,
    title: 'Thi công nội - ngoại thất',
    description: 'Chăm chút tỉ mỉ đến từng chi tiết nhỏ nhất chính là kim chỉ nam cho đội ngũ sản xuất và thi công nội - ngoại thất của Len\'s Decor. Ngoài ra, với thế mạnh là 3 nhà xưởng được trang bị máy móc hiện đại, chúng tôi tự tin kiểm soát tốt chất lượng sản phẩm, đáp ứng đúng nhu cầu của khách hàng và đảm bảo được tiến độ thi công.'
  },
  {
    id: 4,
    image: CaiTaoNoiThat,
    title: 'Cải tạo nội - ngoại thất',
    description: 'Những không gian tưởng chừng như đã cũ vẫn có thể biến hóa một cách ngoạn mục. Không chỉ mang đến diện mạo mới mẻ cho ngôi nhà của bạn, chúng tôi còn mang đến sự thoải mái, tiện nghi và niềm vui trong cuộc sống.'
  }
];

const imagePopVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: custom => ({
    opacity: 1,
    scale: custom ? 1 : 0.8,
    transition: {
      opacity: { duration: 0.8, ease: 'easeOut' },
      scale: { duration: 0.3 }
    }
  })
};

const ServicesCarousel = () => {
  // State để lưu slide hiện tại và trạng thái hover của slide active
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActiveHovered, setIsActiveHovered] = useState(false);
  const swiperRef = useRef(null);

  // Tính toán vị trí cho mũi tên dựa trên trạng thái hover
  const arrowOffset = isActiveHovered ? '26.6%' : '27%';
  const arrowColor = isActiveHovered ? '#777' : '#000000';

  return (
    // Section container - tương đương .section
    <div className="w-full relative box-border">
      <div className="max-w-[1250px] flex flex-row flex-wrap w-[100%] ml-auto mr-auto justify-center box-border">
        {/* Tiêu đề */}
        <div className="md:basis-[50%] md:max-w-[50%] basis-[100%] max-w-[100%] m-0 pr-[25px] pl-[25px] pb-[30px] md:pr-[15px] md:pl[15px] md:pb-[45px] relative w-[100%] box-border block">
          <div className="ml-auto mr-auto w-full text-center">
            <div className="md:text-[36px] text-2xl text-center md:ml-[19px] md:mr-auto">
              <h2 className="font-lora font-semibold uppercase leading-[1.5] mb-[18px] mt-0">
                Dịch vụ của chúng tôi
              </h2>
            </div>
            <div className="mx-auto w-[33%] h-[3.2px] bg-black"></div>
          </div>
        </div>
      </div>
      {/* Gap */}
      <div className="pt-[10px]"></div>

      {/* Slider container */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true}
          loop={true}
          observer
          observeParents
          observeSlideChildren
          allowTouchMove={true}
          slideToClickedSlide={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.update();
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.horizontal-pagination',
            clickable: true,
          }}
          breakpoints={{
            // Mobile
            0: {
              slidesPerView: "auto",
            },
            // Tablet
            550: {
              slidesPerView: 1.8,
              spaceBetween: 20
            },
            // Desktop
            850: {
              slidesPerView: 2.5,
              spaceBetween: 30
            }
          }}
          className="!pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={service.id}
              // Nếu slide này là slide active, gán sự kiện hover
              onMouseEnter={activeIndex === index ? () => setIsActiveHovered(true) : undefined}
              onMouseLeave={activeIndex === index ? () => setIsActiveHovered(false) : undefined}
              className={`md:px-0 px-8 transition-all duration-300 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-50 scale-95'} w-[80%] md:w-2/5`}
            >
              <motion.div
                className="bg-transparent overflow-hidden h-full"
                variants={imagePopVariant}
                custom={activeIndex === index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Hình ảnh */}
                <div className="relative overflow-hidden m-0">
                  <div className="pt-[66%] relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Nội dung */}
                <div className="text-center pl-[12px] pr-[12px] pb-[20.16px] pt-[10.08px]">
                  <div className="ml-auto mr-auto">
                    <h3 className="text-xl font-lora font-semibold mb-2">{service.title}</h3>
                    <div className="w-[20%] h-[2px] bg-gray-500 mx-auto my-3"></div>
                    <p className="text-[16px] mt-[1.6px] mb-[16px] font-lora text-black">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút điều hướng */}
        <button
          type="button"
          style={{
            left: arrowOffset,
            transition: 'left 0.3s ease'
          }}
          className="absolute top-[35%] z-10 -translate-y-1/2 swiper-button-prev-custom bg-transparent flex items-center pointer-events-auto"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19L8 12L15 5" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          style={{
            right: arrowOffset,
            transition: 'right 0.3s ease'
          }}
          className="absolute top-[35%] z-10 -translate-y-1/2 swiper-button-next-custom bg-transparent flex items-center pointer-events-auto"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Horizontal Pagination (dots) - ở phía dưới carousel */}
        <div className="horizontal-pagination md:left-[46%] left-[38%] absolute md:bottom-13 bottom-12 transform z-20 flex justify-center"></div>
      </div>

      {/* Gap cuối */}
      <div className="pt-8 md:pt-12"></div>
    </div>
  );
};

export default ServicesCarousel;