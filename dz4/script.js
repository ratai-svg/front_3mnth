const famousPersons = [
    {
        name: "Wolfgang Amadeus Mozart",
        age: 35,
        role: "composer",
    },
    {
        name: "Ludwig van Beethoven",
        age: 56,
        role: "composer",
    },
    {
        name: "Johann Sebastian Bach",
        age: 65,
        role: "composer",
    },
    {
        name: "Heath Ledger",
        age: 28,
        role: "actor",
    },
    {
        name: "Marilyn Monroe ",
        age: 36,
        role: "actor",
    },
    {
        name: "Kurt Cobain",
        age: 27,
        role: "singer",
    },
    {
        name: "Freddie Mercury",
        age: 45,
        role: "singer",
    },
    {
        name: "Bruno Mars ",
        age: 40,
        role: "singer",
    },
    {
        name: "The Weeknd",
        age: 35,
        role: "singer",
    },
    {
        name: "Rihanna",
        age: 37,
        role: "singer",
    },
];

if (famousPersons.every((user) => user.age >= 18)) {
    console.log("все взрослые");
} else {
    console.log("есть несовершеннолетний");
}
famousPersons.forEach((user) => {
    console.log(user.name);
});
famousPersons.forEach((user) => {
    console.log(user.name, "is a", user.role);
});
let minAge = famousPersons[0];
let maxAge = famousPersons[0];
famousPersons.forEach((user) => {
    if (user.age < minAge.age) {
        minAge = user;
    }
    if (user.age > maxAge.age) {
        maxAge = user;
    }
});
console.log(maxAge, minAge, "разница в возрасте", maxAge.age - minAge.age);

console.log(famousPersons.filter((user) => user.age > 20));

let numbers = [3, 7, 2, 10, 5];

numbers.push(8);

numbers.shift();

let evenNumbers = numbers.filter((num) => num % 2 === 0);

let multipliedNumbers = numbers.map((num) => num * 5);

let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;

numbers.sort((a, b) => a - b);

console.log("Sorted array:", numbers);
console.log("Even numbers:", evenNumbers);
console.log("Multiplied by 5:", multipliedNumbers);
console.log("Average:", average);
