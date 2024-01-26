function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Target ${target} found at index ${result}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
