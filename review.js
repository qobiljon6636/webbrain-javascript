

// function get(str) {
//     let res = ''
//     for (i of str) {
//         res+= i + i
//         }
//     console.log(res);
// }
// get("webbrain")

// ============================================

// function GetCount(str) {
//     let res = ''
//     let count = 1
//     for(i = 0; i < str.length; i++) {
//         if (str[i] === str[i+1]) {
//             count--
//         } else {
//             res += str[i]
//             if (count > 1) {
//                 res += count
//                 count = 1
//             }
//         }
//     }
//     console.log(res);
// }
// GetCount('wwwweebbbraaaaiiinnnnnn')

//==============================================

// function getName(str){
//     let res=""
//     for(let i=str.length-1;i>=0; i--){
//         res=res+str[i];
//     }
//     return res===str
// }
// console.log(getName("kiyik"));

//==========================================


// function getNeme(str){
//     let res="";
//     for(i=0;i<str.length;i++){
//         if(res[i]===str.toUpperCase()){
//             res==str[i]++
//         }else{
//             res+=str[i]
//         }
//     }
//     console.log(res);
// }
// getNeme("Webbrain Academy")
//===================================

// function GetCount(str){
//    let res=0
//     if(str===''){
//         return 0
//     };
//     for(i=0;i<=str.length;i++){
//         if(str[i]='' && isNaN(Namber(str[1]))){
//             res++
//         }
//     }
//     return res
// }

// console.log(GetCount("we6666rain"));
//===========================================

// function test(A, S) {
//   let count = 0;
//   let n = 0;
//   while (n < A.length) {
//     for(let i=n;i<=A.length;i++){
//         let fragment=A.slice(n,i)
//         if(fragment.length){
//             eval((${fragment.join("+")}) / ${fragment.length}) === S?count++:null;
//         }
//     }
//     n++;
//   }
//   return count;
// }
// console.log(test([0, 4, 3, -1], 2));
















