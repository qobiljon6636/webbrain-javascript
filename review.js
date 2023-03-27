
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

//======================================
//======================================
//======================================


// function getName(str){
//     let res=""
//     for(let i=str.length-1;i>=0; i--){
//         res=res+str[i];
//     }
//     return res===str
// }
// console.log(getName("kiyik"));
//======================================


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
//=====================================

// function GetCount(str) {
//     let res = ''
//     let count = 1
//     for(i = 0; i < str.length; i++) {
//         if (str[i] === str[i+1]) {
//             count++
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
// GetCount('webbrain')
//================================
    //   function getData(str){
    //     let res={};
    //     for(i of str){
    //         if(i in res){
    //             res[i]++;
    //         }else{
    //              res[i]=1;
    //         }
    //     }
    //     console.log(res);
    // }
    
    // getData("webbrain academy")
//=====================================


// let obj={name:"Qobiljon",title:"nmadur"};
// for(let i in obj){
// console.log(obj[i]);
// }
//===========================================
// let obj={
//   title:"webbrain",
//   age:2,
//   child:{
//     age:4,
//     name:"webbrain",
//     child:{
//       age:3
//     }
//   }
// }
// let sum=0;
// while(obj){
//     sum+=obj.age;
//     obj=obj.child;
// }
// console.log(sum);
//=============================
// let array=[1,12,321,34,56,6765,123]
// let res= array.filter((value,index)=>{
//      return value<=99
// })
// console.log(res);


















