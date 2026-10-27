"use strict";
/* ==================================================
   TÍN - PHẦN 1: DỮ LIỆU PHIM
   Mỗi phim là một object gồm thông tin riêng.
================================================== */

var movies = [{
  id: 1,
  title: "Interstellar",
  genre: "Khoa học viễn tưởng",
  year: 2014,
  duration: "169 phút",
  age: 13,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Christopher Nolan",
  writer: "Jonathan Nolan, Christopher Nolan",
  producer: "Emma Thomas",
  cast: ["Matthew McConaughey", "Anne Hathaway"],
  description: "Một nhóm phi hành gia thực hiện chuyến hành trình khám phá không gian nhằm tìm kiếm hy vọng cho tương lai nhân loại.",
  poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 2,
  title: "Inception",
  genre: "Hành động",
  year: 2010,
  duration: "148 phút",
  age: 13,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Christopher Nolan",
  writer: "Christopher Nolan",
  producer: "Emma Thomas",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
  description: "Một nhóm chuyên gia thực hiện nhiệm vụ đặc biệt trong thế giới của những giấc mơ.",
  poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 3,
  title: "Your Name",
  genre: "Tình cảm",
  year: 2016,
  duration: "106 phút",
  age: 13,
  country: "Nhật Bản",
  language: "Tiếng Nhật",
  director: "Makoto Shinkai",
  writer: "Makoto Shinkai",
  producer: "Noritaka Kawaguchi",
  cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi"],
  description: "Hai người trẻ xa lạ bất ngờ kết nối với nhau qua những hiện tượng kỳ lạ.",
  poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 4,
  title: "Spirited Away",
  genre: "Hoạt hình",
  year: 2001,
  duration: "125 phút",
  age: 7,
  country: "Nhật Bản",
  language: "Tiếng Nhật",
  director: "Hayao Miyazaki",
  writer: "Hayao Miyazaki",
  producer: "Toshio Suzuki",
  cast: ["Rumi Hiiragi", "Miyu Irino"],
  description: "Một cô bé bước vào thế giới kỳ ảo và tìm cách giải cứu gia đình mình.",
  poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 5,
  title: "The Dark Knight",
  genre: "Hành động",
  year: 2008,
  duration: "152 phút",
  age: 13,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Christopher Nolan",
  writer: "Jonathan Nolan, Christopher Nolan",
  producer: "Charles Roven",
  cast: ["Christian Bale", "Heath Ledger"],
  description: "Một người hùng phải đối mặt với thử thách lớn để bảo vệ thành phố.",
  poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 6,
  title: "Coco",
  genre: "Hoạt hình",
  year: 2017,
  duration: "105 phút",
  age: 7,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Lee Unkrich",
  writer: "Adrian Molina",
  producer: "Darla K. Anderson",
  cast: ["Anthony Gonzalez", "Gael García Bernal"],
  description: "Một cậu bé yêu âm nhạc bước vào hành trình khám phá gia đình và nguồn gốc của mình.",
  poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 7,
  title: "La La Land",
  genre: "Tình cảm",
  year: 2016,
  duration: "128 phút",
  age: 13,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Damien Chazelle",
  writer: "Damien Chazelle",
  producer: "Fred Berger",
  cast: ["Ryan Gosling", "Emma Stone"],
  description: "Hai người trẻ theo đuổi ước mơ và tìm cách cân bằng tình yêu với sự nghiệp.",
  poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 8,
  title: "A Quiet Place",
  genre: "Kinh dị",
  year: 2018,
  duration: "90 phút",
  age: 18,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "John Krasinski",
  writer: "Bryan Woods, Scott Beck, John Krasinski",
  producer: "Michael Bay",
  cast: ["Emily Blunt", "John Krasinski"],
  description: "Một gia đình tìm cách sinh tồn trong thế giới nơi tiếng động có thể dẫn đến nguy hiểm.",
  poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 9,
  title: "Dune",
  genre: "Khoa học viễn tưởng",
  year: 2021,
  duration: "155 phút",
  age: 13,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Denis Villeneuve",
  writer: "Jon Spaihts, Denis Villeneuve",
  producer: "Mary Parent",
  cast: ["Timothée Chalamet", "Zendaya"],
  description: "Một chàng trai bước vào cuộc hành trình định mệnh trên hành tinh sa mạc.",
  poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 10,
  title: "The Conjuring",
  genre: "Kinh dị",
  year: 2013,
  duration: "112 phút",
  age: 18,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "James Wan",
  writer: "Chad Hayes, Carey W. Hayes",
  producer: "Peter Safran",
  cast: ["Vera Farmiga", "Patrick Wilson"],
  description: "Hai nhà điều tra hiện tượng siêu nhiên nhận lời giúp đỡ một gia đình gặp những sự kiện đáng sợ.",
  poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 11,
  title: "Frozen",
  genre: "Hoạt hình",
  year: 2013,
  duration: "102 phút",
  age: 7,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Chris Buck, Jennifer Lee",
  writer: "Jennifer Lee",
  producer: "Peter Del Vecho",
  cast: ["Kristen Bell", "Idina Menzel"],
  description: "Hai chị em cùng khám phá sức mạnh của tình thân trong một vương quốc băng giá.",
  poster: "https://image.tmdb.org/t/p/w500/m3tdSyl11fhgXPDSEt3aBctTqGP.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}, {
  id: 12,
  title: "The Notebook",
  genre: "Tình cảm",
  year: 2004,
  duration: "123 phút",
  age: 13,
  country: "Mỹ",
  language: "Tiếng Anh",
  director: "Nick Cassavetes",
  writer: "Jeremy Leven, Jan Sardi",
  producer: "Lynn Harris",
  cast: ["Ryan Gosling", "Rachel McAdams"],
  description: "Một câu chuyện tình yêu trải qua nhiều thử thách của thời gian.",
  poster: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
}];
/* ==================================================
   TÍN - PHẦN 2: BIẾN VÀ HÀM TIỆN ÍCH
================================================== */

