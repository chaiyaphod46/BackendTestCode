// Challenge 2: String Manipulation / ความท้าทายที่ 2: การจัดการสตริง
// EN: Write a function that checks if a string is a palindrome (reads the same forwards and backwards).

// TH: เขียนฟังก์ชันที่ตรวจสอบว่าสตริงเป็น palindrome หรือไม่ (อ่านจากหน้าไปหลังและหลังไปหน้าเหมือนกัน)

function isPalindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = clean.split('').reverse().join('');
    return clean === reversed;
}



console.log("racecar : " +isPalindrome("racecar")); 
console.log("hello : " +isPalindrome("hello")); 
console.log("A man a plan a canal Panama : " +isPalindrome("A man a plan a canal Panama"));