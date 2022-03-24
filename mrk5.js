// const rs=require("readline-sync")
// var word=rs.question("Enter your word:")
// var i=word.length-1,string=word
// var name=""
// while(i>=0){
//     name=name+word[i]
//     i=i-1
// }
// if (string==name){
//     console.log("palindrome",name)
// }
// else{
//     console.log("not palindrome",name)
// }

// const rs=require("readline-sync")
// var word=rs.question("Enter your word:")
// var i,string=word;
// var name=""
// for (i=word.length-1;i>=0;i--){
//     name+=word[i]
// }
// if (string==name){
//     console.log("palindrome",name)
// }
// else{
//     console.log("not palindrome",name)
// }

// // in dowhile loop:-

const rs=require("readline-sync")
let word=rs.question("Enter your word:")
var i=word.length-1,name="";
do{
    name+=word[i]
    i=i-1
}while(i>=0);
if(word==name){
    console.log("palindrome",name)
}
else{
    console.log("not palindrome",name)
}