var $ = function $(selector) {
  return document.querySelector(selector);
};

var currentAgeGroup = null;
var currentAuthMode = "login";
var currentMovie = null;
var toastTimer;

function readStorage(key, fallback) {
  try {
    var value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    showToast("Không thể lưu dữ liệu trên trình duyệt.");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (_char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[_char];
  });
}

function showToast(message) {
  var toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);
}
/* ==================================================
   TÍN - PHẦN 3: QUẢN LÝ PHIM YÊU THÍCH
================================================== */


function getFavorites() {
  return readStorage("movieflixFavorites", []);
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  var favorites = getFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter(function (movieId) {
      return movieId !== id;
    });
    showToast("Đã xóa khỏi danh sách yêu thích.");
  } else {
    favorites.push(id);
    showToast("Đã thêm vào danh sách yêu thích.");
  }

  saveStorage("movieflixFavorites", favorites);
  renderMovies();
  renderFavorites();

  if (currentMovie && currentMovie.id === id) {
    openMovieDetail(id);
  }
}
/* ==================================================
   TÍN - PHẦN 4: TẠO THẺ PHIM
================================================== */


function createMovieCard(movie) {
  var favorite = isFavorite(movie.id);
  return "\n        <article class=\"movie-card\">\n            <div class=\"poster-wrap\">\n                <img\n                    class=\"poster\"\n                    src=\"".concat(escapeHTML(movie.poster), "\"\n                    alt=\"Poster ").concat(escapeHTML(movie.title), "\"\n                    loading=\"lazy\"\n                    onerror=\"this.onerror=null;this.src='https://placehold.co/400x600/1d172b/ffffff?text=MovieFlix'\"\n                >\n\n                <span class=\"age-badge\">").concat(movie.age, "+</span>\n\n                <button\n                    class=\"favorite-btn ").concat(favorite ? "active" : "", "\"\n                    data-favorite=\"").concat(movie.id, "\"\n                    aria-label=\"").concat(favorite ? "Bỏ yêu thích" : "Thêm yêu thích", "\"\n                    title=\"Phim y\xEAu th\xEDch\"\n                >").concat(favorite ? "♥" : "♡", "</button>\n            </div>\n\n            <div class=\"movie-info\">\n                <h3>").concat(escapeHTML(movie.title), "</h3>\n                <p class=\"movie-meta\">\n                    ").concat(movie.year, " \xB7 ").concat(escapeHTML(movie.genre), "\n                </p>\n                <div class=\"movie-actions\">\n                    <button class=\"btn btn-primary\"\n                            data-detail=\"").concat(movie.id, "\">\n                        Chi ti\u1EBFt\n                    </button>\n                    <button class=\"btn btn-secondary\"\n                            data-watch=\"").concat(movie.id, "\">\n                        Xem phim\n                    </button>\n                </div>\n            </div>\n        </article>\n    ");
}
/* ==================================================
   TÍN - PHẦN 5: TÌM KIẾM, LỌC VÀ SẮP XẾP
================================================== */


