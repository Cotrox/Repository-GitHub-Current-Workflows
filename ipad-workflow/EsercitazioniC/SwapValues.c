#include <stdio.h>

// SEZIONE DICHIARATIVA
void swap(int* p1, int* p2);

// MAIN
int main() {
    int a;
    int b;

    scanf("%d", &a);
    scanf("%d", &b);

    printf("a=%d e b=%d", *p1, *p2);

    swap(&a, &b);

    printf("a=%d e b=%d", *p1, *p2);
}

// SEZIONE IMPLEMENTATIVA
void swap(int* p1, int* p2) {
    int temp = *p1;
    *p1 = *p2;
    *p2 = temp;
}