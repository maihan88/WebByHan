import React, { useState } from 'react';

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState('hcm');
  
  // State lưu dữ liệu form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '' // Đổi từ projectType sang message cho đúng chuẩn backend
  });
  
  const [status, setStatus] = useState({ loading: false, success: null, msg: '' });

  const locations = {
    hcm: {
      name: 'HỒ CHÍ MINH',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424364447761!2d106.7028!3d10.7788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzQzLjciTiAxMDbCsDQyJzEwLjEiRQ!5e0!3m2!1svi!2s!4v1614000000000!5m2!1svi!2s', 
      // (Lưu ý: Link map trên chỉ là ví dụ, bạn có thể giữ nguyên link cũ của bạn nếu muốn)
    },
    hanoi: {
      name: 'HÀ NỘI',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096!2d105.85!3d21.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAxJzQwLjgiTiAxMDXCsDUxJzAwLjAiRQ!5e0!3m2!1svi!2s!4v1614000000000!5m2!1svi!2s',
    },
  };

  // Hàm xử lý khi nhập liệu
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Hàm gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, msg: '' });

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, success: true, msg: 'Gửi liên hệ thành công! Chúng tôi sẽ gọi lại sớm.' });
        setFormData({ name: '', phone: '', email: '', message: '' }); // Reset form
      } else {
        setStatus({ loading: false, success: false, msg: data.message || 'Có lỗi xảy ra.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: false, msg: 'Lỗi kết nối server.' });
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-[1080px] md:mt-8">
        <div className="w-full">
          <h1 className="md:text-4xl text-3xl md:mb-5 text-center font-bold md:text-left font-lora">
            Liên hệ với chúng tôi
          </h1>
          <div className="border-b-2 border-black md:w-[30%] w-24 mt-4 md:mt-2 mx-auto lg:mx-0"></div>
        </div>
      </div>

      <div className="mx-auto md:px-0 px-12 max-w-[1080px] flex flex-col lg:flex-row items-start gap-12 font-lora mt-10 mb-20">
        
        {/* Form Liên Hệ */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2" htmlFor="name">
                Họ và Tên (*)
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                placeholder="Nhập họ tên của bạn"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2" htmlFor="phone">
                Số điện thoại (*)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2" htmlFor="email">
                Email (*)
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2" htmlFor="message">
                Lời nhắn / Loại công trình
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Bạn cần tư vấn gì? (Ví dụ: Biệt thự 200m2...)"
              ></textarea>
            </div>
            
            <div className="flex items-start mt-4">
              <input type="checkbox" id="policy" className="mt-1 mr-2 cursor-pointer" required />
              <label htmlFor="policy" className="text-sm text-gray-600 cursor-pointer select-none">
                Tôi đồng ý với chính sách bảo mật thông tin của Len's Decor.
              </label>
            </div>

            {/* Thông báo trạng thái */}
            {status.msg && (
              <div className={`p-3 text-sm ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className={`bg-black text-white px-10 py-3 uppercase text-sm font-bold tracking-widest hover:bg-gray-800 transition-all ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status.loading ? 'Đang gửi...' : 'Gửi Liên Hệ'}
            </button>
          </form>
        </div>

        {/* Bản đồ / Vị trí */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-lg font-bold uppercase mb-4">Vị trí văn phòng</h2>
          <div className="flex space-x-8 border-b border-gray-200 mb-6">
            {Object.keys(locations).map((key) => (
              <button
                key={key}
                onClick={() => setActiveLocation(key)}
                className={`pb-2 text-sm font-bold uppercase transition-all border-b-2 
                  ${activeLocation === key ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              >
                {locations[key].name}
              </button>
            ))}
          </div>
          <div className="relative bg-gray-100 h-[400px]">
            <iframe
              src={locations[activeLocation].mapSrc}
              width="100%"
              height="100%"
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