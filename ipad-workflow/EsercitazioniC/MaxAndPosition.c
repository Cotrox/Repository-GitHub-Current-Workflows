#include <stdio.h>
#include <stdlib.h>

// Funzione corretta per trovare il valore massimo e la sua posizione
void findMaxAndPos(int arr[], int dim, int *max, int *pos) {
    for(int i = 1; i < dim; i++) { // Scorri Vettore
        if(arr[i] > *max) { // Se il valore corrente è maggiore di quello attualmente salvato
            *max = arr[i]; // allora aggiorno il valore
            *pos = i; // e la sua posizione
        } // altrimenti non faccio nulla!
    }
}

int main() {
    // --- Lunghezza del Vettore
    int n; // Var Lunghezza Vettore
    printf("Inserisci dimensione del vettore: "); //-- Notifica a Schermo
    scanf("%d", &n); // Assegno Digit fornito andando all'indirizzo &n di memoria

    // --- Allocazione Dinamica del Vettore
    int *arr = (int *) malloc(n * sizeof(int)); // Allochiamo n posizioni in memoria
    if(arr == NULL) { // Se arr NULL
        printf("Errore di allocazione in memoria!\n"); // Notifica a Schermo
        return 1; // Conclusione: Errore
    }

    // --- Componi Vettore
    printf("Inserisci gli elementi del vettore:\n"); // Notifica a Schermo
    for(int i = 0; i < n; i++) // Scorro il vettore
        scanf("%d", &arr[i]); // Assegno il digit in posizione i (trovando il suo indirizzo in memoria)

    // --- Dichiarazioni Finali
    int max, pos; // max per il valore massimo e pos per la sua posizione
    max = arr[0]; // Valore del primo elemento
    pos = 0; // Posizione del primo elemento
    findMaxAndPos(arr, n, &max, &pos); // Trova MaxValue e la sua Position aggiornando le relative var
    printf("Il valore massimo del vettore è %d in posizione %d\n", max, pos); // Notifica a Schermo

    // --- Libera memoria allocata
    free(arr); // Libera memoria

    return 0; // Conclusione: Conferma
}