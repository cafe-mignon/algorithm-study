class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int size = nums.size();
        int l = 0, r = 0;
        
        while(l<size & r<size) {
            while(l<size&&nums[l]) { // find zero
                l++;
            }
            while(r<size&&!nums[r]) { // find num
                r++;
            }
            if(l<size && r<size && l < r) {
                int tmp = nums[l];
                nums[l] = nums[r];
                nums[r] = tmp;
            } else {
                r++;
            }
            
        }
    }
};
