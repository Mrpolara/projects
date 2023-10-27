#include <stdio.h>
#include <ctype.h>
int main(){
    int i=0,k,prev;
    char ch,j,str[10];
    
    printf("Enter a string : ");
    scanf("%s", &str);
    
    ch = tolower(str[i]);
    if(str[i]==ch)
        prev = 0;
    else
        prev = 1;
    
    while(str[i]!='\0'){
        j = tolower(str[i]);
        if (j == str[i]){
            if(prev==0){
                i++;
                continue;
            }
            else{
                prev=-1;
                break;
            }
        }
        j = toupper(str[i]);
        if(j == str[i]){
            if(prev==1){
                i++;
                continue;
            }
            else{
                prev=-1;
                break;
            }
        }
        i++;
    }
    
    if(prev==-1)
        printf("%s is in mixedcase", str);
    if(prev==0)
        printf("%s is in lowercase", str);
    if(prev==1)
        printf("%s is in uppercase", str);
    return 0;
}
