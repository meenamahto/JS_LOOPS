
// var rs=require("readline-sync")
// var n=rs.questionInt("Enter your number:")
// var i=1
// var count=0
// while (i<=n){
//     if (n%i==0){
//         count=count+1
//     }
//     i=i+1
// }
// if (count==2){
//     console.log("prime number")
// }
// else{
//     console.log("not prime number")
// }



// var rs=require("readline-sync")
// var n=rs.questionInt("Enter your number:")
// var count=0
// for (var i=1;i<=n;i++){
//     if (n%i==0){
//         count=count+1
//     }
// }
// if (count==2){
//     console.log("prime number",n)
// }
// else{
//     console.log("not prime number",n)
// }

var rs=require("readline-sync")
var n=rs.questionInt("Enter your number:")
var i=1,count=0;
do{
    if(n%i==0){
        count=count+1
    }
    i=i+1
}while(i<=n);
if (count==2){
    console.log("prime number",n)
}
else{
    console.log("not prime number",n)
}