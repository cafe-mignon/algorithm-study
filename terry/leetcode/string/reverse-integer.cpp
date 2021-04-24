class Solution {
public:
    int reverse(int x) {
        bool s = x < 0;
        long long y = x;
        if(s) y = -y;
        
        long long res = 0;
        
        while(y) {
            long long remain = y%10;
            y /= 10;
            res *= 10;
            if(res > INT_MAX) return 0;
            res += remain;
        }
        if(s&&res == INT_MAX) return 0;
        
        return s ? -res : res;
        
    }
};
