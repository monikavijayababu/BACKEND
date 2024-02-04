
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = Array(256).fill(0);


    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i)]++;
    }


    for (let i = 0; i < t.length; i++) {
        charCount[t.charCodeAt(i)]--;
    }


    for (let count of charCount) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}


const result1 = isAnagram("anagram", "nagaram");
console.log(result1);

const result2 = isAnagram("rat", "car");
console.log(result2); 