const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Blog = require('./models/Blog');

dotenv.config();
connectDB();

// Dữ liệu Projects (Đã thêm gallery và info giả lập)
const projects = [
  { 
    originalId: 1, 
    name: "CĂN HỘ MRS ĐÀO - FELIZ EN VISTA", 
    category: "real", 
    image: "https://lendecor.vn/wp-content/uploads/2024/02/L03-900x600.jpg", 
    link: "#",
    location: "TP. Hồ Chí Minh",
    area: "120m2",
    year: "2024",
    description: "Dự án thiết kế nội thất căn hộ cao cấp theo phong cách hiện đại, tối ưu không gian sống.",
    gallery: [
        "https://lendecor.vn/wp-content/uploads/2024/02/L03-900x600.jpg",
        "https://lendecor.vn/wp-content/uploads/2024/02/2-900x600.jpg",
        "https://lendecor.vn/wp-content/uploads/2024/04/35-1-900x600.jpg"
    ]
  },
  { 
    originalId: 2, 
    name: "MRS LY PENTHOUSE", 
    category: "3d", 
    image: "https://lendecor.vn/wp-content/uploads/2024/05/380345202_710318727803538_4698426023863912454_n-900x675.jpg", 
    link: "#",
    location: "Hà Nội",
    area: "300m2",
    year: "2023",
    description: "Penthouse sang trọng với tầm nhìn panorama, sử dụng vật liệu gỗ óc chó và đá tự nhiên.",
    gallery: [
        "https://lendecor.vn/wp-content/uploads/2024/05/380345202_710318727803538_4698426023863912454_n-900x675.jpg",
        "https://lendecor.vn/wp-content/uploads/2025/03/6-2-720x900.webp"
    ]
  },
  // ... (Bạn có thể copy thêm các object cũ vào đây, nhưng nhớ thêm field gallery: [] rỗng cũng được để tránh lỗi)
  // Để tiết kiệm thời gian demo, tôi chỉ update chi tiết 2 cái đầu, các cái sau tôi gán mặc định.
];

// Hàm bổ sung dữ liệu mặc định cho các project còn thiếu để code không bị lỗi
// (Trong thực tế bạn sẽ nhập tay từng cái, còn đây là script auto)
const fullProjects = projects.concat(
    // Giả sử mảng cũ của bạn còn nhiều item nữa, ta map để thêm dữ liệu dummy
    [
        { originalId: 3, name: "MYSTERY VILLA - DISTRICT 2", category: "3d", image: "https://lendecor.vn/wp-content/uploads/2025/03/6-2-720x900.webp", link: "#" },
        { originalId: 4, name: "BIỆT THỰ MR ANH KIỆT", category: "real", image: "https://lendecor.vn/wp-content/uploads/2024/02/2-900x600.jpg", link: "#" }
    ].map(p => ({
        ...p,
        location: "Đang cập nhật",
        area: "Chưa xác định",
        year: "2025",
        description: "Thông tin chi tiết đang được cập nhật.",
        gallery: [p.image] // Mặc định lấy ảnh bìa làm ảnh gallery
    }))
);


// Dữ liệu Blog (Đã thêm content HTML giả lập)
const blogs = [
    { 
        originalId: 1, 
        title: 'Nhà thầu xây dựng Y: Tố quyết định thành bại của dự án nội thất', 
        description: 'Tóm tắt vài dòng về bài viết này...', 
        image: 'https://lendecor.vn/wp-content/uploads/2025/04/488847491_1096350825866991_7108583084997488536_n.webp', 
        link: '/blog/bai-viet-1',
        content: `
            <p>Đây là nội dung chi tiết bài viết số 1.</p>
            <h3>1. Tầm quan trọng của nhà thầu</h3>
            <p>Nhà thầu đóng vai trò then chốt trong việc hiện thực hóa bản vẽ...</p>
            <img src="https://lendecor.vn/wp-content/uploads/2025/04/488847491_1096350825866991_7108583084997488536_n.webp" alt="Minh hoa" />
            <p>Kết luận lại, chủ nhà cần sáng suốt...</p>
        `
    },
    // Các bài khác thêm tương tự...
    { 
        originalId: 2, 
        title: 'Cập nhật: Xu hướng thiết kế nội thất nhà ở năm 2025', 
        description: 'Năm 2025 hứa hẹn những bước tiến mới...', 
        image: 'https://lendecor.vn/wp-content/uploads/2025/04/482055636_1075788047923269_1553945189537200253_n.webp', 
        link: '/blog/bai-viet-2',
        content: '<p>Nội dung bài viết xu hướng 2025 đang được biên soạn...</p>'
    }
];

const importData = async () => {
    try {
        await Project.deleteMany();
        await Blog.deleteMany();

        await Project.insertMany(fullProjects);
        await Blog.insertMany(blogs);

        console.log('Data Imported Successfully with Details!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();