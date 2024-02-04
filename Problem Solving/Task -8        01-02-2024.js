
function strStr(haystack, needle) {
    if (needle === "") {
        return 0;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let found = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            return i;
        }
    }
    return -1;
}
const result1 = strStr("sadbutsad", "sad");
console.log(result1);

const result2 = strStr("leetcode", "leeto");
console.log(result2); 
