

let number =  +process.argv[2];
console.log(number);
if(!Number.isInteger(number)){
    console.log("Provided is not number");
    process.exit();
}
for(let i=1; i<=10; i++){
    console.log(`${number} x ${i} = ${number*i}`);
}
// run this with "node main.js 10" for 10 gorer namta