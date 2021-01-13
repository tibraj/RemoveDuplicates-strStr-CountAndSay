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