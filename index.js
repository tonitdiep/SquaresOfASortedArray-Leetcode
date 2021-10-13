// Leetcode 977 Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let squares = Array(nums.length).fill(0);
    let left = 0,
    right = nums.length - 1,
    highest = nums.length - 1
    while(left <= right) {
        let leftSq = nums[left]**2;
        let rightSq = nums[right]**2;
        if(leftSq>rightSq){
            squares[highest] = leftSq;
            left++;
        } else {
            squares[highest] = rightSq;
            right--;
        }
        highest--
    }
    return squares


}

