#include<stdio.h>
int main() {
    int a,b,c;
    printf("Enter three number : ");
    scanf("%d %d %d", &a, &b, &c);
        
    if(a==0 && b==0 && c==0)
        printf("a b c is 0");
    else if(a>b && a>c)
        printf("%d is greater", a);
    else if(b>a && b>c)
        printf("%d is greater", b);
    else if(c>a && c>b)
        printf("%d is greater", c);
    return 0;
}