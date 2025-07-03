// Challenge 3: Two Sum Problem / ความท้าทายที่ 3: ปัญหา Two Sum
// EN: Given an array of integers and a target sum, find two numbers in the array that add up to the target.

// TH: กำหนดอาร์เรย์ของจำนวนเต็มและผลรวมเป้าหมาย หาสองจำนวนในอาร์เรย์ที่บวกกันได้ผลรวมเป้าหมาย


function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.hasOwnProperty(diff)) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
    return null;
}






console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));      
console.log(twoSum([1, 2, 3], 7));