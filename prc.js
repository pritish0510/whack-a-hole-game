let arr =[1,2,3,4,5,6,7]
// select random number in this array 
let rand;
setInterval(() => {
     rand = Math.floor(Math.random()*arr.length)
}, 1000);
setInterval(()=>{
console.log(arr[rand])
},2000) // logic