library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

-- Priorità: Clock -> (Reset -> Set -> Data)

entity LatchPRS is
    Port ( D, clk, reset, set : in  STD_LOGIC;
           Q : out  STD_LOGIC);
end LatchPRS;

architecture Behavioral of LatchPRS is
    begin
        process(clk, D, clr, pre)
            begin
                if(clk = '1') then
                    if(reset = '1') then
                        Q <= '0';
                    elsif(set = '1') then
                        Q <= '1';
                    else
                        Q <= D;
                    end if;
                end if;
        end process;
end Behavioral;