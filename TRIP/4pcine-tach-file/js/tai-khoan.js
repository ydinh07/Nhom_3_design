/* THÀNH VIÊN 4: ĐĂNG KÝ, ĐĂNG NHẬP VÀ ĐĂNG XUẤT TÀI KHOẢN DEMO. */
function layTaiKhoan() {
    return docDuLieu("4pcine_tai_khoan", []);
}
function hienThiTenTaiKhoan() {
    const nut = document.getElementById("nut-tai-khoan");
    const email = layEmailHienTai();
    if (email !== "khach") {
        const nguoiDung = layTaiKhoan().find(taiKhoan => taiKhoan.email === email);
        nut.textContent = nguoiDung ? nguoiDung.ten + " · Đăng xuất" : "Đăng xuất";
        nut.removeAttribute("data-trang");
        nut.setAttribute("data-hanh-dong", "dang-xuat");
    } else {
        nut.textContent = "Đăng nhập";
        nut.setAttribute("data-trang", "tai-khoan");
        nut.removeAttribute("data-hanh-dong");
    }
}
function doiBieuMauTaiKhoan(loai) {
    document.getElementById("form-dang-nhap").classList.toggle("an-di", loai !== "dang-nhap");
    document.getElementById("form-dang-ky").classList.toggle("an-di", loai !== "dang-ky");
    document.querySelectorAll("[data-bieu-mau]").forEach(nut => {
        nut.classList.toggle("dang-chon", nut.dataset.bieuMau === loai);
    });
}

/* Tạo sẵn tài khoản mẫu để có thể thử website ngay lần đầu mở. */
if (!layTaiKhoan().length) {
    luuDuLieu("4pcine_tai_khoan", [{ ten: "Minh Nguyễn", email: "minh@4pcine.demo", matKhau: "123456" }]);
}

/* Xử lý đăng nhập: kiểm tra email và mật khẩu trong dữ liệu demo của trình duyệt. */
document.getElementById("form-dang-nhap").addEventListener("submit", function (suKien) {
    suKien.preventDefault();
    const email = document.getElementById("email-dang-nhap").value.trim().toLowerCase();
    const matKhau = document.getElementById("mat-khau-dang-nhap").value;
    const taiKhoan = layTaiKhoan().find(muc => muc.email === email && muc.matKhau === matKhau);
    const thongBao = document.getElementById("loi-dang-nhap");
    if (!taiKhoan) { thongBao.textContent = "Email hoặc mật khẩu chưa đúng."; return; }
    localStorage.setItem("4pcine_email_dang_nhap", taiKhoan.email);
    thongBao.textContent = "Đăng nhập thành công!";
    hienThiTenTaiKhoan(); hienThiThuVien(); chuyenTrang("trang-chu");
});

/* Xử lý đăng ký: kiểm tra email trùng rồi lưu tài khoản demo. */
document.getElementById("form-dang-ky").addEventListener("submit", function (suKien) {
    suKien.preventDefault();
    const ten = document.getElementById("ten-dang-ky").value.trim();
    const email = document.getElementById("email-dang-ky").value.trim().toLowerCase();
    const matKhau = document.getElementById("mat-khau-dang-ky").value;
    const thongBao = document.getElementById("loi-dang-ky");
    const taiKhoan = layTaiKhoan();
    if (taiKhoan.some(muc => muc.email === email)) { thongBao.textContent = "Email này đã được đăng ký."; return; }
    taiKhoan.push({ ten: ten, email: email, matKhau: matKhau });
    luuDuLieu("4pcine_tai_khoan", taiKhoan);
    localStorage.setItem("4pcine_email_dang_nhap", email);
    thongBao.textContent = "Tạo tài khoản thành công!";
    hienThiTenTaiKhoan(); hienThiThuVien(); chuyenTrang("trang-chu");
});

/* Đăng xuất chỉ xóa tài khoản hiện tại; danh sách phim đã lưu vẫn còn theo email đó. */
function dangXuat() {
    localStorage.removeItem("4pcine_email_dang_nhap");
    hienThiTenTaiKhoan(); hienThiThuVien(); chuyenTrang("trang-chu");
}
