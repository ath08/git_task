const getRandomLetter = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
       
    return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    
}

console.log(getRandomLetter());
console.log(getRandomLetter());
console.log(getRandomLetter());