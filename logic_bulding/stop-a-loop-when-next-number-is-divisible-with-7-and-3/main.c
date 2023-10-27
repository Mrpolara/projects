#include<stdio.h>
int main() {
    int n,i=0;
    printf("Enter a number : ");
    scanf("%d",&n);
    
    while((((n+i)%7)!=0)&&(((n+i)%5)!=0))
        i++;
    
    printf("%d is next number from %d which is divisible 7 or 3",n+i,n-i);
    return 0;
}