class Solution {
public:
    
    bool check( bool candi[9][9][10], int x, int y) {
        bool flag = false;
        for(int l = 1; l <= 9; l++) 
            if(candi[x][y][l]) flag = true;
        return flag;
    }
    
    bool isValidSudoku(vector<vector<char>>& board) {
        
        bool candi[9][9][10];
        
        memset(candi,true,9*9*10);
        
        for(int i = 0; i < 9; i++) {
            for(int j = 0; j < 9; j++) {
                if(board[i][j] != '.') {
                    cout<<"i "<<i<<" j " <<j<<endl;
                    int c = board[i][j] - '0';
                    
                    if(!candi[i][j][c]) return false;
                    for(int k = 1; k <=9; k++) {
                        if(k!=c) candi[i][j][k] = false;
                    }
                    
                    // row check
                    for(int k = 0; k < 9; k++) {
                        if(k!=j) candi[i][k][c] = false;
                        if(board[i][k]!='.'&&!check(candi,i,k)) return false;
                    }
                    // cout<<"end row"<< endl;
                    // column check
                    for(int k = 0; k < 9; k++) {
                        if(k!=i) candi[k][j][c] = false;
                        if(board[k][j]!='.'&&!check(candi,k,j)) return false;
                    }
                    // cout<<"end col"<< endl;
                    // box check
                    int x_bias = i/3;
                    int y_bias = j/3;
                    for(int k = 0; k < 3; k++) {
                        for(int l = 0; l < 3; l++) {
                            int nx = 3*x_bias + k;
                            int ny = 3*y_bias + l;
                            
                            if(nx!=i && ny!=j) {
                                candi[nx][ny][c] = false;
                                if(board[nx][ny]!='.'&&!check(candi,nx,ny)) return false;
                            }

                        }
                    }
                    
                    // cout<<"end box"<< endl;
                    
                }
            }
        }
        
        return true;   
    }
};
