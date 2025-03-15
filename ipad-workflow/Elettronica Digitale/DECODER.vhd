library IEEE;
use IEEE.std_logic_1164.all;

entity ENCODER is
    port(
        I : in std_logic_vector(3 downto 0); -- n Ingressi (4)
        O : out std_logic_vector(1 downto 0); -- log(n) Uscite (2)
    );
end ENCODER;
    
architecture BEHAVIOURAL of ENCODER is
    begin
        process(I)
            begin
                case I is
                    when "0001" => -- Se I(0)
                        O <= "00"; -- o = 0
                    when "0010" => -- Se I(1)
                        O <= "01"; -- o = 1
                    when "0100" => -- Se I(2)
                        O <= "10"; -- o = 2
                    when "1000" => -- Se I(3)
                        O <= "11"; -- o = 3
                    when others => -- Altrimenti
                        O <= "xx"; -- Nessun uscita valida!
                end case;
        end process;
end BEHAVIOURAL;