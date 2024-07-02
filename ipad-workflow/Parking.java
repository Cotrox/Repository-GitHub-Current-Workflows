public interface Parking {
    int maxParkingSpaces(); // Capienza Massima del Parcheggio
    int freeParkingSpaces(); // Numero di Posti Liberi. -1 Se non disponibili.
    int Ticket enter(Ticket ticket); // Ritorna un Ticket per l'uscita e occupa il primo posto disponibile
    void payment(Ticket ticket); // Calcola il costo e lo annota sul Ticket
    boolean exit(Ticket ticket); // Libera il posto occupato dal Ticket
} // Parking

