
// let name="webbrain";
// let title="Lazizjon ";

// let obj={
//     [name]:"eshmat",
//     ["name"]:"nmadur",
//     name:"webbrain",
//     "name":"toshmat",

// }
// console.log(obj[name]);
// console.log(obj.name);
// console.log(obj["name"]);


//=================================

// let obj={
//     name:"webbrain",
//     title:"it centr",
//     "cons log":"hi webbrain"
// }

// obj.age=8526

// console.log(obj.name);
// console.log(obj.title);
// console.log(obj["cons log"]);
// console.log(obj.age);
// console.log(obj);

//==================================

// let obj={
//     name:"eshmat",
//     titel:"toshmat"
// }
// let user=obj;
// obj.name="webbrain"
// console.log(user);

//===========================

// let obj={
//     name:"webbrain",
//     title:" centr",
//     "it centr":"hi webbrain"
// }
// let user=structuredClone(obj);
// obj.name="eshmat"
// console.log(user);
// console.log(obj);
//==================================



// let user={
//     name:"web",
//     sayHi(){console.log(this);
//     console.log(`HI, $ {this.name}`);}
// }
// user.sayHi()


// function getName(){
// //    this. name="web",
//     console.log(new.target);
// }

// console.log(new getName("esh"));


// let obj={
//     name:"eshmat",
//     title:"toshmat"
// }
// const {name,title}=obj;
// console.log(title);
// console.log(name);

// let obj={
//     name:"eshmat",
//     title:"toshmat",
//     child:{childname:"test"}
// }
// const {name,title,child:{childname}}=obj;
// console.log(title);
// console.log(name);
// console.log(childname);


// let obj ={
//     name:"web",
//     child:{
//         childname:"eshmat"
//     }
// }
// obj={...obj.child}
// console.log(obj);


// let user={
//     name:"web",
//     sayHi(){console.log(this.sayHi);
//     console.log(`Hi, $ {this.name}`);}
// }
// user.sayHi()

// function getName(){
//     this.name="eshmat",
//     console.log(this);
// }
// console.log(new getName().name);

// let obj = {
//     firstName: 'Qobiljon ',
//     lastName: 'Sobirov',
//     fullName() {
//         return obj.firstName +  obj.lastName;
//     }
// }  


// function Person(firstName, lastName) {
//     this.firstName = firstName,
//     this.lastName = lastName
// }

// let user1 = new Person('Qobiljon', 'Sobirov');
// let user2 = new Person('Zuhriddin', 'Mahfiy');
// console.log(user1.firstName);
// console.log(user2);

// let object = {
//     firstName: 'Qobiljon',
//     lastName: 'Sobirov'
// };

// const {firstName, lastName} = object;

// const name = object.firstName;

// console.log(name);

//=====================================================




// function getName(){
//     return new.target;
// }

// function getSurname(){
//     return getName;
// }

// let a=new getName;
// let b=new getSurname;
// console.log(a==b);

//=================================


// let name={
//     step:0,
//     up(){
//         this.step++;
//     },
//     down(){
//         this.step--;
//     },
//     showStep: function(){
//         alert(this.step)
//     }
// }
// name.up()

// console.log(name);

























