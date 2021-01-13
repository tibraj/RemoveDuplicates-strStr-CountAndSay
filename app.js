//Remove Duplicates
function removeDuplicates(numbers) {
    if(numbers.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < numbers.length; j++) {
        if(numbers[j] !== numbers[i]) {
            i++;
            numbers[i] = numbers[j];
        }
    }
    return i;
}

//strStr
function strStr(haystack, needle) {
    if(needle.length === 0) return 0;
    if(needle === haystack) return 0;
    for(let i = 0; i < haystack.length - needle.length; i++) {
        if(needle === haystack.substring(i, i + needle.length)) {
            return i;
        }
    }
    return -1;
}


//Count and Say
function countAndSay(n) {
    if(n === 1) return '1';
    const digitsArray = countAndSay(n - 1).match(/(\d)\1*/g);
    return digitsArray.map(
        digitString => digitString.length + digitString[0] 
    ).join('');
}