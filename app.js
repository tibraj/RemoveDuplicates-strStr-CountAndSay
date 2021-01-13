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



//Count and Say