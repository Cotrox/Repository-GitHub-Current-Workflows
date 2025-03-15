library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

-- Priorità: Clear -> Clock -> Data

entity LatchPC is
    Port ( D, clk, clr : in  STD_LOGIC;
           Q : out  STD_LOGIC);
end LatchPC;

architecture Behavioral of LatchPC is
    begin
        process(clk, D, clr)
            begin
                if(clr = '1') then -- Se il Reset è attivo (1 Poichè Latch Positivo, 0 Se Negativo)
                    Q <= '0'; -- Allora assegno 0 all'uscita Q
                else if(clk = '1') then -- Se il Clock è attivo (1 Poichè Latch Positivo, 0 Se Negativo)
                    Q <= D; -- Allora assegno il valore d'ingresso D all'uscita Q
                end if;
        end process;
end Behavioral;