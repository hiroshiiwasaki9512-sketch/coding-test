
# 🧩 JavaScript Coding Assignment

## Rule 1: Don't use AI, hope you enjoy coding...

### **Estimated Total Time: 30 Minutes**

This assignment includes **four classic algorithmic problems** frequently used in real-world interviews.
You may complete as many as you can, or choose one according to your skill level.

Each problem includes:

* Description
* Requirements
* Input / Output
* Example(s)

---

---

# **📘 1. Group Anagrams**

### **📝 Problem Description**

Given an array of strings, group the strings that are anagrams of each other.
Two words are anagrams if they contain the **same characters in the same frequency**, regardless of order.

### **📥 Function Signature**

```js
function groupAnagrams(strs) { }
```

### **📌 Requirements**

* Group all anagrams together.
* Output can be in any order.
* Use a hash map (recommended approach).
* Strings may include lowercase English letters only.

### **📤 Input**

* `strs: string[]`

### **📤 Output**

* `string[][]`

### **🔍 Example**

```js
Input: ["eat","tea","tan","ate","nat","bat"]

Output:
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
```

---

---

# **📘 2. Validate Balanced Brackets**

### **📝 Problem Description**

Given a string consisting of characters:
`(`, `)`, `{`, `}`, `[`, `]`
determine whether the string contains valid and properly balanced brackets.

A string is valid if:

1. Every opening bracket has a matching closing bracket.
2. Brackets close in the correct order.

### **📥 Function Signature**

```js
function isValidBrackets(s) { }
```

### **📌 Requirements**

* Use a stack-based approach.
* Return `true` if valid, otherwise `false`.
* Only bracket characters will be provided.

### **📤 Input**

* `s: string`

### **📤 Output**

* `boolean`

### **🔍 Examples**

```js
Input: "([]{})"
Output: true
```

```js
Input: "(]"
Output: false
```

```js
Input: "([)]"
Output: false
```

---

---

# **📘 3. Longest Substring Without Repeating Characters**

### **📝 Problem Description**

Given a string `s`, return the length of the **longest substring** that contains **no repeating characters**.

This problem tests:

* Sliding window technique
* Efficient usage of maps or sets
* O(n) time complexity

### **📥 Function Signature**

```js
function longestNonRepeating(s) { }
```

### **📌 Requirements**

* The substring must have all unique characters.
* You must return **length only**, not the substring itself.
* Use a sliding window algorithm (recommended).

### **📤 Input**

* `s: string`

### **📤 Output**

* `number`

### **🔍 Examples**

```js
Input: "abcabcbb"
Output: 3
Explanation: "abc"
```

```js
Input: "bbbbb"
Output: 1
Explanation: "b"
```

```js
Input: "pwwkew"
Output: 3
Explanation: "wke"
```

---

---

# **📘 4. Top K Frequent Elements**

### **📝 Problem Description**

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

Multiple valid outputs may exist (order does not matter).

### **📥 Function Signature**

```js
function topKFrequent(nums, k) { }
```

### **📌 Requirements**

* Use frequency counting (hash map).
* Use either:

  * Max-heap
  * Min-heap
  * Bucket sort (optimal)
* Return elements in **any** order.

### **📤 Input**

* `nums: number[]`
* `k: number`

### **📤 Output**

* `number[]`

### **🔍 Examples**

```js
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

```js
Input: nums = [4,1,-1,2,-1,2,3], k = 2
Output: [-1,2]
```

---

---

# ✅ **Submission Guidelines**

* Write your solutions in clean, readable JavaScript.
* Include comments explaining your thought process when helpful.
* Time complexity optimizations are encouraged but not required.
* You may submit:

  * A single `.js` file with four functions, or
  * Each function in a separate file.

*Submit your solution as a private GitHub repository and add webguru11124 as a collaborator.*

---

# ✅ **Optional (If You Want to Demonstrate More Seniority)**

You may also include:

* Unit tests (Jest / Vitest)
* Time + space complexity for each solution
* Alternate optimized solutions

