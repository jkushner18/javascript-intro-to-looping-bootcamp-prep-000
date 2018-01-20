function forLoop(array){
  
for(var i=0; i<=25;i++){
  
if (i===1){array.push("I am 1 strange loop")}
else if (i>1){
array.push(`"I am ${i}strange loops"`)}}

return array}

function whileLoop(n){
  
while(n>0){
  
console.log(n);}n--

return "done"
  
}

function whileLoop(n){
  
while(n>0){
  
console.log(n--);}

if(n===0){return "done"}

}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhile(array){
  
do{return array
  
} while(maybeTrue() && array.length>0) }