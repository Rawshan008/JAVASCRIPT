

var target = 54;
var found = 0;
for(let i=2; !found; i++){
    var result = target%i;
    if(!result){
        found = i;
    }
}
console.log(found);