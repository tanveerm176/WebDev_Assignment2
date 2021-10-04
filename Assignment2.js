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

// const array = [1, 2, 3, 5];
// // checks whether an element is even
// function even(element) {
//     if (element % 2 === 0) {
//         console.log("true" + element);
//         return true;
//     }
//     else {
//         console.log("else" + element);
//         return false;
//     }
// }
// console.log(mySome(array, even));

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

// function test(element)
// {
//     if(element < 40)
//     {
//         return true;
//     }

//     else
//     {
//         return false;
//     }
// }
// const array1 = [1, 30, 51, 29, 10, 13];
// console.log(myEvery(array1,test));

function myReduce(arr, callback) 
{   
    prevVal = null;
    for (let i = 1; i < arr.length; i++) 
    {
        if(!prevVal)
        {
            prevVal = arr[i-1];
        }
        prevVal = callback(prevVal, arr[i]);
        
    }
    return prevVal;
}

// function add(x,y)
// {
//     return x+y;
// }
// const array1 = [1, 2, 3, 4];
// console.log(myReduce(array1, add))


function myIncludes(arr, searchElement, fromIndex = 0) {

    if(fromIndex<0 && (Math.abs(fromIndex))>arr.length)
    {
        fromIndex = 0;
        
    }
    else
    {
        fromIndex = arr.length+fromIndex;
    }

    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

// const array1 = [1, 2, 3,4];
// console.log(myIncludes(array1,4,-1))

function myIndexOf(arr, searchElement, fromIndex = 0) 
{
    if(fromIndex>= arr.length)
    {
        return -1;
    }
    if(fromIndex<0)
    {
        fromIndex = arr.length + fromIndex
    }

    counter = 0;
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            counter = i;
            return counter;
        }
    }
    return counter = -1;
}

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(myIndexOf(beasts, 'bison', 6))

function myPush(arr, element) {
    newArrSize = arr.length + 1;
    let newArr = new Array(newArrSize);
    newArr[newArrSize - 1] = element;

    return newArr.length;
}

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);
// console.log(animals);

function myLastIndexOf(arr, searchElement, fromIndex = 0) 
{
    counter = -1;
    for (i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            counter=i;
        }
    }
    return counter

}

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(myLastIndexOf(animals, 'Dodo'));
