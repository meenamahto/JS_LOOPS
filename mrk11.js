// var i=1;
// while(i<=100){
//     if (i%3==0 && i%7==0){
//         console.log("navgurukul")
//     }
//     else if(i%3==0){
//         console.log("nav")
//     }
//     else if(i%7==0){
//         console.log("gurukuk")
//     }
//     else{
//         console.log(i)
//     }
//     i=i+1
// }

// //in for loop:-

// for(var i=1;i<=100;i++){
//     if (i%3==0 && i%7==0){
//         console.log("navgurukul")
//     }
//     else if(i%3==0){
//         console.log("nav")
//     }
//     else if(i%7==0){
//         console.log("gurukul")
//     }
//     else{
//         console.log(i)
//     }
// }


// //in do while loop:-

var i=1;
do{
    if (i%7==0 && i%3==0){
        console.log("navgurukul",i)
    }
    else if(i%7==0){
        console.log("gurukul",i)
    }
    
    else if(i%3==0){
        console.log("nav",i)
    }
    i=i+1
}while(i<=100)