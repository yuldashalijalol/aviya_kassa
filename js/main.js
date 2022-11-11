alert(" Salom aviya kasamizga hush kelibsiz");
let firstName = prompt("Isim Familyangizni kiriting : ")
let passport = prompt("Pasport raqamini kiriting")
let phone = prompt("Bog'lanish uchun telefon raqamingizni kiriting")
let yourMoney = Number(prompt("Hisobingizdagi mablag'ni kiriting ( so'mda ) : "))
let dollar = 11205.00;
let euro = 11608.66;
let cost = 1200 * dollar + 650 * dollar + 320 * euro + 600 * euro;

if ((yourMoney - cost) >= 0) {

  document.write("Dubayga borish va kelish bilet - $1200;" + `<br>` +
      "Mehmonxona to’lovi (to’liq safar davomiyligi hamda xizmatlar uchun)  - $650;" + `<br>` +
      "Muzey va ko’ngilochar joylar uchun - 320 yevro;" + `<br>` + "Sayohat davomidagi rasxotlar uchun - 600 yevro;" + `<br>` +
      "Hozirda kurs : " + `<br>` +
      "$1 = 11205.00 so’m" + `<br>` +
      "1 yevro = 11608.66 so’m" + `<br><br>`)

  document.write(`Sizning mablag'ingiz : ${yourMoney} so'm va ${yourMoney - cost} so'm ortib qoladi\n` + `<br><br>`);

  document.write(`Oq yo'l tilaymiz ${firstName} `);
} 

else {

  document.write("Dubayga borish va kelish bileti - $1200;" + `<br>` +
      "Mehmonxona to’lovi (to’liq safar davomiyligi hamda xizmatlar uchun) - $650;" + `<br>` +
      "Muzey va ko’ngilochar joylar uchun - 320 yevro;" + `<br>` + "Sayohat davomidagi rasxotlar uchun - 600 yevro;" + `<br>` +
      "Hozirda kurs : " + `<br>` +
      "$1 = 11205.00 so’m" + `<br>` +
      "1 yevro = 11608.66 so’m" + `<br><br>`)

  document.write(`Sizning mablag'ingiz : ${yourMoney} so'm va ${Math.abs(yourMoney - cost)} so'm yetmaydi\n` + `<br><br>`);

  document.write(`${firstName}, ozgina sabr qilish kerak`);

}