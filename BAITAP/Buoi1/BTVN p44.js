// Viết lại code:
// Bạn được cung cấp một đoạn code JavaScript viết theo kiểu cũ (dùng var và nối chuỗi bằng +). Hãy viết lại đoạn code này bằng cách sử dụng const/let và Template Literals.
// Code cũ:
// var productName = "Laptop Dell";
// var price = 15000000;
// var quantity = 2;
// // Tính tổng tiền
// var total = price * quantity;
// var message = "Bạn đã đặt mua " + quantity + " chiếc " + productName + ". \n" + 
//               "Tổng số tiền bạn phải thanh toán là: " + total + " VNĐ.";
// console.log(message);
// var total = price * quantity;
const productName = "Laptop Dell";
let price = 15000000;
let quantity = 2;
let total = price * quantity;
let message = `Bạn đã đặt mua ${quantity} chiếc ${productName}. 
Tổng số tiền bạn phải thanh toán là: ${total} VNĐ.`
console.log(message);