function getAllowedMovies() {
  // Người chọn dưới 18 tuổi sẽ không thấy phim 18+.
  if (currentAgeGroup === "under18") {
    return movies.filter(function (movie) {
      return movie.age < 18;
    });
  }

  return movies;
}

function getFilteredMovies() {
  var searchText = $("#searchInput").value.trim().toLowerCase();
  var genre = $("#genreFilter").value;
  var sort = $("#sortFilter").value;
  var result = getAllowedMovies().filter(function (movie) {
    var matchesSearch = movie.title.toLowerCase().includes(searchText);
    var matchesGenre = genre === "all" || movie.genre === genre;
    return matchesSearch && matchesGenre;
  });

  if (sort === "az") {
    result.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  } else if (sort === "year") {
    result.sort(function (a, b) {
      return b.year - a.year;
    });
  }

  return result;
}

function renderMovies() {
  var list = $("#movieList");
  var result = getFilteredMovies();
  list.innerHTML = result.map(createMovieCard).join("");
  $("#movieCount").textContent = "".concat(result.length, " phim");
  $("#emptyMessage").classList.toggle("hidden", result.length > 0);
}

function renderFavorites() {
  var favorites = getFavorites();
  var allowedMovies = getAllowedMovies();
  var favoriteMovies = allowedMovies.filter(function (movie) {
    return favorites.includes(movie.id);
  });
  $("#favoriteList").innerHTML = favoriteMovies.map(createMovieCard).join("");
  $("#favoriteEmpty").classList.toggle("hidden", favoriteMovies.length > 0);
}
/* ==================================================
   DIM - PHẦN 6: XÁC NHẬN ĐỘ TUỔI
================================================== */


function chooseAge(group) {
  currentAgeGroup = group;

  try {
    sessionStorage.setItem("movieflixAge", group);
  } catch (error) {// Vẫn có thể dùng website trong phiên hiện tại.
  }

  $("#ageModal").classList.remove("show");
  $("#mainContent").classList.remove("hidden");
  renderMovies();
  renderFavorites();

  if (group === "under18") {
    showToast("Đã bật chế độ nội dung dưới 18 tuổi.");
  } else {
    showToast("Chào mừng bạn đến với MovieFlix!");
  }
}

function initializeAgeGate() {
  var savedAge = null;

  try {
    savedAge = sessionStorage.getItem("movieflixAge");
  } catch (error) {
    savedAge = null;
  }

  if (savedAge === "adult" || savedAge === "under18") {
    chooseAge(savedAge);
  } else {
    $("#ageModal").classList.add("show");
    $("#mainContent").classList.add("hidden");
  }
}
/* ==================================================
   DIM - PHẦN 7: CHI TIẾT PHIM
================================================== */


