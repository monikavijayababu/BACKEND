function missingNumber(nums) {
    let n = nums.length;

    let result = n;

    for (let i = 0; i < n; i++) {
        result ^= i ^ nums[i];
    }

    return result;
}

console.log(missingNumber([3, 0, 1]));  // 2
console.log(missingNumber([0, 1]));      //  2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));  // 8
