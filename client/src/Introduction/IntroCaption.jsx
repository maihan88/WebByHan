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

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideLeftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideRightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const IntroCaption = () => {
  return (
    <div className="w-full box-border relative z-1">
      <div className="max-w-[1250px] flex flex-row flex-wrap mr-auto ml-auto justify-center">
        <div className="basis-[100%] max-w-[100%] pr-[15px] pl-[15px] pb-[30px] relative">
          <div className="ml-auto mr-0">
            <motion.div 
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className=""
            >
            <div className="md:text-[40px] text-[30px] text-center font-lora">
              <h2 className="text-black  font-semibold leading-[1.3] mb-[20px] mt-0">Thông tin sơ bộ</h2>
            </div>
            <div className="md:w-[18%] w-[40%] h-[3px] ml-[29%] md:ml-[41%] bg-black mb-6"></div>
            <div className="text-center md:px-0 px-4">
              <p className="text-justify mb-[16px] mt-0 font-lora text-base">
                Xuất phát điểm từ một công ty nhỏ chỉ có 3 người và chủ yếu phục vụ nhu cầu trang trí phòng ở. Sau hơn một thập kỷ, Len's Decor là một doanh nghiệp trong lĩnh vực thiết kế và thi công nội thất có tiềm năng phát triển mạnh mẽ khi đang tập trung vào phân khúc khách hàng cao cấp. Và để có được chỗ đứng như hiện tại, Ban lãnh đạo công ty và CEO Phạm Minh Tuyền đã xác định nhân sự là một trong những yếu tố cốt lõi cho sự phát triển bền vững của Len's Decor.
              </p>
              </div>
            </motion.div>
            <div className="pt-[40px] block h-auto"></div>
            <div className="flex flex-row flex-wrap max-w-[1080px] w-auto ml-[-15px] mr-[-15px] pl-0 pr-0 items-center self-center">
              {/*Image Mobile Section */}
              <motion.div 
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:hidden basis-[90%] max-w-[90%] m-0 px-8 pb-[30px] relative w-[100%] box-border"
            >
                <div className="relative">
                  <div className="w-[100%] h-auto border-[3px] border-gray-500">
                    <img
                      src="https://lendecor.vn/wp-content/uploads/2024/05/VinGPa1058-1366x910.webp"
                      alt="Len's Decor Interior"
                      className="w-full h-auto object-cover translate-x-[20px] translate-y-[-20px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                </div>
              </motion.div>
              {/* Text Section */}
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="md:basis-[48%] md:max-w-[48%] basis-[100%] max-w-[100%] m-0 md:pl-[15px] md:pr-[15px] px-10 pb-[30px] relative w-[100%] box-border">
                <h3 className="text-black font-semibold text-[20px] md:text-[28px] mb-3 font-lora text-center md:text-right">Độc đáo – Độc nhất – Khác biệt</h3>
                <div className="md:w-[40%] md:h-[1.5px] md:ml-[60%] w-[50%] h-[2px] ml-[25%] bg-black mb-3"></div>
                <p className="md:text-right text-center font-lora text-base">
                  Len’s Decor hướng đến phân khúc khách hàng cao cấp. Vì thế, mỗi một công trình, sản phẩm luôn đòi hỏi tính độc đáo, thậm chí độc nhất, khác biệt và có gu. Hiểu được những yêu cầu cao từ tệp khách hàng, nên đối với nhân sự, Len’s Decor có những yêu cầu rất khắt khe trong quá trình thiết kế và thi công.
                </p>
                <p className="md:text-right text-center font-lora text-base mt-4">
                  Len’s Decor tự tin là một trong những đơn vị có thể đáp ứng được những yêu cầu của khách hàng, kể cả những vị khách khó tính nhất. Những yếu tố này đã giúp Len’s Decor mở rộng dịch vụ và có khách hàng trải dài khắp các tỉnh thành Việt Nam.
                </p>
              </motion.div>
              {/* Image Section */}
              <motion.div 
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="hidden md:block basis-[52%] max-w-[52%] m-0 pl-[15px] pr-[15px] pb-[30px] relative w-[100%] box-border">
                <div className="relative">
                  <div className="w-[128%] h-auto border-[3px] border-gray-500">
                    <img
                      src="https://lendecor.vn/wp-content/uploads/2024/05/VinGPa1058-1366x910.webp"
                      alt="Len's Decor Interior"
                      className="w-full h-auto object-cover translate-x-[40px] translate-y-[-40px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1250px] flex flex-row flex-wrap mr-auto ml-auto justify-center">
        {/* Image Section */}
        <motion.div 
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="md:basis-[58%] md:max-w-[58%] basis-[95%] max-w-[95%] m-0 px-10 md:pl-[15px] md:pr-[15px] pb-[30px] relative w-[100%] box-border">
                <div className="relative">
                  <div className="w-full h-auto border-[3px] border-gray-500">
                    <img
                      src="https://lendecor.vn/wp-content/uploads/2024/05/Screenshot-at-May-17-10-09-07-1366x840.png"
                      alt="Len's Decor Interior"
                      className="w-full h-auto object-cover translate-x-[-20px] translate-y-[-20px] md:translate-x-[-40px] md:translate-y-[-40px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                </div>
              </motion.div>
             {/* Text Section */}
             <motion.div 
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:basis-[42%] md:max-w-[42%] basis-[100%] max-w-[100%] m-0 md:pl-[15px] md:pr-[15px] px-8 pb-[30px] relative w-[100%] box-border">
                <h3 className="text-black font-semibold md:text-[28px] text-[22px] mb-4 font-lora md:text-left text-center leading-[36px]">Chuỗi xưởng sản xuất với quy mô 4200m2 trải dài trên ba miền</h3>
                <div className="md:w-[36%] md:h-[1.5px] w-[57%] h-[2px] ml-[22%] bg-black mb-4"></div>
                <p className="md:text-left text-center font-lora text-base ">
                Sở hữu ba phân xưởng lớn với tổng diện tích sản xuất lên đến 4200m2 tại Hồ Chí Minh, Hà Nội và Bình Thuận. Với đội ngũ hàng trăm nhân công với tay nghề cao và giàu tâm huyết. Xưởng sản xuất của Len's Decor luôn đảm bảo trong chất lượng thành phẩm, đẩy đủ các trang thiết bị tiên tiến nhất, từ máy móc hiện đại, kỹ thuật cho đến hệ thống kiểm soát chất lượng.
                </p>
                <p className="md:text-left text-center font-lora text-base leading-6.5 mt-4">
                Len's Decor cam kết mang đến cho khách hàng những sản phẩm và dịch vụ chất lượng nhất, với mục tiêu không ngừng hoàn thiện và đổi mới, đem lại không gian sống và làm việc tốt nhất cho mỗi cá nhân.
                </p>
          </motion.div>
      </div>

      <div className="pt-[50px] block h-auto"></div>

      <div className="max-w-[1250px] flex flex-row flex-wrap mr-auto ml-auto justify-center">
        {/* Image Section */}
        <motion.div 
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="md:hidden basis-[95%] max-w-[95%] m-0 px-10 pb-[30px] relative w-[100%] box-border">
          <div className="relative">
            <div className="w-full h-auto border-[3px] border-gray-500">
              <img
                src="https://lendecor.vn/wp-content/uploads/2024/05/421670852_785329633635780_8123598210562153850_n-jpg-e1715916131944.webp"
                  alt="Len's Decor Interior"
                    className="w-full h-auto object-cover translate-x-[20px] translate-y-[-20px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)]"
                    />
            </div>
          </div> 
        </motion.div>
        {/* Text Section */}
        <motion.div 
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:basis-[42%] md:max-w-[42%] basis-[100%] max-w-[100%] m-0 md:pl-[15px] md:pr-[15px] px-10 pb-[30px] md:pt-[150px] relative w-[100%] box-border">
                <h3 className="text-black font-semibold md:text-[28px] text-[20px] mb-4 font-lora text-center md:text-right leading-[36px]">Đội ngũ thi công xây dựng chuyên nghiệp</h3>
                <div className="md:w-[36%] md:h-[2.5px] md:ml-[63%] w-[50%] h-[2px] ml-[28%] bg-black mb-4"></div>
                <p className="md:text-right text-center font-lora text-base leading-6.5 ">
                Là những chuyên gia có tay nghề cao và kinh nghiệm lâu năm trong lĩnh vực xây dựng. Với sự am hiểu sâu sắc về công nghệ và vật liệu, đội ngũ thi công của Len's Decor tự tin thực hiện mọi công việc với những công trình đa dạng.
                </p>
                <p className="md:text-right text-center font-lora text-base leading-6.5 mt-4">
                Tỉ mỉ, chuyên nghiệp, tận tâm và trách nhiệm là yếu tố cốt lõi góp phần tạo nên đội thi công với những tác phẩm kiến trúc và nội thất đẳng cấp, mang lại sự hài lòng và tin tưởng tuyệt đối từ phía khách hàng.
                </p>
        </motion.div>
            {/* Image Section */}
            <motion.div 
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:block basis-[58%] max-w-[58%] m-0 pl-[15px] pr-[15px] pb-[30px] relative w-[100%] box-border">
          <div className="relative">
            <div className="w-full h-auto border-[3px] border-gray-500">
              <img
                src="https://lendecor.vn/wp-content/uploads/2024/05/421670852_785329633635780_8123598210562153850_n-jpg-e1715916131944.webp"
                  alt="Len's Decor Interior"
                    className="w-full h-auto object-cover translate-x-[40px] translate-y-[-40px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)]"
                    />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Updated Banner Section */}
      <motion.div 
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full bg-gray-100 mt-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://lendecor.vn/wp-content/uploads/2024/05/L1000028-1-jpg.webp')",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative z-10 flex items-center justify-center h-[50vw] md:h-[25vw]">
          <div className="text-center px-4 w-[90%] md:w-[60%]">
            <p className="text-[1.65rem] md:text-[2.5rem] font-lora font-semibold leading-[1.3] text-black">
              Nhân sự là linh hồn trong sự phát triển của Len’s Decor
            </p>
            <div className="mx-auto my-4 w-[30%] h-[3px] bg-black "></div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-[1250px] flex flex-row flex-wrap mr-auto ml-auto justify-center pt-[30px]">
      <motion.div 
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
           className="md:basis-[50%] md:max-w-[50%] m-0 md:pl-[15px] md:pr-[15px] px-8 pb-[30px] relative w-[100%] box-border">
          <div className="relative">
              <img
                src="https://lendecor.vn/wp-content/uploads/2024/05/L1000073-1366x909.webp"
                alt="Len's Decor Interior"
                className="w-full md:h-[450px] object-cover"
              />
          </div>
        </motion.div>

        <motion.div 
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
           className="md:basis-[50%] md:max-w-[50%] m-0 px-8 md:pl-[15px] md:pr-[15px] pb-[30px] relative w-[100%] box-border">
        <h3 className="text-black font-semibold md:text-[26px] text-[20px] mb-4 font-lora text-center md:text-left md:leading-[36px]">Len's Decor - "Sẵn sàng cho đi hết những gì tôi biết"</h3>
            <p className="text-center md:text-left font-lora text-base leading-6.5 ">
            Tại Len's Decor, văn hóa “tử tế” cũng được đội ngũ nhân sự thấm nhuẩn. Chúng tôi luôn hết lòng hỗ trợ, cởi mở trao đổi, chia sẻ mọi kinh nghiệm và tự tin giao quyền để nhân viên có thể phát triển độc lập và toàn diện.
            </p>
            <p className="text-center md:text-left font-lora text-base leading-6.5 mt-4">
            Đây cũng là lý do, Len's Decor là một trong những cái nôi sản sinh ra rất nhiều công ty thiết kế hiện tại từ các lứa nhân viên của công ty.
            </p>
            <p className="text-center md:text-left font-lora text-base leading-6.5 mt-4">
            “Tôi sẵn sàng cho đi hết những gì tôi biết để tạo được động lực và sức mạnh cho nhân viên của mình để phụng sự cho công ty và ngay cả việc tự bước đi con đường của họ. Tôi tin việc gieo hạt giống cho đi sẽ khiến nhân viên thấu hiểu thấm nhuần được văn hóa công ty” – nhà sáng lập Len's Decor chia sẻ.
            </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroCaption;