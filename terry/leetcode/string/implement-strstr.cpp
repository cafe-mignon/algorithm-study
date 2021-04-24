// boyer-moore

class Solution {
public:
    
    vector<int> buildSkip(string s) {
        vector<int> skip(26, s.length());
        
        for(int i = 0; i < s.length(); i++) {
            int diff = s.length() - i - 1;
            if(diff)
                skip[s[i] - 'a'] = min(skip[s[i] - 'a'], diff);
        }   
        
        return skip;
    }
    
    int strStr(string haystack, string needle) {
        
        if(!needle.size()) return 0;

        
        vector<int> skip = buildSkip(needle);
        
        
        int idx = needle.length() - 1;
        while(idx < haystack.length()) {
            bool flag = true;
            for(int i = 0; i < needle.length(); i++) {
                if(needle[needle.length() - i - 1] == haystack[idx - i]) {
                    continue;
                } else {
                    flag = false;
                    idx += skip[haystack[idx] - 'a'];
                    break;
                }
            }
            if(flag) return idx - needle.length() + 1;
        }
        
              
        return -1;
    }
};
