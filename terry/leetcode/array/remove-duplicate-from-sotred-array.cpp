class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int outputIdx = 0;
        int prevNum = -10001;
        for(int i = 0; i < nums.size(); i++) {
            if(prevNum == nums[i]) {
                continue;
            } else {
                prevNum = nums[i];
                nums[outputIdx++] = nums[i];
            }
        }
        
        nums.resize(outputIdx);
        return outputIdx;
    }
};
