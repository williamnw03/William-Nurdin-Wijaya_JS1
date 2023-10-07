// IF ELSE (Perhitungan Kurang/Tambah/Kali/Bagi)
const PerhitunganSimpel = (angka1, angka2, tipe) => {
  if (tipe === "tambah") {
    return angka1 + angka2;
  } else if (tipe === "kurang") {
    return angka1 - angka2;
  } else if (tipe === "kali") {
    return angka1 * angka2;
  } else if (tipe === "bagi") {
    return angka1 / angka2;
  } else {
    console.log("Tipe yang anda masukkan, tidak tersedia");
    return false;
  }
};

console.log(PerhitunganSimpel(5, 2, "bagi")); // 2.5
console.log(PerhitunganSimpel(5, 2, "asd")); // False

// --------------------------------------------------------------------------------

// Switch Case (Cari siapa yang lulus/remedial)
const lulusAtauEnggak = (nilai) => {
  let message;
  switch (nilai) {
    case "A":
      message = "ANDA LULUS, nilai Anda sempurna!";
      break;
    case "B":
      message = "ANDA LULUS, nilai Anda cukup memuaskan!";
      break;
    case "C":
      message = "ANDA LULUS, nilai anda cukup!";
      break;
    default:
      message = "ANDA TIDAK LULUS, belajar lagi!";
      break;
  }
  console.log(message);
};

lulusAtauEnggak("B"); // ANDA LULUS, nilai Anda cukup memuaskan!

// --------------------------------------------------------------------------------

// For Statement (Generate sebuah array berisikan angka)
const GenerateAngka = (awal, akhir) => {
  const arr = [];
  for (let i = awal; i <= akhir; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(GenerateAngka(5, 45)); // [5, 6, 7 , 8, ..., 45]

// --------------------------------------------------------------------------------

// While (Memastikan semua value dalam sebuah array adalah angka)
const arrayIsAllNumber = (arr) => {
  let count = 0;
  while (typeof arr[count] === "number") {
    count++;
  }

  if (count === arr.length) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayIsAllNumber([1, 2, 3, "asda", 4, 5])); // False

// --------------------------------------------------------------------------------

// Function (Menghitung luas lingkaran)
const luasLingkaran = (r) => {
  if (r % 7 === 0) {
    return (22 / 7) * r * r;
  } else {
    return 3.14 * r * r;
  }
};

console.log(luasLingkaran(7));
console.log(luasLingkaran(15));
