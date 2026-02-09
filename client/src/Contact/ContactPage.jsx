import React, { useState } from 'react';

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState('hcm');

  const locations = {
    hcm: {
      name: 'HỒ CHÍ MINH',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.92170694783175!2d106.66219930089422!3d10.782667117980974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294d883e2839%3A0xade479e9d1021604!2sC%C3%B4ng%20Ty%20TNHH%20Len%20Decor!5e0!3m2!1svi!2s!4v1706247603263!5m2!1svi!2s',
    },
    hanoi: {
      name: 'HÀ NỘI',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d783.1403249187946!2d105.75407898685972!3d20.982044585353247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU4JzU1LjIiTiAxMDXCsDQ1JzE2LjQiRQ!5e0!3m2!1svi!2s!4v1726476444895!5m2!1svi!2s',
    },
  };

  return (
    <div >
      <div className="mx-auto max-w-[1080px] md:mt-8">
        <div className="w-full">
          <h1 className="md:text-4xl text-3xl md:mb-5 text-center font-bold md:text-left font-lora">
            Liên hệ với chúng tôi
          </h1>
          <div className="border-b-2 border-black md:w-[30%] w-24 mt-4 md:mt-2 mx-auto lg:mx-0"></div>
        </div>
      </div>

      <div className="mx-auto md:px-0 px-12 max-w-[1080px] flex flex-col lg:flex-row items-center gap-8 font-lora mt-8">
        <div className="w-full lg:w-1/2">
          <form className="md:space-y-8 space-y-8">
            <div>
              <label className="block md:text-base text-sm font-medium mb-4 md:mb-2" htmlFor="name">
                Họ và Tên (*)
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black text-base"
                required
              />
            </div>
            <div>
              <label className="block md:text-base text-sm font-medium mb-4 md:mb-2" htmlFor="phone">
                Số điện thoại (*)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black text-base"
                required
              />
            </div>
            <div>
              <label className="block md:text-base text-sm font-medium mb-4 md:mb-2" htmlFor="email">
                Email (*)
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black text-base"
                required
              />
            </div>
            <div>
              <label className="block md:text-base text-sm font-medium mb-4 md:mb-2" htmlFor="projectType">
                Loại hình công trình
              </label>
              <input
                type="text"
                id="projectType"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black text-base"
              />
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="policy"
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="policy" className="text-sm">
              Tôi đã đọc Chính sách quyền riêng tư và tôi đồng ý để Len's Decor gửi cho tôi thông tin tiếp thị.
              </label>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-18 py-3 hover:bg-gray-800 transition uppercase text-sm"
            >
              Gửi
            </button>
          </form>
        </div>

        {/* Vị trí công ty */}
        <div className="w-full md:mt-0 mt-8 lg:w-1/2 font-lora">
          <h2 className="md:text-xl font-bold md:mb-4 mb-2 uppercase">
            Vị trí công ty
          </h2>
          <div className="md:border-b-2 border-b-3 border-black md:w-12 w-20 mb-4"></div>
          <div className="flex space-x-6">
            {Object.keys(locations).map((key) => (
              <button
                key={key}
                onClick={() => setActiveLocation(key)}
                className={`pb-1 text-sm font-medium uppercase transition-colors 
                  ${
                    activeLocation === key
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500 hover:text-black'
                  }`}
              >
                {locations[key].name}
              </button>
            ))}
          </div>
          <div className="mt-6 relative">
            <iframe
              src={locations[activeLocation].mapSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title={locations[activeLocation].name}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;