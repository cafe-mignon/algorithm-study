class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() - t.length()) return false;
        
        int count_s[26] = {0, };
        for(int i = 0; i < s.length(); i++) {
            count_s[s[i] - 'a']++;
        }
        int count_t[26] = {0, };
        for(int i = 0; i < t.length(); i++) {
            count_t[t[i] - 'a']++;
        }
        for(int i = 0; i < 26; i++) {
            if(count_s[i] - count_t[i]) return false;
        }
        return true;
    }
};
