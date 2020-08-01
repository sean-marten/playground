const sumArrayForLoop = function(arr) {
    let totalSum = 0;
    for (i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    return totalSum;
};

const sumArrayNoForLoop = function(arr) {
    let totalSum = 0;
    // Each for each statement will always have the item, index and array arguments available for the callback function
    // You can use this as the second argument for the foreach statement if you want to point to instances of items in a unique class (or to use the window)
    arr.forEach(function(item, index, array){
        totalSum += item;
        console.log(item);
        console.log(index);
        console.log(array);
    });
    return totalSum;
};

const sumArrayReduce = function(arr) {
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue) - syntax for reduce
    let sum = arr.reduce(function(a,b){
        return a + b;
    }, 0);
    return sum;
};

const nums = [1,2,3,4,5,6];
const nums2 = [2,4,6,8,1,2];

sumArrayNoForLoop(nums2);

console.log(sumArrayForLoop(nums));
console.log(sumArrayForLoop(nums2));
console.log(sumArrayNoForLoop(nums));
console.log(sumArrayNoForLoop(nums2));
console.log(sumArrayReduce(nums));
console.log(sumArrayReduce(nums2));