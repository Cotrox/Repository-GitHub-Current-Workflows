#include <stdio.h>

int main() {
    int a; int b;
    a = 3; b = 7;
    int max = maxMin(a, b, 1);
    int min = maxMin(a, b, 0);

    printf("Il valore massimo è %d\nIl valore minimo è %d", max, min);

    return 0;
}

// int a : Primo valore
// int b : Secondo valore
// int flag : Se 1 allora MAX altrimenti MIN
int maxMin(int a, int b, int flag) {
    if(flag == 1) {
        if(a > b) {
            return a;
        } else {
            return b;
        }
    } else {
        if(a > b) {
            return b;
        } else {
            return a;
        }
    }
}