function lengthOfLastWord(s) {
    s = s.trim();

    const words = s.split(' ');

    const lastWord = words[words.length - 1];
    return lastWord.length;
}


const String1 = "Hello World";
const String2 = " fly me to the moon ";
const String3 = "luffy is still joyboy";

console.log(lengthOfLastWord(String1));
console.log(lengthOfLastWord(String2));
console.log(lengthOfLastWord(String3)); 
