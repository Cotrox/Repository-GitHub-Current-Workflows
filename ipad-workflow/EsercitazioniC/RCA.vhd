entity RCA is
generic (n: ineger := 4); -- Assegno il numero di bit fornito dalla traccia
    port(
        A,B : in std_logic_vector(n-1 downto 0); -- Vettore degli Ingressi
        Cin : in std_logic; -- Valore d'Ingresso
        S   : out std_logic_vector(n downto 0); -- Vettore delle Uscite
    );
end RCA;

architecture BEHAVIOURAL of RCA is
    signal p, g : std_logic_vector(n downto 0); -- P e G come nel FA
    signal carry : std_logic_vector(n+1 downto 0); -- Vettore del Riporto

    begin
        p <= (A(n-1) & A) xor (B(n-1) & B); -- XOR tra A e B dopo averci aggiunto 1 bit
        g <= (A(n-1) & A) and (B(n-1) & B); -- AND tra A e B dopo averci aggiunto 1 bit

        carry(0) <= Cin; -- Inizializzo a 0 il Carry
        carry(n+1 downto 1) <= g or (p and carry(n downto 0)); 

        S <= p xor carry(n downto 0); -- Aggiorno il Return
end BEHAVIOURAL;
