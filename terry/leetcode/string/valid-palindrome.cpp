#include <algorithm>


class Solution {
public:
    bool isPalindrome(string s) {
        vector<char> modified_s;

        transform(s.begin(), s.end(), s.begin(), ::tolower);
        
        for(auto c: s) {
            if(('a' <= c && c <= 'z') || ('0' <= c && c <= '9')) {
                modified_s.push_back(c);
            }
        }
        
        
        for(int i = 0; i < modified_s.size()/2; i++) {
            if(modified_s[i] != modified_s[modified_s.size() - i - 1]) return false;
        }
        
        return true;
    }
};
