// // oppsite right angle:-

// const rs=require("readline-sync");
// var num=rs.questionInt("Enter your number:");
// while (num>0){
//     var j=1;
//     var p=""
//     while(j<=num){               
//         p=p+j
//         j=j+1
//     }
//     console.log(p)
//     num=num-1
// }


// //opposite right angle with space:-

// const rs=require("readline-sync");
// var num=rs.questionInt("Enter your number:");
// var num1=num
// while (num>0){
//     var k=1,s=""
//     while(k<=(num1-num)){
//         s=s+" "
//         k=k+1
//     }
//     var j=1;
//     var p=""
//     while(j<=num){               
//         p=p+j
//         j=j+1
//     }
//     console.log(s+p)
//     num=num-1
// }


// const rs=require("readline-sync");
// let num=rs.questionInt("Enter your number:")
// var i=1;
// while (i<=num){
//     j=1
//     a=65
//     p=""
//     while(j<=i){
//         p=p+(char(a))
//         a=a+1
//         j=j+1
//     }
//     console.log(p)
//     i=i+1
// }


// let n = 5; 
// let string = "";
//                                   // Hollo Sqaure:-
// for(let i = 0; i < n; i++) {      // *****
//   for(let j = 0; j < n; j++) {    // *   *
//     if(i === 0 || i === n - 1) {  // *   *
//       string += "*";              // *   *
//     }                             // *   *
//     else {                        // *****
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


// // in while loop:-

// const rs=require("readline-sync");
// var num=rs.questionInt("Enter your number of raw:");
// var i=1;
// var string=""
// while(i<=num){
//     var j=1;
//     while(j<=num){
//         if(i==1 || i==num){           
//             string+="*"
//         }else{
//             if(j==1 || j==num){
//                 string+="*"
//             }else{
//                 string+=" "
//             }
//         }
//         j+=1
//     }
//     string+="\n"

//     i++
// }
// console.log(string)


// // in for  loop:-

// var n=6;
// var string=""
// for (let i=0;i<n;i++){
//     var n1=6;
//     for (let j=0;j<n1;j++){            // Hollo Right Triangle:-
//         if(i==n-1 || j==0 || i==j){   //*
//             string+="*"               //* *
//         }else{                        //*  *
//             string+=" "               //*   *
//         }                             //*    *
//     }                                 //*     *
//     string+="\n"                      //*      *
// }                                     //* * * * *
// console.log(string)


// // in for loop:-

// let n = 5; // you can take input from prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {                 
//   // printing characters                          //A
//   for (let j = 0; j < i; j++) {                   //AB
//     string += String.fromCharCode(j + 65);        //ABC
//   }                                               //ABCD
//   string += "\n";                                 //ABCDE
// }
// console.log(string);

// // inwhile loop:-

// const rs=require("readline-sync");
// var n=rs.questionInt("Enter your number of raw:")
// var i=0;
// var string=""                                            //A
// while(i<n){                                              //BB
//     var j=0;                                             //CCC
//     while(j<=i){                                          //DDDD
//         string+=String.fromCharCode(i+65)                //EEEEE
//         j++
//     }
//     string+="\n"
//     i++
    
// }
// console.log(string)


// // inwhile loop:-

const rs=require("readline-sync");
var n=rs.questionInt("Enter your number of raw:")
var i=0;
var string=""                                            //AAAAA
while(i<n){                                              //BBBBB
    var j=0;                                             //CCCCC
    while(j<=n){                                         //DDDDD
        string+=String.fromCharCode(i+65)                //EEEEE
        j++
    }
    string+="\n"
    i++
    
}
console.log(string)