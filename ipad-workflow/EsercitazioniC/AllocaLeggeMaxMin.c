#include <stdio.h> // Per adoperare Standard IO Functions come scanf
#include <stdlib.h> // Per adoperare funzioni dalla StandardLib come Malloc e Free

void find_min_max(int *arr, int n, int *min, int *max) {
    *min = arr[0]; *max = arr[0]; // Prendo *min e *max assegnando inizialmente valore iniziale
    for (int i = 1; i < n; i++) { // Scorro il vettore dal valore prossimo al primo a n
        if (arr[i] < *min) { // Se il valore corrente è < di quello contenuto in min (da *min)
            *min = arr[i]; // allora riassegno il nuovo sovrascrivendo
        } // altrimenti non faccio nulla
        if (arr[i] > *max) { // Se il valore corrente è > di quello contenuto in max (da *max)
            *max = arr[i]; // allora riassegno il nuovo sovrascrivendo
        } // altrimenti non faccio nulla
    }
}

int main() {
    // --- Lunghezza del Vettore
    int n; // Var per assegnare la dimensione del vettore
    printf("Inserisci la dimensione del vettore: "); // Notifica a Schermo
    scanf("%d", &n); // Assegna ad N (trovata in memoria) il valore numerico (digit) passato

    // --- Allocazione Dinamica del Vettore
    int *arr = (int *)malloc(n * sizeof(int)); // alloca dimensione n (lunghezza del vettore)
    if (arr == NULL) { // Se la var arr è null, allora...
        printf("Errore di allocazione della memoria.\n"); // Notifica a Schermo
        return 1; // Esito Negativo (Errore)
    }

    printf("Inserisci gli elementi del vettore:\n"); // Notifica a Schermo
    for (int i = 0; i < n; i++) { // Scorro il vettore (concettualmente) per i < n
        scanf("%d", &arr[i]); // Posiziona il digit passato in posizione i trovandola in memo
    }

    int min, max; // Dichiara le var min/max
    find_min_max(arr, n, &min, &max); // Elabora il vettore e ottieni min e max a schermo

    printf("Valore minimo: %d\n", min); // Notifica a Schermo
    printf("Valore massimo: %d\n", max); // Notifica a Schermo

    // --- Libero la Memoria Allocata
    // (Riutilizzabile d'ora in poi)
    free(arr); // Libera

    return 0; // Esito Positivo (Conferma)
}