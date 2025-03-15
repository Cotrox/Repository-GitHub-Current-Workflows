entity MUX is
    port(
        a, b, control : in std_logic;
        o : out std_logic;
    );
end MUX;
    
architecture BEHAVIOURAL of MUX is
    signal p, g : bit;    

    begin
        o <= a when control = '0' else b;
        
end BEHAVIOURAL;