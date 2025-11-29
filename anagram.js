function groupAnagrams(strs) {
    const anagramMap = new Map();
    for (const str of strs) {
        const key = extractKey(str);
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key).push(str);
    }
    return Array.from(anagramMap.values());
}

function extractKey(str) {
    return str.split('').sort().join('');
}

function main() {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = groupAnagrams(input);
    console.log(`Input: ${JSON.stringify(input)}\nOutput: ${JSON.stringify(result)}`);
}

main();