import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Import ảnh dự án
import NhaPhoLongBien from "../Images/NhaPhoLongBien.png";
import BietThuSongLap from "../Images/BietThuDucTrong.png";
import BietThuMrHoang from "../Images/BietThuMrHoang.png";
import BietThuDucTrong from "../Images/Nha.png";
import BietThuMrThuan from "../Images/BietThuMr.png";
import BietThuMrHong from "../Images/VinGPa1058.jpg";

const projects = [
  { id: 1, title: "NHÀ PHỐ LONG BIÊN - HÀ NỘI", img: NhaPhoLongBien },
  { id: 2, title: "BIỆT THỰ SONG LẬP ID JUNCTION", img: BietThuSongLap },
  { id: 3, title: "BIỆT THỰ MR HOÀNG - Q9", img: BietThuMrHoang },
  { id: 4, title: "BIỆT THỰ ĐỨC TRỌNG - LÂM ĐỒNG", img: BietThuDucTrong },
  { id: 5, title: "BIỆT THỰ MR THUẬN - CẦN THƠ", img: BietThuMrThuan },
  { id: 6, title: "BIỆT THỰ MRS HỒNG - VINHOMES", img: BietThuMrHong },
];

// Variants cho phần text (slide in từ dưới lên trên)
const textSlideVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants cho từng project (hiệu ứng zoom in khi xuất hiện và hover)
const projectItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0px 15px 25px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      <div className="box-border content-center self-center justify-center ml-auto mr-auto max-w-[1250px] flex flex-wrap">
        {/* Phần mô tả (Left side) với hiệu ứng slide in */}
        <motion.div
          className="block box-border relative w-full md:basis-[25%] md:max-w-[25%] m-0 px-8 md:pr-[15px] md:pl-[15px] pb-[30px] mt-[40px] md:mt-[170px]"
          variants={textSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="ml-auto mr-auto md:text-left text-center relative w-full">
            <h2 className="font-semibold font-lora text-[24px] md:text-[36px] mb-[10px] md:mb-[20px] mt-0 leading-[55px]">
              DỰ ÁN CỦA LEN'S DECOR
            </h2>
            <div className="w-28 h-[2px] md:mx-0 mx-[32%] bg-black mb-4"></div>
            <p className="text-black mb-10 font-lora mt-[40px]">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế và thi công kiến
              trúc – nội thất, Len's Decor đã có cơ hội được làm việc với hàng ngàn
              khách hàng và hàng trăm dự án, thành công mang đến những không gian
              sống đẳng cấp, thẩm mỹ và thể hiện được dấu ấn cá nhân của gia chủ.
              <p className="mt-[20px] font-lora">
                Bên cạnh đó, phong cách thiết kế và thi công của Len's Decor đa dạng:
                từ Tân Cổ Điển, Bán Cổ Điển, Đông Dương, Farmhouse đến Hiện Đại.
              </p>
            </p>
            {/* Ở desktop, button hiển thị tại đây */}
            {!isMobile && (
              <Link to="/project">
                <button className="bg-black text-white pl-[30px] pr-[30px] pt-[10px] pb-[10px] font-lora">
                  XEM TOÀN BỘ DỰ ÁN
                </button>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Danh sách dự án */}
        <div
          className={`${
            isMobile
              ? "w-full px-4"
              : "relative w-full basis-[75%] max-w-[75%] m-0 pl-[15px] pr-[50px]"
          } mt-[5px]`}
        >
          {!isMobile ? (
            /* Desktop grid with mount + hover variants */
            <div className="grid grid-cols-2 gap-x-[20px] gap-y-[25px]">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  variants={projectItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative group cursor-pointer overflow-hidden"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                    <p className="font-lora text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                      {project.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="relative -mt-10">
              <style>
                {`
                  .project-swiper {
                    position: relative;
                    padding-bottom: 40px;
                  }
                  
                  .project-swiper .swiper-pagination {
                    position: absolute;
                    bottom: 10px !important;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                  }
                  
                  .project-swiper .swiper-pagination-bullet {
                    width: 6px;
                    height: 6px;
                    background: gray;
                    opacity: 0.5;
                    transition: all 0.3s;
                  }
                  
                  .project-swiper .swiper-pagination-bullet-active {
                    background: #000;
                    opacity: 1;
                    transform: scale(2);
                  }
                  
                  .project-swiper .swiper-button-prev,
                  .project-swiper .swiper-button-next {
                    color: #000 !important;
                    top: 45% !important;
                    width: 1px;
                    height: 20px;
                  }
                  
                  .project-swiper .swiper-button-prev::after,
                  .project-swiper .swiper-button-next::after {
                    font-size: 12px;
                    font-weight: bold;
                  }
                  
                  .project-swiper .swiper-button-prev {
                    left: 5px !important;
                  }
                  
                  .project-swiper .swiper-button-next {
                    right: 5px !important;
                  }
                `}
              </style>

              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={10}
                className="project-swiper"
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="mt-4 relative">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-auto px-4"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <h3 className="font-lora text-base font-semibold">
                        {project.title}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>

              {/* Nút Xem toàn bộ dự án */}
              <div className="mt-8 text-center">
                <Link to="/project">
                  <button className="bg-black text-white px-8 py-3 font-lora hover:bg-gray-800 transition-colors">
                    XEM TOÀN BỘ DỰ ÁN
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;