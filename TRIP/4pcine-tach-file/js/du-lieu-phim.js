/* THÀNH VIÊN 2: DỮ LIỆU MẪU CỦA KHO PHIM. Sửa tên, năm, thể loại hoặc poster tại đây. */
const danhSachPhim = [
    { id: "inception", ten: "Inception", nam: 2010, theLoai: ["Hành động", "Viễn tưởng"], diem: 8.8, poster: "oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg", moTa: "Một chuyên gia đi vào giấc mơ để thực hiện nhiệm vụ đầy rủi ro." },
    { id: "interstellar", ten: "Interstellar", nam: 2014, theLoai: ["Viễn tưởng", "Phiêu lưu"], diem: 8.7, poster: "gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", moTa: "Nhóm phi hành gia vượt qua không gian để tìm hy vọng cho loài người." },
    { id: "dune-2", ten: "Dune: Part Two", nam: 2024, theLoai: ["Viễn tưởng", "Phiêu lưu"], diem: 8.5, poster: "1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", moTa: "Paul Atreides đối mặt với định mệnh trên hành tinh sa mạc Arrakis." },
    { id: "dark-knight", ten: "The Dark Knight", nam: 2008, theLoai: ["Hành động", "Tội phạm"], diem: 9.0, poster: "qJ2tW6WMUDux911r6m7haRef0WH.jpg", moTa: "Batman đối đầu với kẻ thù đẩy thành phố Gotham vào hỗn loạn." },
    { id: "oppenheimer", ten: "Oppenheimer", nam: 2023, theLoai: ["Chính kịch", "Lịch sử"], diem: 8.3, poster: "ptpr0kGAckfQkJeJIt8st5dglvd.jpg", moTa: "Câu chuyện về nhà vật lý đã góp phần tạo nên bước ngoặt lịch sử." },
    { id: "spiderverse", ten: "Spider-Man: Across the Spider-Verse", nam: 2023, theLoai: ["Hoạt hình", "Hành động"], diem: 8.6, poster: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", moTa: "Miles Morales bước vào cuộc phiêu lưu qua nhiều vũ trụ khác nhau." },
    { id: "coco", ten: "Coco", nam: 2017, theLoai: ["Hoạt hình", "Gia đình"], diem: 8.4, poster: "gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", moTa: "Cậu bé yêu âm nhạc khám phá bí mật của gia đình mình." },
    { id: "inside-out-2", ten: "Inside Out 2", nam: 2024, theLoai: ["Hoạt hình", "Gia đình"], diem: 7.6, poster: "vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", moTa: "Riley gặp những cảm xúc mới khi bước vào tuổi thiếu niên." },
    { id: "matrix", ten: "The Matrix", nam: 1999, theLoai: ["Viễn tưởng", "Hành động"], diem: 8.7, poster: "f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", moTa: "Một lập trình viên phát hiện thực tại có thể khác xa những gì anh biết." },
    { id: "batman", ten: "The Batman", nam: 2022, theLoai: ["Hành động", "Tội phạm"], diem: 7.8, poster: "74xTEgt7R36Fpooo50r9T25onhq.jpg", moTa: "Batman lần theo manh mối của một vụ án bí ẩn tại Gotham." }
];

/* THÀNH VIÊN 4: HÀM ĐỌC VÀ LƯU DỮ LIỆU NHỎ TRONG TRÌNH DUYỆT. */
function docDuLieu(tenKhoa, macDinh) {
    try { return JSON.parse(localStorage.getItem(tenKhoa)) || macDinh; }
    catch (loi) { return macDinh; }
}
function luuDuLieu(tenKhoa, duLieu) {
    localStorage.setItem(tenKhoa, JSON.stringify(duLieu));
}
function layEmailHienTai() {
    return localStorage.getItem("4pcine_email_dang_nhap") || "khach";
}
function layDanhSachCaNhan(loai) {
    return docDuLieu("4pcine_" + loai + "_" + layEmailHienTai(), []);
}
function luuDanhSachCaNhan(loai, danhSach) {
    luuDuLieu("4pcine_" + loai + "_" + layEmailHienTai(), danhSach);
}
function layPoster(phim) {
    return "https://image.tmdb.org/t/p/w342/" + phim.poster;
}
