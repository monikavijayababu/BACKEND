
function reverseVowels(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let sArray = s.split('');
    let left = 0, right = sArray.length - 1;

    while (left < right) {
        while (left < right && vowels.indexOf(sArray[left]) === -1) {
            left++;
        }
        while (left < right && vowels.indexOf(sArray[right]) === -1) {
            right--;
        }

        let temp = sArray[left];
        sArray[left] = sArray[right];
        sArray[right] = temp;

        left++;
        right--;
    }

    return sArray.join('');
}

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));