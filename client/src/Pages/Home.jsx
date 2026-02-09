import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProjectSection from "../Home/ProjectSection";
import AboutSlide from "../Home/AboutSlide";
import ServicesCarousel from "../Home/ServicesCarousel";
import RatingSlide from "../Home/RatingSlide";
import News from "../Home/News";
import YourChoice from "../Home/YourChoice";
import Footer from "../Components/Footer";
import FloatingContact from "../Components/FloatingContact";


const Home = () => {
  return (
    <div className="h-screen w-screen">
      <FloatingContact />
      <Header />
      <Hero />
      <div className= "overflow-x-hidden">
      <div className="w-full h-full bg-[rgb(244,240,236)] ">
        <section className="relative md:pt-[120px] md:pb-[120px] pb-[50px] bg-[rgb(244,240,236)]">
          {/* SVG Background */}
          <div
            className="
              absolute inset-0 
              overflow-hidden 
              bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So3.svg')]
              bg-left-top
              bg-[length:34%_auto]
              bg-no-repeat
            "
          ></div>
          <ProjectSection />
        </section>
        <div className="relative z-10 bg-white">
        <section className="relative md:pt-[120px] md:pb-[120px] pt-[30px] pb-[100px]">
          <div
            className="
              absolute inset-0
              overflow-hidden
              bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So1.svg')]
              bg-left-top
              bg-[length:34%_auto]
              bg-no-repeat
            "
          ></div>
          <AboutSlide />
        </section>
        <div className="relative z-9  bg-[rgb(244,240,236)]">
        <section className="relative md:pt-[80px] md:pb-[80px] pt-[50px] pb-[50px] bg-[rgb(244,240,236)]">
        <div
            className="
              absolute inset-0 
              overflow-hidden 
              bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So2.svg')]
              bg-left-top
              bg-[length:34%_auto]
              bg-no-repeat
            "
          ></div>
        <ServicesCarousel />
        </section>
        <div className="relative z-10 bg-white">
        <section className="relative md:pt-[100px] md:pb-[100px] pt-[50px] pb-[50px]">
          <div
            className="
              absolute inset-0
              overflow-hidden
              bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So4.svg')]
              bg-left-top
              bg-[length:34%_auto]
              bg-no-repeat
            "
          ></div>
          <RatingSlide />
        </section>
        <div className="relative z-9  bg-[rgb(244,240,236)]">
        <section className="relative md:pt-[80px] md:pb-[30px] pt-[50px] pb-[50px] bg-[rgb(244,240,236)]">
        <div
            className="
              absolute inset-0 
              overflow-hidden 
              bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So5.svg')]
              bg-left-top
              bg-[length:34%_auto]
              bg-no-repeat
            "
          ></div>
        <News />
        </section>
        <div className="relative z-10 bg-white">
        <section className="relative md:pt-[120px] md:pb-[120px] pt-[30px] pb-[80px]">
          <div
            className="
              absolute inset-0
              overflow-hidden
              bg-[url('https://lendecor.vn/wp-content/uploads/2024/01/So.svg')]
              bg-left-top
              bg-[length:34%_auto]
              bg-no-repeat
            "
          ></div>
          <YourChoice />
        </section>
        </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
