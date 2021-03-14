#include <string>
#include <queue>
#include <vector>

using namespace std;

int solution(vector<int> priorities, int location) {
    int answer = 0;
    
    priority_queue<int> pq;
    queue<int> q;
    
    for(int i = 0; i < priorities.size(); i++) {
        pq.push(priorities[i]);
        q.push(i);
    }
    
    while(q.size()) {
        answer++;
        while(pq.top() != priorities[q.front()]) {
            q.push(q.front());
            q.pop();
        }
        pq.pop();
        if(q.front() == location) {
            return answer;
        }
        q.pop();
    }
    
    return answer;
}
