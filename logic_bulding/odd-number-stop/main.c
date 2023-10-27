#include<stdio.h>
int main() {
    int n,i,j = 0;
    printf("Enter a number : ");
    scanf("%d", &n);
    
    for(i=0;i<100;i++) {
        if(i==(n-1)) {
            if((n%2)!=0) {
                j = 1;
                break;
            }
        }
    }
    if(j==0)
        printf("%d is even number", n);
    else if(j==1)
        printf("%d is odd number", n);
    else
        printf("Wrong input");
    return 0;
}