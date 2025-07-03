function findMax(arr) {
    if (arr.length === 0) return undefined; // กรณีอาร์เรย์ว่าง
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let numbers = [4, 8, 2, 10, 6];
console.log(findMax(numbers)); 