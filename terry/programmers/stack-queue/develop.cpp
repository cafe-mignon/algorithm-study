#include <string>
#include <vector>
#include <queue>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    
    vector<int> time;
    for(int i = 0; i < progresses.size(); i++) {
        int p = 100 - progresses[i];
        int s = speeds[i];
        time.push_back(p%s ? p/s + 1 : p/s);
    }
    
    queue<int> q;
    
    for(int i = 0; i < time.size(); i++) {
        int ts = 0;
        while(!q.empty() && time[q.front()] < time[i]) {
            ts ++;
            q.pop();
        }
        if(ts) answer.push_back(ts);
        q.push(i);
    }
    
    if(q.size()) answer.push_back(q.size());
    
    return answer;
}
