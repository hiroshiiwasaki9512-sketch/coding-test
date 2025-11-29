function longestNonRepeating(s) {
    let charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
            left = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;

}