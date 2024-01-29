function increment(digits) {

    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {

        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);

        if (carry === 0) {
            break;
        }
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
}


let integer1 = [1, 2, 3];
let integer2 = [4, 3, 2, 1];
let integer3 = [9];

console.log(increment(integer1)); //  [1, 2, 4]
console.log(increment(integer2)); //  [4, 3, 2, 2]
console.log(increment(integer3)); //  [1, 0]
