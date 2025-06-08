// B-TASK 

function sonlarniChiqar(matn) {
  let sonlar = 0;
  for ( let i = 0; i < matn.length; i++) {
    if ( matn[i] == '0' || matn[i] == '1' || matn[i] == '2'|| matn[i] == '3'||   matn[i] == '4' || matn[i] == '5' || matn[i] == '6' || matn[i] == '7' || 
       matn[i] == '8' || matn[i] == '9' ) {
       sonlar++;
    }
  }
  console.log(sonlar);
}

sonlarniChiqar('some1every12sofj8fjefr44fnn45bf64njk65');

// A-TASK
// bu function orqali biz istalgan so'z yozib, uning ichidagi istalgan harf necha martta qatnashganligini bilib olamiz

function harfTop(harf, matn) {
    let sanoq = 0;                          // metn ichidagi xarf sonini hisoblaydi
    for(let i = 0; i < matn.length; i++) {  // bu matn indexiga alohida kirib tekshiradi
      if (matn[i] === harf) {               // agar index xarfga mos kelsa uni sanoqqa yuboradi
        sanoq++;
      }
    }
    console.log(` "${matn}" matni ichida ${harf} harfi ${sanoq} martta qatnashgan`); // bu yerda return qilib ham bersa bo'ladi
}

harfTop('e', 'engineer'); // agar function ichida faqat return berilsa bu yerda console.log bilan call qilish kerak
harfTop('d', 'dalalarda');




// console.log('Jek Ma ning maslahatlari');
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling",  // 50-60
//     "endi foydasi yoq, dam oling",  // 60~
// ];

// // ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== 'number') throw new Error("iltimos, raqam kiriting");
//   else if(a <= 20) return list[0];
//   else if(a > 20 && a <= 30) return list[1];
//   else if(a > 30 && a <= 40) return list[2];
//   else if(a > 40 && a <= 50) return list[3];
//   else if(a > 50 && a <= 60) return list[4];
//   else {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(list[5]);
//     }, 5000);
// });

//     // return list[5];
//         // setTimeout(function () {
//         //     return list[5]; 
//         // }, 5000);
//     }  
// }
// CALL BACK function
// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("iltimos, raqam kiriting", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]); 
//         }, 5000);
//     }
// }

// console.log('passed 0');
// maslahatBering(73, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// });
// console.log('passed 1');

// call via then/catch
// console.log('passed 0');
// maslahatBering(25)
// .then((data) => {
//     console.log('javob:', data);
// })
// .catch((err) => {
//     console.log('ERROR:', err);
// });
// console.log('passed 1'); 


// call via async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(67);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run(); git