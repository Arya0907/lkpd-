// let beli = 5000
// let jeruk = 500
// let diskon = 0.05

// let Hargadikon= beli-jeruk*diskon;
// if(beli>=5000){
//     console.log(`mendapat diskon senilai ${diskon}membayar dengan harga ${Hargadikon}`)
// } else{
//     console.log(`membayar dengan harga ${jeruk}`)
// }



// let Bilangan= prompt("masukan bilangan]")
// let jutaan = Math.floor((Bilangan/1000000)%1000000)
// let ribuan = Math.floor((Bilangan / 1000)%1000)
// let bilratus = Math.floor((Bilangan / 100)%10)
// let puluhan = Math.floor(( Bilangan % 100)/10)
// let bilangansatuan = Bilangan % 10


// console.log(`${jutaan} bilangan jutaan ${ribuan} bilangan ribuan  ${bilratus} bilangan ratusan  ${puluhan} bilangan puluhan  ${bilangansatuan} bilangan satuan`)










// let fahrenheit = prompt("masukan temperatur")
// let celcius = (fahrenheit-32)*5/9;
// let cuaca = celcius

// if(cuaca >=300){
//     jadi = "panas"
// } else if(cuaca<=300 && cuaca>=250){
//     jadi = "normal"
// }else{
//     jadi = "dingin"
// }

// console.log(`cuaca ${jadi}`)

 
// let pabp= 70;
// let mtk = 82;
// let dpk = 77;

// let rata = (pabp+mtk+dpk)/3

// if(rata>=80 && nilai<=100){
//     maka = "A"
// }else if (rata<=80 && rata>=75){
//     maka = "B"
// }else if (rata<=75 && rata>=65){
//     maka = "C"
// }else if (rata<=65 && rata>=45){
//     maka = "D"
// }else if (rata<=65 && rata>=45){
//     maka = "E"
// }else{
//     maka  = "k"
// }

// console.log(`nilai yang di dapat adalah grade ${maka}`)



// let kode=prompt("masukan 11")

// let golongan = Math.floor(kode/10000000000)
// let tanggal = Math.floor((kode/100000000)%100)
// let bulan = Math.floor((kode/1000000)%100)
// let tahun =Math.floor((kode/100)%10000)
// let nn = kode%100

// // console.log(golongan)
// // console.log(tanggal)
// // console.log(bulan)
// // console.log(tahun)
// // console.log(nn)

// if(golongan >= 1 && golongan <=4){
//     let bln;
//     switch(bulan){
//         case 1:bln='jan';break;
//         case 2:bln='feb';break;
//         case 3:bln='mar';break;
//         case 4:bln='april';break;
//         case 5:bln='mei';break;
//         case 6:bln='jun';break;
//         case 7:bln='jul';break;
//         case 8:bln='agustus';break;
//         case 9:bln='september';break;
//         case 10:bln='oktober';break;
//         case 11:bln='november';break;
//         case 12:bln='desember';break;
//         default : bln = 'invalid'
//     }  

//     console.log(` seorang pegawai bergolongan${golongan},lahir pada tanggal ${tanggal} bulan ${bln} pada tahun ${tahun} dan kode identitasnya adalah ${nn}`)
// }else{
//     console.log ("golongan tidak boleh melebihi 1-4")
//  

// alert("kalkulasi ini jika sudah di tambah 1 detik")
// let hh =parseFloat(prompt("masukan jam"))
// let mm = parseFloat(prompt("masukan menit"))
// let ss=  parseFloat(prompt("masukan detik"))

// let konversi = (hh*3600) + (mm*60) + (ss+1);

// let totalDetik = konversi 
// let jam = Math.floor(totalDetik / 3600);
// let sisaDetik = Math.floor(totalDetik % 3600)
// let menit = Math.floor(sisaDetik /60);
// let detik = sisaDetik % 60 ;

// console.log(`${jam} JAM ${menit} menit ${detik} detik`)

// menambahkan 1 detik
// let jam = parseFloat(prompt("Masukkan angka jam"));
// let menit = parseFloat(prompt("Masukkan menit"));
// let detik = parseFloat(prompt("Masukkan detik")) + 1;

// if ( menit > 59 ) {
//     jam + 1;
//     menit = 0;
// } else if ( detik > 59 ) {
//     menit + 1;
//     detik = 0;
// } else if ( jam > 24 ) {
//     jam = 0;
//     menit = 0;
//     detik = 0;

// }

// console.log(`setelah diubah menjadi detik menjadi ${jam}:${menit}:${detik}  `)

//cara lebuh simpel

let hhh =23;
let mmm = 59;
let sss= 59;
let hasil = sss + 1;

if(hasil>59){
    sss = 0;
    mmm = mmm + 1;

if(mmm>59){
    mmm=0
    hhh= hhh + 1;
}

if(hhh>23){
    hhh=0
    mmm=0
    sss=0
}
console.log(`${hhh}: ${mmm}:${sss}`)
}else{
    console.log(`${hhh}:${mmm}:${hasil}`)
}

 function show() {
            /* Access image by id and change 
            the display property to block*/
            document.getElementById('image1')
            .style.display = "block";
            document.getElementById('image2')
            .style.display = "block";
            document.getElementById('btniD')
            .style.display = "block";

                
        }

function unshow(){
            document.getElementById('image1')
            .style.display = "none";
            document.getElementById('image2')
            .style.display = "none";
            document.getElementById('btniD')
            .style.display = " none";
    
}







