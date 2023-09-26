/**
 * Problem: 11. Container With Most Water
 * Reference: https://leetcode.com/problems/container-with-most-water/
 */

/**
 * 
 * @param {number[]} height 
 * @returns {number}
 */

// Solution 1 
    // -> Time Complexity: O(n)
    // -> Space Complexity: O(1)

var maxArea = function(height) {
    let maxHeight = 0;
    let firstPointer = 0;
    let lastPointer = height.length - 1;

    for(let i = 0; i < height.length; i++) { 
        const areaWeight = lastPointer - firstPointer;
        const areaHeight = Math.min(height[firstPointer], height[lastPointer])
        const area = areaHeight * areaWeight;

        if (area > maxHeight) {
            maxHeight = area;
        }

        if (height[firstPointer] > height[lastPointer]) {
            lastPointer--
        } else {
            firstPointer++
        }
    }

    return maxHeight;
};