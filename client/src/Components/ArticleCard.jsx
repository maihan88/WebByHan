import { motion } from 'framer-motion';

const ArticleCard = ({ title, date, source, description, image, link }) => {
  return (
    <div className="pl-[15px] pr-[15px] pb-[30px]">
      <motion.div
        className="bg-white h-auto md:w-[385px] rounded-2xl shadow-md overflow-hidden"
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <div className="relative">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </a>
        </div>
        <div className="box-text text-left p-5">
          <p className="text-sm text-black mb-2 font-lora">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              {source}
            </a>
            {" | "}{date}
          </p>
          <h3 className="text-lg font-semibold font-lora mb-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p className="text-sm text-black font-lora">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ArticleCard;
