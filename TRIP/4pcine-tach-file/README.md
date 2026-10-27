# 4PCINE - Dự án chia file cho người mới học

## Cấu trúc thư mục

- `html/index.html`: một file HTML chứa các khu vực trang chủ, kho phim, chi tiết phim, tài khoản, yêu thích và lịch sử.
- `css/chung.css`: màu chung, đầu trang, menu, nút và chân trang.
- `css/trang-chu.css`: banner, thể loại và thẻ phim ở trang chủ.
- `css/kho-phim.css`: bộ lọc, chi tiết phim và trình phát mẫu.
- `css/tai-khoan.css`: giao diện đăng nhập và đăng ký.
- `js/du-lieu-phim.js`: dữ liệu phim và hàm đọc/lưu LocalStorage.
- `js/kho-phim.js`: tạo thẻ phim, lọc phim, chi tiết phim, yêu thích và lịch sử.
- `js/tai-khoan.js`: đăng ký, đăng nhập, đăng xuất demo.
- `js/ung-dung.js`: chuyển trang, xử lý sự kiện và khởi tạo website.

## Cách chạy

Mở thư mục `4pcine-tach-file` trong Visual Studio Code. Dùng Live Server để mở `html/index.html`. Giữ nguyên cấu trúc ba thư mục vì HTML liên kết tới CSS/JS bằng đường dẫn tương đối.

## Tài khoản mẫu

- Email: `minh@4pcine.demo`
- Mật khẩu: `123456`

## Chia công việc cho 4 người

1. **Thành viên 1 – Trang chủ và điều hướng:** `html/index.html` phần đầu trang/trang chủ/chân trang; `css/chung.css` và `css/trang-chu.css`; `js/ung-dung.js` phần menu và khởi tạo.
2. **Thành viên 2 – Kho phim:** `html/index.html` phần kho phim; `css/kho-phim.css` phần bộ lọc; `js/du-lieu-phim.js` dữ liệu và `js/kho-phim.js` phần tạo danh sách/lọc/sắp xếp.
3. **Thành viên 3 – Chi tiết và trình phát:** `html/index.html` phần chi tiết phim; `css/kho-phim.css` phần chi tiết/trình phát; `js/kho-phim.js` phần mở chi tiết và ghi lịch sử; `js/ung-dung.js` sự kiện phát video.
4. **Thành viên 4 – Tài khoản và thư viện cá nhân:** `html/index.html` phần tài khoản/yêu thích/lịch sử; `css/tai-khoan.css`; `js/tai-khoan.js` tài khoản; `js/kho-phim.js` phần yêu thích/lịch sử; `js/du-lieu-phim.js` phần LocalStorage.

Mỗi người có trách nhiệm chỉnh HTML, CSS và JavaScript trong phạm vi chức năng được giao. Hãy báo nhóm trước khi đổi tên ID được JavaScript sử dụng.

## Lưu ý

Đây là bản frontend phục vụ học tập. Tài khoản demo và danh sách cá nhân được lưu trên trình duyệt bằng LocalStorage; mật khẩu demo không được bảo vệ theo tiêu chuẩn website thật. Video phát là video mẫu, không phải phim thương mại đầy đủ. Poster lấy từ đường dẫn ảnh TMDB và cần Internet để tải.
