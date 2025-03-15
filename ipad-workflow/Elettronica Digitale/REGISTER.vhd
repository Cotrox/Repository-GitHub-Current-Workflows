library IEEE;
use IEEE.std_logic_1164.all;

entity REGISTER is
    Port ( clk, pre, D : in  STD_LOGIC;
        Q : out  STD_LOGIC
    );
end REGISTER;

architecture Behavioral of REGISTER is
    begin
        process(clk, pre)
            begin
                if pre = '1' then
                    Q <= '1';
                elsif rising_edge(clk) then
                    Q <= D;
                end if;
        end process;
end Behavioral;