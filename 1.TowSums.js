
var array = [2,7,11,15]

/*
case 1 : [2,7,11,15],  target - 9
case 1 : [3,2,4],  target - 6
case 1 : [3,3],  target - 

*/ 


function twoSum (array, target) {
    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === target) {
        return [i, j]
          }
       }
    }
}


console.log(twoSum(array, 9))

