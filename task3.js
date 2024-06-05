// fungsi mencari nilai
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    // Validasi parameter
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return;
    }

    if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        return;
    }

    // Filter dataArray berdasarkan nilaiAwal dan nilaiAkhir
    let filteredData = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir) {
            filteredData = [...filteredData, dataArray[i]]
        }
    }

    // Urutkan hasil filter
    for (let i = 0; i < filteredData.length - 1; i++) {
        for (let j = 0; j < filteredData.length - 1 - i; j++) {
            if (filteredData[j] > filteredData[j + 1]) {
                let temp = filteredData[j];
                filteredData[j] = filteredData[j + 1];
                filteredData[j + 1] = temp;
            }
        }
    }

    // Menampilkan hasil ke console
    if (filteredData.length > 0) {
        console.log("Output:", filteredData);
    } else {
        console.log("Nilai tidak ditemukan");
    }
}

const dataArray = []

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(4, 17, [2, 25, 4])
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])