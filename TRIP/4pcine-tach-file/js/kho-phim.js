/* THÀNH VIÊN 2: TẠO THẺ PHIM, TRANG CHỦ, LỌC KHO PHIM VÀ CHI TIẾT PHIM. */
function taoThePhim(phim) {
    const yeuThich = layDanhSachCaNhan("yeu_thich");
    const daThich = yeuThich.includes(phim.id);
    return `<article class="the-phim">
        <img class="anh-phim" src="${layPoster(phim)}" alt="Poster ${phim.ten}" loading="lazy">
        <div class="thong-tin-phim">
            <h3 class="ten-phim">${phim.ten}</h3>
            <div class="duoi-phim"><span>${phim.nam}</span><span>★ ${phim.diem}</span></div>
            <button class="nut-xem-phim" data-hanh-dong="mo-chi-tiet" data-id-phim="${phim.id}">Xem chi tiết</button>
            <button class="nut-yeu-thich ${daThich ? "da-thich" : ""}" data-hanh-dong="doi-yeu-thich" data-id-phim="${phim.id}">${daThich ? "♥ Đã thích" : "♡ Yêu thích"}</button>
        </div>
    </article>`;
}
function hienThiDanhSach(danhSach, idNoiDung) {
    const noiDung = document.getElementById(idNoiDung);
    if (!danhSach.length) {
        noiDung.innerHTML = '<p class="thong-bao-rong">Chưa có phim ở đây. Hãy chọn phim hoặc thử bộ lọc khác.</p>';
        return;
    }
    noiDung.innerHTML = danhSach.map(taoThePhim).join("");
}
function hienThiTrangChu() {
    hienThiDanhSach(danhSachPhim.slice(0, 6), "phim-noi-bat");
    hienThiDanhSach([...danhSachPhim].sort((a, b) => b.diem - a.diem).slice(0, 6), "phim-diem-cao");
    hienThiDanhSach(danhSachPhim.filter(phim => phim.theLoai.includes("Hoạt hình")), "phim-hoat-hinh");
    const theLoai = ["Hành động", "Viễn tưởng", "Hoạt hình", "Tội phạm", "Gia đình", "Chính kịch"];
    document.getElementById("ds-the-loai").innerHTML = theLoai.map(ten => `<button class="the-loai" data-hanh-dong="chon-the-loai" data-the-loai="${ten}"><strong>${ten}</strong><small>Khám phá phim ${ten.toLowerCase()}</small></button>`).join("");
}
function napTheLoai() {
    const cacTheLoai = [...new Set(danhSachPhim.flatMap(phim => phim.theLoai))].sort();
    document.getElementById("loc-the-loai").innerHTML += cacTheLoai.map(ten => `<option value="${ten}">${ten}</option>`).join("");
}
function hienThiKhoPhim() {
    const tuKhoa = document.getElementById("o-tim-kiem").value.trim().toLowerCase();
    const theLoai = document.getElementById("loc-the-loai").value;
    const sapXep = document.getElementById("sap-xep").value;
    let ketQua = danhSachPhim.filter(phim => phim.ten.toLowerCase().includes(tuKhoa));
    if (theLoai !== "tat-ca") ketQua = ketQua.filter(phim => phim.theLoai.includes(theLoai));
    if (sapXep === "diem-cao") ketQua.sort((a, b) => b.diem - a.diem);
    if (sapXep === "nam-moi") ketQua.sort((a, b) => b.nam - a.nam);
    if (sapXep === "ten-a-z") ketQua.sort((a, b) => a.ten.localeCompare(b.ten));
    document.getElementById("so-luong-phim").textContent = "Tìm thấy " + ketQua.length + " phim";
    hienThiDanhSach(ketQua, "ket-qua-kho-phim");
}
function moChiTietPhim(idPhim) {
    const phim = danhSachPhim.find(muc => muc.id === idPhim);
    if (!phim) return;
    const lichSu = layDanhSachCaNhan("lich_su").filter(id => id !== idPhim);
    lichSu.unshift(idPhim);
    luuDanhSachCaNhan("lich_su", lichSu.slice(0, 12));
    document.getElementById("noi-dung-chi-tiet").innerHTML = `<div class="noi-dung-chi-tiet">
        <img class="poster-chi-tiet" src="${layPoster(phim)}" alt="Poster ${phim.ten}">
        <div class="chi-tiet-chu"><p class="nhan-nho">THÔNG TIN PHIM</p><h1>${phim.ten}</h1>
        <p class="thong-tin-bo-sung">${phim.nam} · ★ ${phim.diem} · ${phim.theLoai.join(", ")}</p>
        <p>${phim.moTa}</p><div class="hang-nut"><button class="nut-chinh" data-hanh-dong="phat-video">Phát video mẫu</button><button class="nut-phu" data-hanh-dong="doi-yeu-thich" data-id-phim="${phim.id}">♡ Yêu thích</button></div>
        <video class="video-mau an-di" id="trinh-phat" controls></video><p class="ghi-chu">Video dưới đây chỉ là video mẫu để thử trình phát, không phải toàn bộ phim thương mại.</p></div></div>`;
    chuyenTrang("chi-tiet");
}
function doiYeuThich(idPhim) {
    let danhSach = layDanhSachCaNhan("yeu_thich");
    danhSach = danhSach.includes(idPhim) ? danhSach.filter(id => id !== idPhim) : [...danhSach, idPhim];
    luuDanhSachCaNhan("yeu_thich", danhSach);
    hienThiTrangChu(); hienThiKhoPhim(); hienThiThuVien();
}
function hienThiThuVien() {
    const yeuThich = layDanhSachCaNhan("yeu_thich");
    const lichSu = layDanhSachCaNhan("lich_su");
    hienThiDanhSach(danhSachPhim.filter(phim => yeuThich.includes(phim.id)), "ds-yeu-thich");
    hienThiDanhSach(lichSu.map(id => danhSachPhim.find(phim => phim.id === id)).filter(Boolean), "ds-lich-su");
}