function openMovieDetail(id) {
  var movie = getAllowedMovies().find(function (item) {
    return item.id === id;
  });

  if (!movie) {
    showToast("Phim không khả dụng trong chế độ tuổi hiện tại.");
    return;
  }

  currentMovie = movie;
  $("#detailContent").innerHTML = "\n        <div class=\"detail-layout\">\n            <img\n                class=\"detail-poster\"\n                src=\"".concat(escapeHTML(movie.poster), "\"\n                alt=\"Poster ").concat(escapeHTML(movie.title), "\"\n                onerror=\"this.onerror=null;this.src='https://placehold.co/400x600/1d172b/ffffff?text=MovieFlix'\"\n            >\n\n            <div>\n                <p class=\"eyebrow\">TH\xD4NG TIN PHIM</p>\n                <h2>").concat(escapeHTML(movie.title), "</h2>\n\n                <p class=\"detail-meta\">\n                    ").concat(movie.year, " \xB7 ").concat(escapeHTML(movie.genre), "\n                    \xB7 ").concat(escapeHTML(movie.duration), " \xB7 ").concat(movie.age, "+\n                </p>\n\n                <p class=\"detail-description\">\n                    ").concat(escapeHTML(movie.description), "\n                </p>\n\n                <p class=\"detail-credits\">\n                    <strong>\u0110\u1EA1o di\u1EC5n:</strong>\n                    ").concat(escapeHTML(movie.director), "\n                </p>\n\n                <p class=\"detail-credits\">\n                    <strong>K\u1ECBch b\u1EA3n:</strong>\n                    ").concat(escapeHTML(movie.writer), "\n                </p>\n\n                <p class=\"detail-credits\">\n                    <strong>Nh\xE0 s\u1EA3n xu\u1EA5t:</strong>\n                    ").concat(escapeHTML(movie.producer), "\n                </p>\n\n                <p class=\"detail-credits\">\n                    <strong>Qu\u1ED1c gia:</strong>\n                    ").concat(escapeHTML(movie.country), "\n                </p>\n\n                <p class=\"detail-credits\">\n                    <strong>Ng\xF4n ng\u1EEF:</strong>\n                    ").concat(escapeHTML(movie.language), "\n                </p>\n\n                <p class=\"detail-credits\">\n                    <strong>Di\u1EC5n vi\xEAn:</strong>\n                    ").concat(movie.cast.map(escapeHTML).join(", "), "\n                </p>\n\n                <div class=\"detail-actions\">\n                    <button class=\"btn btn-primary\"\n                            data-watch=\"").concat(movie.id, "\">\n                        \u25B6 Xem phim\n                    </button>\n\n                    <button class=\"btn btn-secondary\"\n                            data-favorite=\"").concat(movie.id, "\">\n                        ").concat(isFavorite(movie.id) ? "♥ Đã yêu thích" : "♡ Yêu thích", "\n                    </button>\n                </div>\n            </div>\n        </div>\n    ");
  $("#detailModal").classList.add("show");
}

function returnHome() {
  $("#detailModal").classList.remove("show");
  currentMovie = null;
}
/* ==================================================
   DIM - PHẦN 8: TRÌNH PHÁT VIDEO
================================================== */


function openVideo(id) {
  var movie = getAllowedMovies().find(function (item) {
    return item.id === id;
  });

  if (!movie) {
    showToast("Không thể mở phim này.");
    return;
  }

  currentMovie = movie;
  $("#videoTitle").textContent = movie.title;
  var player = $("#videoPlayer");
  player.pause();
  player.src = movie.video;
  player.load();
  $("#videoModal").classList.add("show"); // Chỉ yêu cầu phát video sau khi người dùng nhấn nút.

  var playRequest = player.play();

  if (playRequest && typeof playRequest["catch"] === "function") {
    playRequest["catch"](function () {
      showToast("Hãy nhấn nút phát trên trình video.");
    });
  }
}

function closeVideo() {
  var player = $("#videoPlayer");
  player.pause();
  player.removeAttribute("src");
  player.load();
  $("#videoModal").classList.remove("show");
}
/* ==================================================
   DIM - PHẦN 9: ĐĂNG NHẬP VÀ ĐĂNG KÝ DEMO
================================================== */


function openAuth(mode) {
  currentAuthMode = mode;
  $("#authTitle").textContent = mode === "login" ? "Đăng nhập" : "Đăng ký";
  $("#authSubmit").textContent = mode === "login" ? "Đăng nhập" : "Tạo tài khoản";
  $("#authSwitchText").innerHTML = mode === "login" ? 'Chưa có tài khoản? <button id="switchAuth" class="text-btn">Đăng ký</button>' : 'Đã có tài khoản? <button id="switchAuth" class="text-btn">Đăng nhập</button>';
  $("#authMessage").textContent = "";
  $("#authForm").reset();
  $("#authModal").classList.add("show");
}

