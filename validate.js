function isValidBrackets(s) {
    const input = s.split('');

    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [];
    for (const char of input) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (bracketMap[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function main() {
    // const input = args[0];
    // console.log(`Input: ${input}`, args);
    inputs = ["([]{})", "(]", "([)]"];
    for (const input of inputs) {
        const result = isValidBrackets(input);
        console.log(`Input: ${input}\nOutput: ${result}`);
    }
}

main();
