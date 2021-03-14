#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int answer = 0;
    
    queue<pair<int,int>> q;
    int weight_sum = 0;
    int time = 0;
    auto iter = truck_weights.begin();
    do {
        int q_size = q.size();
        
        // update time
        for(int i = 0; i < q_size; i++) {
            auto [w,t] = q.front();
            q.pop();
            t--;
            if(t == 0) {
                weight_sum -= w;
            } else {
                q.push(make_pair(w,t));
            }
        }
        
        // input new car
        if(iter != truck_weights.end() && (weight_sum + *iter) <= weight) {
            q.push(make_pair(*iter, bridge_length));
            weight_sum += *iter;
            iter++;
        }    
        time++;
    } while(q.size());
    
    answer = time;
    return answer;
}
