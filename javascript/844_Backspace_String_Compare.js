/**
 * Problem 844. Backspace String Compare
 * Reference: https://leetcode.com/problems/backspace-string-compare
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution 1 
// -> Time Complexity: O(n)
// -> Space Complexity: O(n)

var filterChar = function (str, char) {
    let filteredStr = "";

    for (i = 0; i < str.length; i++) {
        if (str[i] !== char) {
            filteredStr += str[i]
        } else {
            filteredStr = filteredStr.slice(0, -1)
        }
    }

    return filteredStr
}

var backspaceCompare = function (s, t) {
    const filteredS = filterChar(s, "#");
    const filteredT = filterChar(t, "#")

    return filteredS === filteredT
};