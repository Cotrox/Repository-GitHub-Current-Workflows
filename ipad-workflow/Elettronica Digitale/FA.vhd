entity FA is
    port(
        a, b, Cin : in bit;
        Cout, s : out bit;
    );
end FA;
    
architecture BEHAVIOURAL of FA is
    signal p, g : bit;    

    begin
        p <= a xor b;
        g <= a and b;
        
        Cout <= g or (p and Cin);
        
        s <= p xor Cin;
        
end BEHAVIOURAL;