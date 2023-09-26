/**
 * Title: 1. Two Sum
 * Reference: https://leetcode.com/problems/two-sum
 * Difficulty: Easy
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution 1 
// -> Time Complexity: O(n)
// -> Space Complexity: O(n)

var twoSum = function (nums, target) {
    const items = {};

    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];

        if (items[remaining] !== undefined) {
            return [i, items[remaining]];
        }

        items[nums[i]] = i;
    }

    return []
};