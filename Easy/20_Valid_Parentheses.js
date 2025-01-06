/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
  Input: s = "()"
  Output: true

Example 2:
  Input: s = "()[]{}"
  Output: true

Example 3:
  Input: s = "(]"
  Output: false

Example 4:
  Input: s = "([])"
  Output: true
 */

function isValid(str) {
  if (str.length % 2 === 1) return false;
  if (str[0] === "]" || str[0] === ")" || str[0] === "}") return false;
  if (str[str.length - 1] === "[" || str[str.length - 1] === "(" || str[str.length - 1] === "{") return false;

  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const bracket of str) {
    if (Object.values(mapping).includes(bracket)) {
      stack.push(bracket);
    } else if (!!mapping[bracket]) {
      if (!stack.length || mapping[bracket] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid('()'))
console.log(isValid('()[]{}{}'))
console.log(isValid('([])'))
console.log(isValid('([)]'))
