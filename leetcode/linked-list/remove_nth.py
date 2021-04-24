
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def removeNthFromEnd_old(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        backup= head
        lenght= 0
        while True:
            lenght=lenght+1
            if head.next is None:
                break
            head= head.next

        print(lenght)
        target= lenght-n
        print(target)
        
        head= backup
        count= 0
        while True:
            if target==count and backup.next is not None:
                backup.next= backup.next.next
                break
            else:
                backup = backup.next
            count=count+1
            if head.next is None:
                break
        return head

    def removeNthFromEnd(self, head, n):
        backup= head
        lenght= 0
        while True:
            lenght=lenght+1
            if head.next is None:
                break
            head= head.next
        print(lenght)
        target= lenght-n
        print(target)
        if lenght == 0:
            return None
        elif lenght == n:
            return backup.next
        
        head= backup
        count= 0
        while True:
            count=count+1
            if target==count: # 헤드노드를 지우려면?
                backup.next= backup.next.next
                break
            else:
                backup = backup.next
            if head.next is None:
                break
        return head
        
node= ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
#node= ListNode(1)
#node= ListNode(1, ListNode(2))
sol= Solution()
node= sol.removeNthFromEnd(node, 2)
print(node)