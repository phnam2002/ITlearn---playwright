/*const url = "https://baitap.itlearn.edu.vn/exercise.php?id=1#description";
// Sử dụng slice() để cắt chuỗi itlearn.
// Mở Visual Studio Code thực thi đoạn code và đưa ra đáp án?
// const startWith = url.indexOf('itlearn');
// const urlSliced = url.slice(startWith,startWith + 7);
console.log(url.slice(15,22));

// url_space = " https://baitap.itlearn.edu.vn/exercise.php?id=1#description " có các space đang tồn tại, sử dụng hàm tương tác với string để cắt bớt space.
const url_space = " https://baitap.itlearn.edu.vn/exercise.php?id=1#description "
const urlTrimmed = url_space.trim();
console.log(urlTrimmed);

// In ra thứ tự của các chuỗi “edu" và “exercise"
console.log(urlTrimmed.indexOf('edu'));
console.log(urlTrimmed.indexOf('exercise'));*/

// // Bài 1: Trích xuất tên người dùng từ Email (Cắt chuỗi)
// // Bối cảnh: Bạn có một địa chỉ email. Bạn cần lấy phần tên (đứng trước dấu @) để hiển thị lời chào.
// // Cho biến sau:
// const email = "nguyen.van.a@itlearn.edu.vn";
// // Yêu cầu:
// // Tìm vị trí (index) của ký tự "@" trong chuỗi (kết quả là 1 Number).
// const indexNeeded = email.indexOf('@');
// const user = email.slice(0,indexNeeded);
// // Dùng hàm slice() kết hợp với vị trí vừa tìm được để cắt lấy phần chữ "nguyen.van.a".
// // Đầu ra mong muốn (Output): Vị trí của @: 12
// //         Tên người dùng: "nguyen.van.a"
// console.log(`Vị trí của @: ${indexNeeded}`);
// console.log(`Tên người dùng: "${user}"`);

// // Bài 2: Cập nhật Domain (Thay thế chuỗi)
// // Bối cảnh: Công ty bạn đổi tên miền từ .com sang .edu.vn. Bạn cần cập nhật lại đường link.
// // Cho biến sau:
// const oldUrl = "https://hocvien.com/khoa-hoc-javascript";
// // Yêu cầu:
// // Dùng hàm replace() để thay thế "hocvien.com" thành "itlearn.edu.vn".
// // Lưu vào một biến mới và in ra màn hình.
// const newUrl = oldUrl.replace('hocvien.com','itlearn.edu.vn');
// // Đầu ra mong muốn (Output):
// // Link mới: "https://itlearn.edu.vn/khoa-hoc-javascript"
// console.log(`Link mới: "${newUrl}"`);


// // Bạn có một mảng chứa tên những người đang xếp hàng mua vé xem phim:
// let hangXepHang = ["An", "Bình", "Châu"];
// // Yêu cầu (Viết code cho từng bước và console.log() ra kết quả sau mỗi bước):
// // Bạn "Duy" mới đến, xin xếp vào cuối hàng.
// hangXepHang.push("Duy");
// console.log(hangXepHang);
// // Một khách "VIP" xuất hiện, được ưu tiên xếp ngay vào đầu hàng.
// hangXepHang.unshift("VIP");
// console.log(hangXepHang);
// // Quầy vé mở cửa, người đứng đầu tiên mua xong vé và đi vào rạp (rời khỏi hàng).
// hangXepHang.shift();
// console.log(hangXepHang);
// // Bạn đứng cuối cùng bận việc đột xuất nên bỏ cuộc và đi về (rời khỏi hàng).
// hangXepHang.pop();
// console.log(hangXepHang);
// // Hỏi: Danh sách người trong hàng lúc này còn lại những ai?

// Bài tập 1: Tính toán hóa đơn giỏ hàng (Cơ bản: +, -, *, /)
// Giả sử tool auto của bạn đang test một trang mua sắm. Bạn lấy được các thông tin sau:
let giaAo = 150000;      // 150k/cái
let soLuong = 3;         // Mua 3 cái
let phiShip = 30000;     // Phí ship 30k
let maGiamGia = 50000;   // Voucher giảm 50k
// Yêu cầu:
// Tính tongTienAo (Bằng giá áo nhân với số lượng).
const tongTienAo = giaAo*soLuong - maGiamGia;
// Tính tongThanhToan (Bằng tổng tiền áo + phí ship - mã giảm giá).
const tongThanhToan = tongTienAo + phiShip - maGiamGia;
// In ra console câu: "Tổng số tiền khách phải trả là: ..." (Điền kết quả vào dấu ...).
console.log(`Tổng số tiền khách phải trả là: ${tongThanhToan}`);

// Khách rủ thêm 2 người bạn mua cùng (Tổng cộng 3 người chia nhau hóa đơn này). Hãy tính tienMoiNguoi phải trả (Chia đều tổng thanh toán).
console.log(`Tổng số tiền mỗi khách phải trả là: ${tongThanhToan / 3}`);
