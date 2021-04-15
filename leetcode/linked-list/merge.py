#https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/771/
#Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def PrintAll(self, head):
        while head is not None:
            print(head.val)
            head= head.next # pass 1
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if l1 is None:
            l1.next= l2
            return l1
        if l2 is None:
            return l1
        if l1.val >= l2.val:
            backup= l1.next
            l1.next = l2
            l1.next.next= backup
            l2 = l2.next
            l1= l1.next.next
            
        self.mergeTwoLists(l1,l2)

        

node1= ListNode(1, ListNode(2, ListNode(4)))
node2= ListNode(1, ListNode(3, ListNode(4)))

sol= Solution()
node= sol.mergeTwoLists(node1, node2)
print(sol.PrintAll(node))
        