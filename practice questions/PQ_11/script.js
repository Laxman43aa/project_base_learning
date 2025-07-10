// simple obj
// const student = {
//     fullName : "laxman rawat",
//     marks : "95.5",
//     printMarks : function () {
//         console.log("marks = ",this.marks);
//     },
// };

// prototype
// const employee = {
//     calcTax(){
//         console.log(" tex rate is 10%");
//     }
// };

// const karanarjun = {
//     salary : "50000",
//     calcTax() {
//         console.log(" tex rate is 20%");
//     }
// };
// const karanarjun2 = {
//     salary : "40000",
// };
// const karanarjun3 = {
//     salary : "30000",
// };
// const karanarjun4 = {
//     salary : "60000",
// };
// const karanarjun5 = {
//     salary : "40000",
// };

// karanarjun.__proto__ = employee;
// karanarjun2.__proto__ = employee;
// karanarjun3.__proto__ = employee;
// karanarjun4.__proto__ = employee;
// karanarjun5.__proto__ = employee;

// classes and object creation using classes

// class Toyotacar {
//     constructor(brand , mileage){
//         console.log("created new obj.");
//         this.brand = brand ; 
//         this.mileage = mileage ;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// };

// let fortuner = new Toyotacar("fortuner", 10);
// console.log(fortuner);
// let lexus = new Toyotacar("lexus", 12);
// console.log(lexus);

// inheritance
// class parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent {};

// let obj = new child();


// class person {
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
    // sleep(){
    //     console.log("sleep")
    // }
    // work(){
    //     console.log("do nothing");
    // }
// }

// class doctor extends person{
//     work(){
//       console.log("treat patients");
//     }
    
// }
// class devloper extends person{
//     constructor(name){
//         super(name);
//     }
//     work(){
//         super.eat();
//         console.log("solve somthing,and develope new thing");
//     }
// }

// let devobj = new devloper("laxman");

// que 1 
// let DATA = "secrate information"
// class User {
//    constructor(name , email){
//     this.name = name ;
//     this.email = email ;
//    }
//     viweData(){
//         console.log(" data = ", DATA);
//     }
// }
// // que2
// class Admin extends User{
//     constructor(name,email){
//         super(name , email);
//     }
//     editData(){
//         DATA = "some new value";
//         console.log("data was updated");
//     }
// }

// let student1 = new User( "laxman rawat", "@laxmnarawat11");
// let student2 = new User( "lucky ", "@lucky5");
// let teacher1 = new User("dean" , "@dean4");

// let admin1 =  new Admin("admin","admin@colege.com");

// error handling

// let a = 5 ;
// let b = 10 ; 
// console.log(a);
// console.log(b);
// console.log("a + b =", a+b);
// try{
//     console.log("a + b =", a+c);
// }catch(err){
//     console.log(err);
// }
// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a - b =", a-b);
// console.log("a - b =", a-b);
