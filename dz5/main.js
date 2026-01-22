const student = {  name: "Ivan",  age: 21,  skills: ["js", "css"] };

const { name, age } = student;
console.log(name, age); 

const { skills: [ skillOne, skillTwo ] } = student;

console.log(skillOne, skillTwo);

function printStudent({ name, age }){
    return `Student ${name}, age ${age}`; 
}

console.log(printStudent(student)); 

function sumAndMultiply(multiplier, ...numbers){
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum * multiplier;
}

const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8] 

console.log(sumAndMultiply(...arrayFirst, ...arraySecond, ...arrayThird, ...arrayFourth, ...arrayFiveth));

const mergedAndSortedArray = [
    ...arrayFirst, 
    ...arraySecond, 
    ...arrayThird, 
    ...arrayFourth, 
    ...arrayFiveth
].sort((a, b) => a - b);

console.log(mergedAndSortedArray);

// for commit 
