// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers.
// Assume that there will only be one solution. You only need to complete the threeSum function inside script.js
// Example: given array S = {-1 2 1 -4},
// and target = 1.
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

function threeSum(arr, target) {
    // write your code here
    let operatingArray = [...arr]
    operatingArray.push(arr[0], arr[1])
    // console.log(operatingArray)
    let res = []

    for (let index = 0; index < operatingArray.length-2; index++) {
        const sum = operatingArray[index] + operatingArray[index+1] + operatingArray[index+2];
        // console.log(sum)
        res.push(sum);
        
    }

    res.push(target)
    res.sort((a,b) => a-b);  // 2,-1, -4, -3 
    // console.log(res);
    let n = res.indexOf(target)
    // console.log(n)
    let ans = 0;
    if ((res[n] - res[n-1]) < (res[n+1] - res[n]) ) {
        ans = res[n]
    } else {
        ans = res[n+1]
    }
    console.log(ans)
    
    
      
}



module.exports = threeSum;
