entity DEMUX is
    port(
        I, control : in std_logic;
        a, b : out std_logic;
    );
end DEMUX;
    
architecture BEHAVIOURAL of DEMUX is
    begin
        if control = '0' then
            a <= I;
        else 
            b <= I;
        end if;
        
end BEHAVIOURAL;