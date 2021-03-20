#include <string>
#include <vector>
#include <math.h>
#include <algorithm>
#include <iostream>
#include <set>

using namespace std;

set<int> visit;


bool isPrime(int a) {
    if(a == 0 || a == 1) return false;
    for(int i = 2; i < a; i++) {
        if(0 == a%i) return false;
    }
    return true;
}

int vecToInt(vector<int> v) {
    int a = 0;
    int bias = 1;
    for(auto i: v) {
        a += bias * i;
        bias *= 10;
    }
    return a;
}

int countPrime(vector<int> v) {
    int a = 0;
    
    sort(v.begin(), v.end());
    
    do {
        int i = vecToInt(v);
        
        if(visit.find(i) == visit.end()) {
            // cout<<"check " << i << endl;
            if(isPrime(i))
                a++;
            visit.insert(i);
        }
        
    } while (next_permutation(v.begin(), v.end()));
    
    return a;
}

int solution(string numbers) {
    int answer = 0;
    int size = numbers.length();
    for(int i = 1; i <= size; i++) {
        vector<int> select(size,0);
        for(int j = 0; j < i; j++) select[j] = 1;
        
        sort(select.begin(), select.end());
        
        do {
            vector<int> selected;
            
            for(int j = 0; j < size; j++) 
                if(select[j] == 1) selected.push_back(numbers[j] - '0');
            
            answer += countPrime(selected);
            
        } while(next_permutation(select.begin(), select.end()));        
    }
    
    
    
    return answer;
}
