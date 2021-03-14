#include <string>
#include <vector>
#include <stack>
#include <queue>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> prices) {
    vector<int> answer(prices.size(),0);
    priority_queue<pair<int,int>> pq; // value / index
    
    for(int i = 0; i < prices.size(); i++) {
        int p = prices[i];
        while(pq.size() && pq.top().first > p) {
            auto [v,idx] = pq.top();
            pq.pop();
            answer[idx] = i - idx;
        }
        pq.push(make_pair(p,i));
    }
    
    while(pq.size()) {
            auto [v,idx] = pq.top();
            pq.pop();
            answer[idx] = prices.size() - idx - 1;
        }
    
    
    return answer;
}
