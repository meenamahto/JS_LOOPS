// var i=5
// while(i>0){
//     k=1
//     var j=""
//     while(k<=5){
//         j=j+i
//         k=k+1
//     }
//     console.log(j)
//     i=i-1
// }

// //in for loop:-

// for (var i=5;i>0;i--){
//     for (var k=1,j="";k<=5;k++){
//         j=j+i
//     }
//     console.log(j)
// }


// // in do while loop:-

// var i=5;
// do{
//     var k=1,j="";
//     do{
//         j=j+i
//         k=k+1
//     }while(k<=5);
//     console.log(j)
//     i=i-1
// }while(i>0)



// //diamond shape:-

const rs=require("readline-sync");
var num=rs.questionInt("Enter your number of raws:")
var i=1
while(i<=num){
    var j=1;
    var s=""
    while(j<=num-i){
        s+=" "
        j=j+1
    }
        var k=1
        var p=" "
        while(k<=i){
            p=p+k
            k=k+1
        }
    console.log(s+p)
    i=i+1
}



// let n=require("readline-sync");
// let choose_ascii=(n.questionInt("enter number: "));
// var ascii_char=97+choose_ascii
// for (var i=97;i<=ascii_char;i++) {
//        console.log(chr(i));
// }


// template literal
// dif python javascript
// oprerator
// true and false value
// node use
// terminal use
// import and require
// readline sync use
// switch case if else
// other opertaor
// syncronous and ansy
// 




