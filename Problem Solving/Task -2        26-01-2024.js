

+function lengthOfLastWord(s) {
    s = s.trim();

    const words = s.split(' ');

    const lastWord = words[words.length - 1];
    return lastWord.length;
}


const S1 = "Hello World";
const S2 = " fly me to the moon ";
const S3 = "luffy is still joyboy";

console.log(lengthOfLastWord(S1));
console.log(lengthOfLastWord(S2));
console.log(lengthOfLastWord(S3)); 
