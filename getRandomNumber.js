const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(1, 14));
console.log(getRandomNumber(50, 100));
console.log(getRandomNumber(-5, 0));
console.log(getRandomNumber(0, 9));
console.log(getRandomNumber(-5, 5));

