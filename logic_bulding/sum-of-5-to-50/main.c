#include <stdio.h>
int main() {
    int i,sum = 0;
    for(i=5;i<51;i++) {
        sum = sum + i;
    }
    printf("%d is sum of 5 to 50",sum);
    return 0;
}
