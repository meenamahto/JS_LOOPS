// const rs=require("readline-sync")
// var word=rs.question("Enter your word:")
// var string=word
// var name="",i=word.length-1;
// while (i>=0){
//     name+=word[i]
//     i=i-1
// }
// if (string==name){
//     console.log("pallindrome",name)
// }
// else{
//     console.log("not palindrome",name)
// }


// const rs=require("readline-sync")
// var word=rs.question("Enter your word:")
// var string=word
// var name=""
// for ((i=word.length-1);i>=0;i--){
//     name+=word[i]
// }
// if (string==name){
//     console.log("palindrome",name)
// }
// else{
//     console.log("not palindrome",name)
// }

const rs=require("readline-sync");
var word=rs.question("Enter your word:");
var i=word.length-1,string=word,name="";
do{
    name=name+word[i]
    i=i-1
}while(i>=0);
if(string==name){
    console.log("palindrome",name)
}
else{
    console.log("not palindrome",name)
}