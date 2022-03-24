// var i=1,sum=0;
// while(i<=10){
//     var rs=require("readline-sync");
//     var num=rs.questionInt("Enter your number:")
//     sum+=num
//     i=i+1
// }
// console.log(sum)


// //in for loop:-

// for (var i=1,sum=0;i<=10;i++){
//     var rs=require("readline-sync");
//     var num=rs.questionInt("Enter your number:")
//     sum=sum+num
// }
// console.log(sum)


// //in do while loop:-

var i=1,sum=0;
do{
    const rs=require("readline-sync")
    var num=rs.questionInt("Enter your number;")
    sum+=num
    i=i+1
}while(i<=10)
console.log(sum)
