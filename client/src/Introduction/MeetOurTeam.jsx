const MeetOurTeam = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="md:text-[36px] text-[22px] font-semibold mb-4 font-lora">
          Gặp gỡ đoàn đội của chúng tôi
        </h2>
        <div className="w-[180px] h-[3px] bg-black mx-auto"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:px-0 px-10 gap-8 mb-12">
        {/* Image Section */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="relative h-auto border-[3px] border-gray-500">
            <img
              src="https://lendecor.vn/wp-content/uploads/2024/02/L1009981-532x800.webp"
              alt="Team Member"
              className="w-full h-auto object-cover md:translate-x-[-40px] md:translate-y-[-40px] translate-x-[-20px] translate-y-[-20px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.1)] "
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-[1.3rem] font-semibold mb-4 font-lora">
            Phạm Minh Tuyền <span className="font-light"> – Founder/CEO</span>
          </p>
          <p className="text-justify italic font-lora">
            "Nhân viên đứng thứ nhất, khách hàng đứng thứ hai, và cuối cùng mới là tôi. 
            Khách hàng có thể sẽ buồn khi nghe tôi nói điều này nhưng thật ra chỉ khi nhân 
            viên tập trung cống hiến thì họ mới có thể làm tốt và làm hết sức. Từ đó cho ra 
            sản phẩm tốt. Và khách hàng chính là người được thừa hưởng điều đó. Khách hàng 
            nhận được giá trị tương xứng với số tiền họ đã bỏ ra"
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="pl-[15px] pr-[15px] pb-[30px]">
      <div className="w-1/2 h-[1.5px] bg-gray-500 mx-auto "></div>
      </div>
    </div>
  );
};

export default MeetOurTeam;