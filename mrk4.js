// let n=require("readline-sync");
// let num=parseInt(n.question("enter number: "));
// for (let i=1;i<=10;i++) {
//        multi=num*i;
//        console.log(num + " *" + i + "=" + multi)
//    }

// const rs=require("readline-sync")
// var n=parseInt(rs.question("Enter your number:"))
// var i=1
// while (i<=10){
//     console.log(n+"*"+i+"="+n*i)
//     i++
// }


// // in dowhile loop:-

const rs=require("readline-sync")
var n=parseInt(rs.question("Enter your number:"))
var i=1;
do{
    console.log(n+"*"+i+"="+n*i)
    i=i+1
}while(i<=10);
