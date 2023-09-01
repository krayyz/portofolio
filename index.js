
// Menginisialisasi variabel pengunjung
var name = "John";
var age = 20;
var money = 400000;

// Step 1: Memeriksa apakah name kosong
if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  // Step 2: Memeriksa usia pengunjung
  if (age < 17) {
    // Pengunjung hanya boleh memesan juice
    if (money < 50000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      money -= 50000;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
  } else {
    // Pengunjung hanya boleh memesan anggur
    if (money < 300000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      money -= 300000;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
  }
}