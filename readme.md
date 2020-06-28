# git-task


* Create github repository with name git_task - 1 point
* Create getRandomNumber.js file - 4 points
    * add function which generates random number
    * commit the changes
* Create getRandomLetter.js file - 4 points
    * add a function which returns random letter
    * commit the changes'
*  Swap the content of both files - 2 points
    * commit the changes
* Add some examples of usage for both files - 2 points
    * commit the changes
* Return each file's content to its place - 2 points
    * commit the changes
* Create index.js file
* Add gitignore file - 2 points
* Add index.js to gitignore
* Add readme.md file and some small description about this task and files you've created - 3 points
* commit the changes

    ---

```javascript 
    const getRandomLetter = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
       
    return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    
}

console.log(getRandomLetter());
console.log(getRandomLetter());
console.log(getRandomLetter());
console.log(getRandomLetter());
console.log(getRandomLetter());

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(1, 14));
console.log(getRandomNumber(50, 100));
console.log(getRandomNumber(-5, 0));
console.log(getRandomNumber(0, 9));
console.log(getRandomNumber(-5, 5));

```
|name | email|
|---|---|
|Tatev| ath08@gmail.com