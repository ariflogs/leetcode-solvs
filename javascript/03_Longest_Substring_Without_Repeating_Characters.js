/**
 *  Title: 3. Longest Substring Without Repeating Characters
 *  Reference: https://leetcode.com/problems/longest-substring-without-repeating-characters
 *  Difficulty: Medium
 */

/**
 * @param {string} s
 * @return {number}
 */

// Solution 1
// -> Time Complexity: O(n)
// -> Space Complexity: O(n)

var lengthOfLongestSubstring = function (s) {
    const chars = [];
    let maxLength = 0;

    for (let item of s) {
        if (!chars.includes(item)) {
            chars.push(item);
        } else {
            let index = chars.indexOf(item);
            chars.splice(0, index + 1);
            chars.push(item);
        }

        if (chars.length > maxLength) {
            maxLength = chars.length;
        }
    }

    return maxLength;
};

lengthOfLongestSubstring("abcabcbb")

