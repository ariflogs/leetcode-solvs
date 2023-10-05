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
    let

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

// Solution 2
// -> Time Complexity: O(n)
// -> Space Complexity: O(1)

var backspaceCompare = function (s, t) {
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;

    let matched = true;
    let i = 0;
    while (i < s.length || i < t.length) {
        if (sPointer < 0 && tPointer < 0) {
            break;
        }
        if (s[sPointer] === "#") {
            let back = 2;
            while (back > 0) {
                sPointer--;
                back--;

                if (s[sPointer] === "#") {
                    back += 2;
                }
            }
        }

        if (t[tPointer] === "#") {
            let back = 2;
            while (back > 0) {
                tPointer--;
                back--;

                if (t[tPointer] === "#") {
                    back += 2;
                }
            }
        }

        if (s[sPointer] !== t[tPointer]) {
            matched = false;
            break;
        }

        sPointer--;
        tPointer--;
    }

    return matched;
};
