/* THÀNH VIÊN 1: ĐIỀU HƯỚNG MENU VÀ KHỞI TẠO CÁC KHU VỰC CHUNG. */
function chuyenTrang(tenTrang) {
    const idTrang = tenTrang === "trang-chu" ? "trang-chu" : "trang-" + tenTrang;
    document.querySelectorAll(".trang").forEach(trang => trang.classList.remove("noi-dung-dang-hien"));
    const trangCanMo = document.getElementById(idTrang);
    if (trangCanMo) trangCanMo.classList.add("noi-dung-dang-hien");
    document.querySelectorAll(".nut-menu").forEach(nut => nut.classList.toggle("dang-chon", nut.dataset.trang === tenTrang));
    if (tenTrang === "kho-phim") hienThiKhoPhim();
    if (tenTrang === "yeu-thich" || tenTrang === "lich-su") hienThiThuVien();
    window.scrollTo(0, 0);
}

/* Một bộ xử lý click chung để nút nào có data-hanh-dong thì chạy đúng chức năng. */
document.addEventListener("click", function (suKien) {
    const nutTrang = suKien.target.closest("[data-trang]");
    const nutHanhDong = suKien.target.closest("[data-hanh-dong]");
    const nutBieuMau = suKien.target.closest("[data-bieu-mau]");
    if (nutTrang) { suKien.preventDefault(); chuyenTrang(nutTrang.dataset.trang); }
    if (nutBieuMau) doiBieuMauTaiKhoan(nutBieuMau.dataset.bieuMau);
    if (!nutHanhDong) return;
    const hanhDong = nutHanhDong.dataset.hanhDong;
    if (hanhDong === "mo-chi-tiet") moChiTietPhim(nutHanhDong.dataset.idPhim);
    if (hanhDong === "doi-yeu-thich") doiYeuThich(nutHanhDong.dataset.idPhim);
    if (hanhDong === "chon-the-loai") {
        document.getElementById("loc-the-loai").value = nutHanhDong.dataset.theLoai;
        document.getElementById("o-tim-kiem").value = "";
        chuyenTrang("kho-phim");
    }
    if (hanhDong === "sap-xep-diem") {
        document.getElementById("sap-xep").value = "diem-cao";
        chuyenTrang("kho-phim");
    }
    if (hanhDong === "phat-video") {
        const video = document.getElementById("trinh-phat");
        video.src = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
        video.classList.remove("an-di");
        video.play().catch(() => { video.setAttribute("controls", "controls"); });
    }
    if (hanhDong === "dang-xuat") dangXuat();
});

/* Thanh tìm kiếm đưa người dùng tới kho phim và cập nhật kết quả theo từ khóa. */
document.getElementById("form-tim-kiem").addEventListener("submit", function (suKien) {
    suKien.preventDefault();
    chuyenTrang("kho-phim");
});
document.getElementById("loc-the-loai").addEventListener("change", hienThiKhoPhim);
document.getElementById("sap-xep").addEventListener("change", hienThiKhoPhim);

/* Khởi tạo website: nạp thể loại, hiển thị phim và cập nhật nút tài khoản. */
napTheLoai();
hienThiTrangChu();
hienThiKhoPhim();
hienThiThuVien();
hienThiTenTaiKhoan();
