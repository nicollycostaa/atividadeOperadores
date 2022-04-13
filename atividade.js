/*console.log (5 == 5 && 6==6); // true
console.log (5 == 5 && 6!=6); // false

console.log (5 == 5 || 6==6); // true
console.log (5 == 5 || 6!=6); // true

console.log (!(4>5)); // true
console.log (!(5<6)); // false
*/

const idade = 18;

if(!(idade>=18) || idade === 17){
    console.log("Bloquear a entrada")
}else{
    console.log("Deixar entrar");
}