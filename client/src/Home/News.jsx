import ArticleCard from "../Components/ArticleCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const News = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const articles = [
    {
      title: "CEO Phạm Minh Tuyền: 'Xác định nhân sự chính là linh hồn của Len’s Decor'",
      date: "30/11/2023",
      source: "THANHNIEN.VN",
      description:
        "“Nhân sự là linh hồn của Len’s Decor. Nhân viên đứng thứ nhất, khách hàng đứng thứ hai, và tôi chỉ đứng thứ 3” – Không chỉ nhấn mạnh vai trò của nhâ...",
      image: "https://lendecor.vn/wp-content/uploads/2024/02/1-17012605977081623918557.webp",
      link: "https://thanhnien.vn/ceo-pham-minh-tuyen-toi-xac-dinh-nhan-su-chinh-la-linh-hon-cua-lens-decor-185231129192901604.htm",
    },
    {
      title: "Len’s Decor và hành trình 10 năm kiến tạo những ngôi nhà mơ ước",
      date: "24/11/2023",
      source: "CAFEBIZ",
      description:
        "Đi lên từ 'trang giấy trắng', bằng sự tử tế và chân thành, Len’s Decor đã thành công chuyển mình để trở thành một trong những thương hiệu thiết kế...",
      image: "https://lendecor.vn/wp-content/uploads/2024/02/17-1.jpg",
      link: "https://cafef.vn/lens-decor-va-hanh-trinh-10-nam-kien-tao-nhung-ngoi-nha-mo-uoc-188231124125326898.chn",
    },
    {
      title: "Triết lý 'bổn phận ấm êm' của công ty thiết kế Len’s Decor",
      date: "05/12/2023",
      source: "VIETNAMNET.VN",
      description:
        "Từ một nhóm nhỏ 3 thành viên, Len’s Decor đã có những bước phát triển mạnh mẽ và trở thành một trong những công ty hàng đầu trong lĩnh vực xây...",
      image: "https://lendecor.vn/wp-content/uploads/2024/02/gioi-thieu.webp",
      link: "https://vietnamnet.vn/triet-ly-bon-phan-am-em-cua-cong-ty-thiet-ke-len-s-decor-2222628.html",
    },
  ];

  const textSlideVariant = {hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};;

  const articleCardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: isMobile ? 0 : index * 0.3
      }
    })
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center max-w-[1250px] mx-auto px-4">
         <motion.div
          className="text-center md:mb-22 mb-18"
          variants={textSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          >
          <h2 className="md:text-4xl text-2xl uppercase font-lora font-bold mb-[18px]">Báo chí</h2>
          <div className="mx-auto my-4" style={{ maxWidth: "90px", height: "1.5px", backgroundColor: "#000" }}></div>
          <p className="text-[16px] font-lora text-black px-4 md:pl-[22%] md:pr-[22%]">
            Len’s Decor mong muốn mang đến cho khách hàng những bản thiết kế mãn nhãn, những công trình đẳng cấp và sự chuyên nghiệp, tận tâm trong quy cách phục vụ. Đó cũng chính là những điều Len luôn tâm niệm trong suốt hành trình 10 năm làm nghề của mình.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              variants={articleCardVariant}
              custom={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;