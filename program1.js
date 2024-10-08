/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let mapping = {
        ')': '(',
        '}': '{',
        ']': '['
};

for (let char of s) {
    if (char in mapping) {
        let topElement = stack.length ? stack.pop() : '#';
        if (mapping[char] !== topElement) {
            return false;
        }
    } else {
        stack.push(char);
    }
}

return stack.length === 0;
}

console.log(isValid("()"));    
console.log(isValid("()[]{}"));  
console.log(isValid("(]"));       

module.exports = { isValid };


