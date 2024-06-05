// Methode

// 1. join
// methode digunakan untuk sebagai alat untuk menggabungkan hasil dari ouput dengan tanda '-'
// var arr = ['Maman', 'Cecep', 'Syarif'];
// console.log(arr.join(' - '))

// 2. slice
// methode yang digunakan untuk memotong isi dalam array
// slice(indexAwal, indexAkhir (index akhir tidak ikut terpotong))
// var arr = ['sapi', 'ayam', 'ikan', 'kerbau'];
// var arr2 = arr.slice(1, 3)
// console.log(arr2.join(' - '))

// 3. forEach
// forEach adalah sebuah metode untuk menampilkan isi didalam sebuah array tanpa menggunakan perulangan
// let angka = [1,2,3,4,5,6];

// angka.forEach(function(e){
//     console.log(e);
// });

// let nama = ['Handi','Ryan','Edi'];
// nama.forEach(function(e, i){
//     console.log('mahasiswa ke - '+(i+1)+' adalah '+e)
// });

// 4. map
// forEach adalah sebuah metode untuk menampilkan isi didalam sebuah array tanpa menggunakan perulangan dengan mengembalikan nilai array
// var angka = [1,2,3,4,5,6,7,8];

// var angka2 = angka.map(function(e){
//     return e*2;
// });
// console.log(angka2.join('-'));

// 5. sort
// metode yang digunakan untuk mengurutkan sebuah value
// var angka = [1,2,6,9,5,20,3,7,8]

// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join('-'));

// 6. filter
// methode yang digunakan untuk mendapatkan value dengan kriteria tertentu
// const angka = [1,4,5,6,78,23,14,15]
// var angka2 = angka.filter(function(x){
//     return x > 5;
// });
// console.log(angka2.join('-'))

// 7. find
// menemukan suatu value dengan kriteria tertentu
// var angka = [1,4,5,6,78,23,14,15]
// var angka2 = angka.find(function(x){
//     return x < 6;
// });
// console.log(angka2)

// 8. push
// methode untuk menambahkan suatu nilai ke dalam array
// var arr = ['sapi', 'ayam', 'ikan']

// arr.push('kerbau', 'banteng');
// console.log(arr.join(' - '))

// 9. split
// methode yang digunakan untuk memisahkan suatu value
// var nama = 'syarif khalid attamimi'
// var nama1 = nama.split(' ')

// console.log(nama1[0])

// 10. Reverse
// methode yang digunakan untuk membalik suatu value dimulai dari karakter terakhir
// var nama = ['syarif', 'khalid', 'attamimi']
// nama.reverse()
// console.log(nama)