/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    helperobject = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    helperstack = [] // will use array as a stack
    for (let i=0; i<s.length; i++) {
        currentCharacter = s.charAt(i);
        // if opening bracket
        if (!(currentCharacter in helperobject)) {
            helperstack.push(currentCharacter);
            continue;
        }
        // if not an opening bracket
        // ... match it to the opening bracket at top of stack
        if (helperstack.pop() !== helperobject[currentCharacter]) {
            return false;
        }
    }
    return helperstack.length === 0
};