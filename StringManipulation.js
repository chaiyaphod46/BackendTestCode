function isPalindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = clean.split('').reverse().join('');
    return clean === reversed;
}



console.log("racecar : " +isPalindrome("racecar")); 
console.log("hello : " +isPalindrome("hello")); 
console.log("A man a plan a canal Panama : " +isPalindrome("A man a plan a canal Panama"));