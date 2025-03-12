
function tinhTrungBinh(diem1, diem2, diem3) {
  return (diem1 + diem2 + diem3) / 3;
}

let diemDolphins = tinhTrungBinh(96, 108, 89);
let diemKoalas = tinhTrungBinh(88, 91, 110);
console.log("Điểm của đội Dolphins: ", diemDolphins.toFixed(2));
console.log("Điểm của đội Koalas: ", diemKoalas.toFixed(2));

if (diemDolphins > diemKoalas && diemDolphins >= 100) {
  console.log("Đội Dolphins giành chiến thắng!");
} else if (diemDolphins < diemKoalas && diemKoalas >= 100) {
  console.log("Đội Koalas giành chiến thắng!");
} else if (
  diemDolphins >= 100 &&
  diemKoalas >= 100 &&
  diemDolphins === diemKoalas
) {
  console.log("Dolphins và Koalas hòa nhau!");
} else {
  console.log("Cả 2 đội không đủ điều kiện");
}
