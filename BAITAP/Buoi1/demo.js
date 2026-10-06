let name = "Nam";
let age = "24"
console.log("Xin chao " + name,age);
console.log("Tuoi cua ban la " + age);
/*
*/
//
console.log(`Xin chao backtick ten toi la ${name}`)

const ten = "Playwright"; 
const v = 1.44;
  // ❌ console.log("Công cụ: " + ten + " v" + v);
console.log(`Công cụ: ${ten} v${v}`);

// Bài 2 — Template literal với biểu thức:
  const a = 8, b = 3;
  // ❌ console.log(a + " nhân " + b + " = " + a*b);
console.log(`${a} nhân ${b} = ${a*b}`);

// Bài 3 — Playwright style (tự viết hoàn chỉnh):
  const user = "hocvien@test.com"; const score = 92;
  // In ra: "Chào hocvien@test.com! Kết quả: 92/100 — Xuất sắc"
console.log(`Chào ${user}! Két quả: ${score}/100 - Xuất sắc`);