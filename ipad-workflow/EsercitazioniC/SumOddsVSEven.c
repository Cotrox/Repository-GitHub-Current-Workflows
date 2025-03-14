#include <stdio.h> // Lib: IO
#include <stdbool.h> // Lib: Introduzione del Tipo Boolean in C

// Passiamo rferimento al vettore 
// Passiamo lunghezza del vettore
bool sommaPariMaggioreDispari(int* vettore, int lunghezza) {
    int sommaPari = 0; // Somma dei numeri pari
    int sommaDispari = 0; // Somma dei numeri dispari

    for (int i = 0; i < lunghezza; i++) { // Scorro il Vettore
        if (vettore[i] % 2 == 0) { // Se il valore corrente è Pari (Even)...
            sommaPari += vettore[i]; // aggiungo il valore alla somma dei valori pari
        } else { // Se invece è dispari, allora...
            sommaDispari += vettore[i]; // aggiungo il valore alla somma dei valori dispari
        }
    }

    // Controlla se Pari > Dispari
    return sommaPari > sommaDispari; // Ci sono più numeri pari che dispari
}

int main() {
    int vettore[] = {1, 2, 3, 4, 5, 6}; // Vettore Allocato Staticamnte
    // Se V è Statico posso ottenere in questo modo la sua dimensione (Lunghezza)
    // sizeof(vettore) restituisce la dimensione in byte di tutto il vettore
    // sizeof(vettore[0]) restituisce la dimensione in byte del singolo elemento
    // Dividendo il totale per il singolo nottengo il numero preciso di elementi nel vettore
    int lunghezza = sizeof(vettore) / sizeof(vettore[0]); // Numero di Elementi del Vettore

    if (sommaPariMaggioreDispari(vettore, lunghezza)) {
        // Se true allora... (o 1 senza stdbool)
        printf("La somma dei numeri pari è maggiore della somma dei numeri dispari.\n");
    } else {
        // Se false allora... (o 0 senza stdbool)
        printf("La somma dei numeri pari non è maggiore della somma dei numeri dispari.\n");
    }

    return 0; // Esito Positivo
}

/* Volendo potremmo non introdurre bool ma usare 0 ed 1 */