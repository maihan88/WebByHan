import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo-Lens-Decor.png";
import LogoBlack from "../Images/Logo-Lens-Decor-Balck-1.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?s=${encodeURIComponent(searchText)}`;
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="absolute w-full z-50 top-10">
      {/* Container Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between py-6">
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 top-3 z-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-30" : "opacity-100"
          }`}
        >
          <Link to="/" title="LEN'S Decor" rel="home">
            <img src={Logo} alt="LEN'S Decor" className="lg:h-9 h-7" />
          </Link>
        </div>
      </div>

      {/* Icon Search & Menu */}
      <div
        className={`${
          isSticky
            ? "fixed lg:top-6 lg:right-[145px] right-[20px] top-10"
            : "absolute lg:top-4 lg:right-[145px] right-[20px] top-4"
        } flex items-center space-x-2 transition-all duration-500 ease-in-out`}
      >
        {/* Search Icon & Form */}
        <div className="relative" onMouseEnter={() => setIsSearchOpen(true)}>
          <button
            className={`${scrolling ? "text-black" : "text-white"} hover:text-gray-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {isSearchOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-[300px] bg-white border border-gray-200 shadow-md z-50 p-4"
              onMouseLeave={() => setIsSearchOpen(false)}
            >
              <form
                method="get"
                className="flex border border-gray-200"
                action="/"
                role="search"
                onSubmit={handleSearchSubmit}
              >
                <input
                  type="search"
                  className="flex-grow h-10 px-3 bg-gray-100 border-none outline-none text-gray-700"
                  name="s"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Từ khóa tìm kiếm..."
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-12 h-10 bg-[#d36e53] text-white flex items-center justify-center hover:bg-[#c05e45]"
                  aria-label="Submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Menu Icon */}
        <button
          className={`${scrolling ? "text-black" : "text-white"} hover:text-gray-600`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Nút đóng menu cho desktop bên ngoài sidebar */}
      {isMenuOpen && (
        <div className="hidden md:block fixed top-3 right-5 z-60">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-black"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${"min-[376px]:w-[425px] max-[376px]:w-full md:min-[376px]:w-[376px] md:max-[376px]:w-full"} bg-white bg-opacity-90`}
      >
        {/* Nút đóng menu cho mobile bên trong sidebar */}
        <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className=" pb-8 md:pt-[50px] md:pb-[30px]">
          <ul className="flex flex-col divide-y divide-gray-300">
            <li className="flex items-center px-4 md:px-[20px]">
              <img src={LogoBlack} alt="LEN'S Decor" className="h-9 mb-4" />
            </li>
            <li className="flex items-center py-4 hover:bg-gray-100">
              <Link
                to="/"
                className="font-lora px-4 text-black uppercase hover:text-gray-600 transition"
              >
                Trang Chủ
              </Link>
            </li>
            <li className="flex items-center py-4 hover:bg-gray-100">
              <Link
                to="/gioi-thieu"
                className="font-lora px-4 text-black uppercase hover:text-gray-600 transition"
              >
                Giới Thiệu
              </Link>
            </li>
            <li className="flex items-center py-4 hover:bg-gray-100">
              <Link
                to="/project"
                className="font-lora px-4 text-black uppercase hover:text-gray-600 transition"
              >
                Dự Án Của Len's Decor
              </Link>
            </li>
            <li className="flex items-center py-4 hover:bg-gray-100">
              <Link
                to="/blog-news"
                className="font-lora px-4 text-black uppercase hover:text-gray-600 transition"
              >
                Blog & Tin Tức
              </Link>
            </li>
            <li className="flex items-center py-4 hover:bg-gray-100">
              <Link
                to="/lien-he"
                className="font-lora px-4 text-black uppercase hover:text-gray-600 transition"
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay khi menu mở */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-35 z-49"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
