class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        auto iter = digits.rbegin();
        int remain = 1;
        while(iter != digits.rend()) {
            if(remain == 0) break;
            if(*iter == 9) {
                remain = 1;
                *iter = 0;
            } else {
                remain = 0;
                (*iter)++;
            }
            iter++;
        }
        if(remain == 1) 
            digits.insert(digits.begin(),1);
        
        return digits;
    }
};
