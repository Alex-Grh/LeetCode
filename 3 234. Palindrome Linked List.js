/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:
https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg

Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*/
// var isPalindrome = function (head) {
//    head = head + "";
//    let a = head.split("").reverse().join("");
//    if (a === head) {
//       return true;
//    } else {
//       return false;
//    }
// };
// console.log(isPalindrome([1, 2, 2, 1]));

var isPalindrome = function (head) {
   var rec = "";   
    var seq = "";  

    while(head != null){
        seq += head.val;
        rec = head.val + rec;
        head = head.next;
    }
   
    return seq == rec;
};