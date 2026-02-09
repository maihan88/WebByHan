import React from 'react';
import { motion } from 'framer-motion';
import LogoBlack from '../Images/Logo-Lens-Decor-Balck-1.png';
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#f4f0ec] md:pt-[80px] pt-[50px] pb-0">
      <div className="container mx-auto md:px-4 px-6">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column - Company Contact */}
          <div className="md:hidden">
          <img src={LogoBlack} alt="Len's decor" className="md:pl-0 pl-3 w-64 h-auto mb-8" />
          </div>
          <div className="w-full md:w-1/3 md:mb-0 pl-[15px] pr-[15px]">
            <h3 className="md:text-[20px] font-bold font-lora uppercase mb-5">LIÊN HỆ CÔNG TY</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-4">
                  <img src="https://lendecor.vn/wp-content/uploads/2024/01/maps-flags_447031-1.svg" alt="location" className="w-full h-full" />
                </div>
                <p className="font-lora md:text-[16px] text-[14px] leading-[24px]">Nguyễn Ngọc Mai Hân</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-4">
                  <img src="https://lendecor.vn/wp-content/uploads/2024/01/maps-flags_447031-1.svg" alt="location" className="w-full h-full" />
                </div>
                <p className="font-lora md:text-[16px] text-[14px] leading-[24px]">Hoàng Ngọc Gia Nghi.</p>
              </div>
              <div className="flex items-star">
                <div className="w-5 h-5 mt-1 mr-4">
                  <img src="https://lendecor.vn/wp-content/uploads/2024/01/phone-call_597177-1.svg" alt="phone" className="w-full h-full" />
                </div>
                <p className="font-lora md:text-[16px] text-[14px] leading-[24px]">2474801030019</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 mr-4">
                  <IoIosMail size={25} color="black" />
                </div>
                <p className="font-lora md:text-[16px] text-[14px] leading-[24px]">2474801030041</p>
              </div>
            </div>
          </div>

          <div className="pt-8 md:hidden"></div>

          {/* Middle Column - Logo & Social */}
          <div className="w-auto md:w-1/3 md:mb-0 flex flex-col items-center">
            <div className="hidden md:block">
            <img src={LogoBlack} alt="Len's decor" className="w-64 h-auto mb-4" />
            <div className="pt-21"></div>
            </div>
            <div className="md:flex hidden justify-center space-x-4 mb-6">
              <a href="https://www.facebook.com/LensDecor" target="_blank" rel="noopener noreferrer">
                <img src="https://lendecor.vn/wp-content/uploads/2024/01/fb-icon.svg" alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src="https://lendecor.vn/wp-content/uploads/2024/01/ins.svg" alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="https://www.youtube.com/@lensdecor" rel="noopener noreferrer">
                <img src="https://lendecor.vn/wp-content/uploads/2024/01/youtube.svg" alt="YouTube" className="w-10 h-10" />
              </a>
            </div>
            <div className="relative hidden md:block overflow-hidden mt-1">
              <motion.a 
                href="#top" 
                className="block text-center uppercase relative"
                initial="initial"
                whileHover="hover"
              >
                <span className="font-semibold font-lora hover:text-gray-800">LÊN TRÊN CÙNG</span>
                <motion.div 
                  className="h-[2px] bg-[#888888] mx-auto"
                  initial={{ width: "50%" }}
                  variants={{
                    initial: { width: "40%", backgroundColor: "#888888" },
                    hover: { width: "100%", backgroundColor: "#000000" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </div>

          {/* Right Column - Production Facilities */}
          <div className="w-ful md:w-1/3 md:mb-0 pl-[15px] pr-[15px]">
            <h3 className="md:text-[20px] font-bold font-lora uppercase mb-5">XƯỞNG SẢN XUẤT</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-4">
                  <img src="https://lendecor.vn/wp-content/uploads/2024/01/home_25694-1.svg" alt="factory" className="w-full h-full" />
                </div>
                <p className="font-lora md:text-[16px] text-[14px] leading-[24px]">Nguyễn Ngọc Mai Hân.</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-4">
                  <img src="https://lendecor.vn/wp-content/uploads/2024/01/home_25694-1.svg" alt="factory" className="w-full h-full" />
                </div>
                <p className="font-lora md:text-[16px] text-[14px] leading-[24px]">Hoàng Ngọc Gia Nghi.</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-4">
                  <img src="https://lendecor.vn/wp-content/uploads/2024/01/home_25694-1.svg" alt="factory" className="w-full h-full" />
                </div>
                <p className="font-lora md:text-[16px] text-[14px] leading-[24px]">2474801030019_2474801030041</p>
              </div>
            </div>
          </div>

          <div className="pt-21 md:hidden"></div>

          <div className="md:hidden flex justify-center space-x-4 mb-3">
              <a href="https://www.facebook.com/LensDecor" target="_blank" rel="noopener noreferrer">
                <img src="https://lendecor.vn/wp-content/uploads/2024/01/fb-icon.svg" alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src="https://lendecor.vn/wp-content/uploads/2024/01/ins.svg" alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="https://www.youtube.com/@lensdecor" rel="noopener noreferrer">
                <img src="https://lendecor.vn/wp-content/uploads/2024/01/youtube.svg" alt="YouTube" className="w-10 h-10" />
              </a>
            </div>
            <div className="relative md:hidden overflow-hidden mt-1">
              <motion.a 
                href="#top" 
                className="block text-center uppercase relative"
                initial="initial"
                whileHover="hover"
              >
                <span className="font-semibold font-lora hover:text-gray-800">LÊN TRÊN CÙNG</span>
                <motion.div 
                  className="h-[2px] bg-[#888888] mx-auto"
                  initial={{ width: "50%" }}
                  variants={{
                    initial: { width: "40%", backgroundColor: "#888888" },
                    hover: { width: "100%", backgroundColor: "#000000" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
        </div>
        
        {/* Divider Line */}
        <div className="h-px bg-black mt-2 mb-4"></div>
        
        {/* Bottom Section - Services & Copyright */}
        <div className="pb-4">
          <div className="flex justify-center space-x-6 uppercase mb-2">
            <a href="https://lendecor.vn/thi-cong-xay-dung/" className="font-semibold font-lora text-center md:text-sm text-[12px] hover:text-gray-600">
              THI CÔNG XÂY DỰNG
            </a>
            <a href="https://lendecor.vn/thiet-ke-kien-truc/" className="font-semibold font-lora text-center md:text-sm text-[12px] hover:text-gray-600">
              THIẾT KẾ KIẾN TRÚC
            </a>
            <a href="https://lendecor.vn/thiet-ke-noi-that/" className="font-semibold font-lora text-center md:text-sm text-[12px] hover:text-gray-600">
              THIẾT KẾ NỘI THẤT
            </a>
          </div>
          <div className="text-center font-lora text-sm">
            Copyright by Len's Decor©2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 