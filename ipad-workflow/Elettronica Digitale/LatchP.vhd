library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity LatchP is
    Port ( D, clk : in  STD_LOGIC;
           Q : out  STD_LOGIC);
end LatchP;

architecture Behavioral of LatchP is
    begin
        process(clk, D)
            begin
                if(clk = '1') then -- Se il Clock è attivo (1 Poichè Latch Positivo, 0 Se Negativo)
                    Q <= D; -- Allora assegno il valore d'ingresso D all'uscita Q
                end if;
        end process;
end Behavioral;