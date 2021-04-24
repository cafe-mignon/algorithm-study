class Solution {
public:
    int firstUniqChar(string s) {
        vector<vector<int>> count(26);
        
        for(int i = 0; i < s.length(); i++)
            count[s[i]-'a'].push_back(i);
        
        vector<int> res;
        for(int i = 0; i < 26; i++) {
            if(count[i].size() == 1) {
                res.push_back(count[i][0]);
            }
        }
        sort(res.begin(), res.end());
        if(res.size()) return res[0];
        return -1;
        
    }
};
