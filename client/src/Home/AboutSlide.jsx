import Image from "../Images/11-2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const textSlideVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imagePopVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  }
}

const AboutSlide = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="mx-auto max-w-[1250px] flex flex-wrap justify-center">
        <motion.div
          className="block w-full md:basis-[43%] md:max-w-[43%] m-0 px-[5px] pb-[30px]"
          variants={textSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        > 
          <div className="ml-auto mr-auto md:text-left text-center w-full">
            <h2 className="font-semibold font-lora text-[24px] md:text-[36px] mb-[10px] md:mb-[20px] mt-0 leading-[55px]">LEN'S DECOR</h2>
            <div className="w-[30%] h-[2px] md:mx-0 mx-[35%] bg-black mb-6"></div>
            <div className="mt-8"></div>
            <p className="text-black mb-5 font-lora md:px-0 px-6 md:mr-[35px]">
              Ra đời từ năm 2012, hiện tại Len's Decor là đơn vị thiết kế và thi công nội & ngoại thất hoạt động chủ yếu ở 
              Thành phố Hồ Chí Minh và Hà Nội với 3 phân xưởng sản xuất, hơn 300 công nhân tay nghề cao, 30 kiến trúc sư và 20 giám sát công trình.
            </p>
            <p className="mt-5 font-lora mb-10 md:px-0 px-6 md:mr-[35px]">
              Với sứ mệnh "mang lại sự ấm êm" Len's Decor luôn cố gắng để tạo ra những sản phẩm tốt nhất cho khách hàng, công việc ổn định cho nhân viên,
              tạo ra giá trị cho xã hội. Đó là những giá trị cốt lõi cho sự phát triển vững vàng.
            </p>
            <div className="mt-8"></div>
            <Link to="/gioi-thieu">
            <button className="bg-black text-white px-[40px] py-[8px] hover:bg-gray-800 transition-colors font-lora hidden md:block">
              TÌM HIỂU THÊM
            </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full md:basis-[57%] md:max-w-[57%] m-0 px-[15px] pb-[30px] inline-block"
          variants={imagePopVariant}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative mx-auto w-full text-center box-border">
            <div className="pt-[20px] md:pt-[50px] block h-auto mx-auto box-border">
              <div className="relative mx-auto box-border mt-[-20px]">
                <div className="absolute border-3 border-gray-500 
                                md:w-[90%] md:h-[105%] md:top-[20px] md:left-[20px] 
                                w-[85%] h-[109%] top-[5px] left-[15px]">
                </div>
                <div className="relative z-[2] mb-8">
                  <img 
                    src={Image} 
                    alt="Len's Decor Interior" 
                    className="md:ml-[50px] ml-[20px] mt-[-20px] box-content h-auto max-w-full w-[85%] md:w-[90%] mx-auto shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)] inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-8"></div>
          <Link to="/gioi-thieu">
            <button className="bg-black text-white px-[40px] py-[8px] hover:bg-gray-800 transition-colors font-lora md:hidden">
              TÌM HIỂU THÊM
            </button>
          </Link>
      </div>
     </div>
  );
};

export default AboutSlide;