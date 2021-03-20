#include <string>
#include <vector>

using namespace std;

const int max_width = 2000;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    vector<pair<int,int>> candidate; // width , depth
    int area = brown + yellow;
    
    
    // make candidate
    for(int i = 1; i <= max_width; i++ ) { // width 
        for(int j = 1; j <= i; j++) { // depth
            if(i*j == area) {
                candidate.push_back(make_pair(i,j));
            } else if (i*j > area) {
                break;
            }
        }
    }
    
   // find answer 
    for(auto c : candidate) {
        auto [w,d] = c;
        
        int b = 2 * w + 2 * d - 4;
        int y = w*d - b;
        
        if(brown == b) {
            answer.push_back(w);
            answer.push_back(d);
            return answer;
        }
        
    }
    return answer;
}
