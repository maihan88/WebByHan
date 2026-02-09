import React from "react";
import Top1Choice from "../Images/YourChoice.png";
import {motion} from "framer-motion";

const slideUpVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,   // cách nhau 0.5s
    }
  }
};

const YourChoice = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    alert('Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ với bạn sớm.');
  };

  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="relative z-10 w-full …"
  >
      <div className="box-border content-center self-center justify-center mx-auto max-w-[1250px] flex flex-row flex-wrap">
        {/* Phần nội dung bên trái - chứa tiêu đề và form */}
        <motion.div
              className="block box-border relative w-full md:basis-[50%] md:max-w-[50%] mt-[20px] md:pl-[15px] md:pr-[15px] pb-[30px]"
              variants={slideUpVariants}
            >
          <div className="ml-auto mr-0 md:text-left text-center relative w-full  md:pr-[30px]">
            
            <h2 className="font-semibold md:italic font-lora md:mx-0 mx-12 md:text-[36px] text-[26px] mb-[18px] mt-0 leading-[1.3]">
              LEN'S DECOR – SỰ LỰA CHỌN SỐ 1 CỦA BẠN
            </h2>
            {/* Divider dưới tiêu đề */}
            <div className="w-[30%] md:h-[3.5px] h-[2.5px] md:ml-0 ml-32 bg-black mb-6 mt-4"></div>

            <div className="basis-[100%] max-w-[100%] ml-5 pt-[30px] pb-[30px] relative box-border md:hidden ">
              <div className="relative">
                 <div className="w-[80%] h-auto border-[3px] border-gray-500">
                    <img
                      src="https://lendecor.vn/wp-content/uploads/2024/02/20-3.jpg"
                      alt="Len's Decor Interior"
                      className="w-full h-auto object-cover translate-x-[20px] translate-y-[-20px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)]"
                    />
                </div>
              </div>
            </div>

            {/* Form đăng ký */}
            <form className="mt-5 text-left md:px-0 px-8" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="fullName" className="block font-lora mb-2">Họ và Tên (*)</label>
                <div className="w-full border-b-[1.5px] border-black/50">
                  <input 
                    type="text" 
                    id="fullName" 
                    required 
                    className="w-full py-2 focus:outline-none bg-transparent font-lora"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block font-lora mb-2">Số điện thoại (*)</label>
                <div className="w-full border-b-[1.5px] border-black/50">
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full py-2 focus:outline-none bg-transparent font-lora"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-lora mb-2">Email (*)</label>
                <div className="w-full border-b-[1.5px] border-black/50">
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full py-2 focus:outline-none bg-transparent font-lora"
                  />
                </div>
              </div>
              
              <div className="mb-8 hidden md:block">
                <label htmlFor="projectType" className="block font-lora mb-2">Loại hình công trình</label>
                <div className="w-full border-b-[1.5px] border-black/50">
                  <input 
                    type="text" 
                    id="projectType" 
                    className="w-full py-2 focus:outline-none bg-transparent font-lora"
                  />
                </div>
              </div>

              <div className="mb-6 md:hidden">
                <label htmlFor="email" className="block font-lora mb-2">Địa chỉ (*)</label>
                <div className="w-full border-b-[1.5px] border-black/50">
                  <input 
                    type="address" 
                    id="address" 
                    required 
                    className="w-full py-2 focus:outline-none bg-transparent font-lora"
                  />
                </div>
              </div>

              <div className="mb-8 md:hidden">
                <label htmlFor="projectType" className="block font-lora mb-2">Diện tích</label>
                <div className="w-full border-b-[1.5px] border-black/50">
                  <input 
                    type="size" 
                    id="szie" 
                    className="w-full py-2 focus:outline-none bg-transparent font-lora"
                  />
                </div>
              </div>
              
              <div className="mt-8 mb-8 flex items-start">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mr-3 mt-1"
                  required
                />
                <label htmlFor="privacy" className="font-lora text-sm">
                  Tôi đã đọc Chính sách quyền riêng tư và tôi đồng ý để Len's Decor gửi cho tôi thông tin tiếp thị.
                </label>
              </div>
              
              <button 
                type="submit" 
                className="bg-black text-white px-[80px] py-[10px] font-lora hover:bg-gray-800 transition-colors uppercase"
              >
                Gửi
              </button>
            </form>
          </div>
        </motion.div>

        {/* Phần hình ảnh bên phải */}
        <motion.div
          className="relative md:basis-[50%] md:max-w-[50%] m-0 px-[15px] pb-[30px] hidden md:inline-block"
          variants={slideUpVariants}
          >
          <div className="relative mx-auto w-full text-center box-border mt-[30px]">
            {/* Frame bao quanh hình ảnh với hiệu ứng "floating" */}
            <div className="relative">
              {/* Frame border nằm ở dưới */}
              <div className="absolute border-3 border-gray-500  w-[84%] h-[99%] top-[50px] right-[15%] z-[1]"></div>
              
              {/* Container của hình ảnh - có negative margin để tạo hiệu ứng so le */}
              <div className="relative z-[2] -mt-15 ">
                {/* Hình ảnh chính - shadow ở góc dưới trái */}
                <img 
                  src={Top1Choice} 
                  alt="Len's Decor Interior" 
                  className="z-[3] w-[83%] h-[700px] object-cover ml-[50px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default YourChoice;