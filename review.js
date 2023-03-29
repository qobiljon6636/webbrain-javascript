// 3 - Masala:
// Object ichidagi Boolean tipidagi malumotlarni chiqaring keylari bilan birga?

// let obj3 = {
//     id: 1,
//     name: "webbrain",
//     offline: true,
//     online: true,
//     individual: false,
//   };
  
//   const getBoolean = (obj) => {
//     let res = ``;
//     for (key in obj) {
//       if (typeof obj[key] === "boolean") res +=  ${key} : ${obj[key]};
//     };
//     return res;
//   };
//   console.log(getBoolean(obj3));
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // 2 - Masala:
// Berilgan stringdagi @ chani a harfiga o'zgartiring ?
// replaceAll va //g dan foydalanish mumkin emas!!!

// let str2 = "webbr@in ac@demy";
// const getAt = (str) => {
//   let res = "";
//   for (value of str) {
//     if (value === "@") res += value = "a";
//     else res += value;
//   }
//   return res;
// };
// console.log(getAt(str2));

//========================================

// 1 - Masala:
// Berilgan stringda nechta katta harf va nechta kichik harf borligini aniqlang ?

// let str1 = "Webbrain Academy";
// const getStr = (str) => {
//   let large = 0;
//   let lower = 0;

//   for (v of str) {
//     if (v === v.toUpperCase() && v !== " ") large += v.length;
//     else if (v === v.toLowerCase() && v !== " ") lower += v.length;
//   }

//   let res = `Katta harflar soni: ${large} ta, kichik harflar soni: ${lower} ta`;
//   return res;
// };
// console.log(getStr(str1));

//================================================

// ----------------------- Array Boyicha Masalalar:

// 1 - Masala:
//Array ichidagi doublikat sonlarni chiqarib yuboring? new Setsiz!

// let arr1 = [2, 2, 2, 2, 4, 4, 4, 5, 6, 7];

// const getDoublicateArr = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) res.push(arr[i]);
//   }
//   return res;
// };
// console.log(getDoublicateArr(arr1));

//===============================================

// 2 - Masala:
// Arraylarni bir-biriga taqqoslang?

// let arr2 = [1, 2, 3];
// let arr3 = [1, 2, 3];

// const getComporasionArr = (arr1, arr2) => {
//   let oneArr = arr1.join("");
//   let twoArr = arr2.join("");

//   return oneArr === twoArr;
// };
//  console.log(getComporasionArr(arr2, arr3));

//===============================================

// 3 - Masala:
// Array ichidagi ikki honali sonlarni chiqaring ?

// let arr4 = [1, 65, 4, 67, 567];

// const getTwoRoom = (arr) => {
//   let res = [];
//   let strArr = arr.join(" ").split(" ");

//   for (value of strArr) {
//     if (value.length === 2) res.push(+value);
//   }
//   return res;
// };
// console.log(getTwoRoom(arr4))

//======================================


// -------------------------- Advenced Homeworks:
// [2,3,2,4,5,2,3]
// [2,3,2,1,2,3]
// [2,2,1,2]
// [1,2]
// [1]
// Berilgan Array shu korinishda chiqishi kerak ?

// let arr5 = [2, 3, 2, 4, 5, 2, 3];

// const arrTwoMax = (arr) => {
//   for (value of arr) {
//     let sortArr = arr.sort((a, b) => a - b);
//     let max = sortArr.pop() - sortArr.pop();

//     sortArr.push(max);

//     let total = sortArr.filter((value) => value);
//     console.log(total);
//   }
// };
// arrTwoMax(arr5)

//=================================================
















