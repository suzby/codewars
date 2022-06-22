/*
array
-accessed directly by index
-memory storage is contiguous

linked list
-class l {
    value
    next
}
biggest dif 
-cannot access directly by index
-memory not contiguous

why use?
space
 practice for interviews
 -pointer manipulation
 -trees and graphs most important to practice for interviews
https://leetcode.com/problems/reverse-linked-list/
 1 traverse the list
 2 insert elements in a stack
 3 pop elements one at a time until stack is empty 
 4 create another list

 time 0(N)
 space 0(N) [stack, linked list]

element = head
while(element.next != null){
    add to stack
}
previous node = null

while(stack not empty){
    current node  = new list node(stack element)
    if(pn = null){
    pn = cn
} else {
    pn.next = cn
    pn = cn
}
}

use recursion
-reverse link list function(listnode node){
    if(node.next = null)
    return node
}
previous pointer.next = node

define:
node
stack
recursion / recursive function



while(node.next != null){
    add elements to stack
    previousNode = stack.pop()
    currentNode = null
}

while(stack not empty){
        CN = stack.pop()
        previousNode.nect = CN
        PN = CN
}
//special case
CN.next = null
*/