#https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/560/
#Given the head of a singly linked list, reverse the list, and return the reversed list.

#Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def PrintAll(self, head):
        while head is not None:
            print(head.val)
            head= head.next # pass 1
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode`
        """
        prev= None
        n1= None
        while head is not None:
            n1= ListNode(head.val, prev)
            head= head.next # pass 1
            prev= n1
        return n1

node= ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
#node= ListNode(1)
#node= ListNode(1, ListNode(2))
sol= Solution()
node= sol.reverseList(node)
print(sol.PrintAll(node))