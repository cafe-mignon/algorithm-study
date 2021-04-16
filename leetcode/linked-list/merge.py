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
    # def mergeTwoLists(self, l1, l2):
    #     """
    #     :type l1: ListNode
    #     :type l2: ListNode
    #     :rtype: ListNode
    #     """
    #     if l1 is None:
    #         l1.next= l2
    #         return l1
    #     if l2 is None:
    #         return l1
    #     if l1.val >= l2.val:
    #         backup= l1.next
    #         l1.next = l2
    #         l1.next.next= backup
    #         l2 = l2.next
    #         l1= l1.next.next
            
    #     self.mergeTwoLists(l1,l2)
    def mergeTwoLists(self, l1, l2):
    # 1. l1이 None이면, l1과 l2를 무조건 바꾸어야 함
    # 2. 이때, l2가 None이면 바꾸면 안됨
    # 3. l1, l2 노드의 값이 작은 쪽이 l1가 됨
        if (not l1) or (l2 and l1.val > l2.val):
            l1, l2 = l2, l1

        # 이렇게 바꾸었을 때, l1이 None이면 l1, l2둘다 None임
        # 둘다 None이라면 재귀를 더이상 하면 안되기에, if로 체크함
        if l1:
            # l1이 존재하면, l1의 next를 찾기 위한 재귀를 실행
            l1.next = self.mergeTwoLists(l1.next, l2)

        return l1

        

node1= ListNode(1, ListNode(2, ListNode(4)))
node2= ListNode(1, ListNode(3, ListNode(4)))

sol= Solution()
node= sol.mergeTwoLists(node1, node2)
print(sol.PrintAll(node))
        