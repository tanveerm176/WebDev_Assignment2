/*
Muhammad Tanveer
muhammad.tanveer93@myhunter.cuny.edu
Assignment 2 CSCI 395.48
Every function has its test commented out beneath it
*/

function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
    return;
}

// const array1 = ['a', 'b', 'c'];
// myEach(array1,console.log);

function myMap(arr, callback) {
    newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]))
    }
    return newArray;
}

// function mul(x)
// {
//     return x*2
// }
// const array1 = [1, 4, 9, 16];
// const map1 = myMap(array1, mul);
// console.log(map1);

function myFilter(arr, callback) {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) == true) {
            newArr.push(arr[i])
        }

    }
    return newArr;
}

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// function check(word) {
//     if (word.length > 6) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const result = myFilter(words, check);
// console.log(result);

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }

    }
    return false;
}
