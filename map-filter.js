const numbers = [2, 3, 5, 6, 7, 8, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
   output.push(result); 
}


const squere = element => element * element;
const squere = x => x*x;

const result = numbers.map(function(element, index, array){
    return element * element;
})


const result = numbers.map(x => x*x);
console.log(result);


console.log(output);

const bigger = numbers.filter(x => x>5);
console.log(bigger);

const isThere = numbers.find(x => x>5);
console.log(isThere);