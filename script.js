// Remove Duplicates :
let numbers = [1, 3, 2, 1, 4, 5, 3, 4, 2, 3, 4, 6, 5, 88, 99, 76, 4, 3, 2, 1];
let numbersArray = [1, 3, 2, 1, 4, 5, 3, 4, 2, 3, 4, 6, 5, 88, 99, 76, 4, 3, 2, 11,12,1];

console.log(numbers);
// using Set method:
let result = [...new Set(numbers)];
console.log(result);

// using loops :

function removeDups(arr) {
    let result = [];
    for (let ele of arr) {
        if (result.indexOf(ele) === -1) {
            result.push(ele)
        }
    }
    return result.sort((a, b) => a - b);
}
console.log(removeDups(numbers));

// using filter:
let removeDupNums = numbersArray.filter((ele,ind) => {
    return numbersArray.indexOf(ele) == ind;
})
console.log(removeDupNums)