function getAccounts() {
  return readStorage("movieflixAccounts", []);
}

function handleAuthSubmit(event) {
  event.preventDefault();
  var username = $("#authUsername").value.trim();
  var password = $("#authPassword").value;
  var accounts = getAccounts();

  if (username.length < 3 || password.length < 6) {
    $("#authMessage").textContent = "Tên tài khoản cần ít nhất 3 ký tự, mật khẩu ít nhất 6 ký tự.";
    return;
  }

  if (currentAuthMode === "register") {
    var exists = accounts.some(function (account) {
      return account.username.toLowerCase() === username.toLowerCase();
    });

    if (exists) {
      $("#authMessage").textContent = "Tên tài khoản đã tồn tại.";
      return;
    } // DEMO HỌC TẬP: không lưu mật khẩu thật.
    // Website thật cần backend và cơ chế băm mật khẩu an toàn.


    accounts.push({
      username: username,
      password: password
    });
    saveStorage("movieflixAccounts", accounts);
    $("#authMessage").textContent = "Đăng ký thành công! Bạn có thể đăng nhập.";
    showToast("Tạo tài khoản demo thành công.");
    return;
  }

  var account = accounts.find(function (item) {
    return item.username.toLowerCase() === username.toLowerCase() && item.password === password;
  });

  if (!account) {
    $("#authMessage").textContent = "Tên tài khoản hoặc mật khẩu không đúng.";
    return;
  }

  try {
    sessionStorage.setItem("movieflixCurrentUser", username);
  } catch (error) {// Phiên đăng nhập demo không được lưu.
  }

  $("#loginBtn").textContent = username;
  $("#authModal").classList.remove("show");
  showToast("Xin ch\xE0o ".concat(username, "!"));
}
/* ==================================================
   ĐINH - PHẦN 10: SỰ KIỆN VÀ KHỞI TẠO WEBSITE
================================================== */
// Tìm kiếm theo tên phim.


$("#searchInput").addEventListener("input", renderMovies); // Lọc và sắp xếp phim.

$("#genreFilter").addEventListener("change", renderMovies);
$("#sortFilter").addEventListener("change", renderMovies); // Xác nhận độ tuổi.

$("#ageYes").addEventListener("click", function () {
  return chooseAge("adult");
});
$("#ageNo").addEventListener("click", function () {
  return chooseAge("under18");
}); // Mở đăng nhập và đăng ký.

$("#loginBtn").addEventListener("click", function () {
  return openAuth("login");
});
$("#registerBtn").addEventListener("click", function () {
  return openAuth("register");
}); // Dùng event delegation để xử lý các nút nằm trong thẻ phim.

document.addEventListener("click", function (event) {
  var detailButton = event.target.closest("[data-detail]");
  var favoriteButton = event.target.closest("[data-favorite]");
  var watchButton = event.target.closest("[data-watch]");
  var closeButton = event.target.closest("[data-close]");

  if (detailButton) {
    openMovieDetail(Number(detailButton.dataset.detail));
    return;
  }

  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favorite));
    return;
  }

  if (watchButton) {
    openVideo(Number(watchButton.dataset.watch));
    return;
  }

  if (closeButton) {
    var modalId = closeButton.dataset.close;

    if (modalId === "videoModal") {
      closeVideo();
    } else {
      $("#" + modalId).classList.remove("show");
    }
  }
}); // Chuyển đổi giữa đăng nhập và đăng ký.

$("#authModal").addEventListener("click", function (event) {
  if (event.target.id === "switchAuth") {
    openAuth(currentAuthMode === "login" ? "register" : "login");
  }
});
$("#authForm").addEventListener("submit", handleAuthSubmit); // Đóng modal khi bấm vào vùng nền bên ngoài.

document.querySelectorAll(".overlay").forEach(function (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target !== modal) return;
    if (modal.id === "ageModal") return;

    if (modal.id === "videoModal") {
      closeVideo();
    } else {
      modal.classList.remove("show");
    }
  });
}); // Nút logo quay về đầu trang.

$("#logoLink").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}); // Khởi động website.

initializeAgeGate();