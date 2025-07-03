// Challenge 1: Array Manipulation / ความท้าทายที่ 1: การจัดการอาร์เรย์
// EN: Write a function that finds the maximum number in an array of integers.

// TH: เขียนฟังก์ชันที่หาจำนวนที่มากที่สุดในอาร์เรย์ของจำนวนเต็ม

function findMax(arr) {
    if (arr.length === 0) return undefined;
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