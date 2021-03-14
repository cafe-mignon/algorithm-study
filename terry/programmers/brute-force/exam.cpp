#include <string>
#include <vector>

using namespace std;

vector<int> f = {1,2,3,4,5};
vector<int> s = {2,1,2,3,2,4,2,5};
vector<int> t = {3,3,1,1,2,2,4,4,5,5};

vector<int> solution(vector<int> answers) {
    vector<int> answer;
    
    vector<int> score(3,0);
    
    for(int i = 0; i < answers.size(); i++) {
        int a = answers[i];
        if(f[i%f.size()] == a) score[0]++;
        if(s[i%s.size()] == a) score[1]++;
        if(t[i%t.size()] == a) score[2]++;
    }
    
    int max = 0;
    for(int i = 0; i < 3; i++) {
        max = max > score[i] ? max : score[i];
    }
    
    for(int i = 0; i < 3; i++) {
        if(score[i] == max) answer.push_back(i+1);
    }
    
    return answer;
}

