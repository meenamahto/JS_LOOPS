// var i=50,sum=0;
// while(i>40){
//     var rs=require("readline-sync");
//     var n=rs.questionInt("Enter your number:")
//     sum=sum+n
//     i=i-1
// }
// console.log(sum)

// // in for loop:-

// for(var i=50,sum=0;i>40;i--){
//     var rs=require("readline-sync")
//     var n=rs.questionInt("Enter your number:")
//     sum=sum+n
// }
// console.log(sum)

// //in do while loop:-

var i=50,sum=0;
do{
    var rs=require("readline-sync")
    var num=rs.questionInt("Enter your number:")
    sum=sum+num
    i=i-1
}while(i>40)
console.log(sum)
