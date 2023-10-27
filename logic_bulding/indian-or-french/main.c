#include<stdio.h>
int main() {
    int cho,citizenship;
    printf("Enter 0 for indian\n");
    printf("Enter 1 for french\n");
    printf("Enter your choice : ");
    scanf("%d",&cho);
    citizenship = isCitizen(cho);
    if(citizenship==0)
        printf("Namaste you are indian");
    else if(citizenship==1)
        printf("Hello you are french");
    else
        printf("You are not citizen");
    return 0;
}
int isCitizen(int choice) {
    if(choice==0)
        return 0;
    else if(choice==1)
        return 1;
    else
        return -1;
}
