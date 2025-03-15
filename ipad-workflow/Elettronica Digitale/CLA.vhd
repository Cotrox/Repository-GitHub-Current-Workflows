LIBRARY IEEE;
USE IEEE.std_logic_1164.ALL;

ENTITY CLA IS
    PORT (
        A, B  : IN  STD_LOGIC_VECTOR(3 DOWNTO 0);
        Cin   : IN  STD_LOGIC;
        Sum   : OUT STD_LOGIC_VECTOR(3 DOWNTO 0);
        Cout  : OUT STD_LOGIC
    );
END CLA;

ARCHITECTURE Behavioral OF CLA IS
    SIGNAL G, P  : STD_LOGIC_VECTOR(3 DOWNTO 0);  -- Generate & Propagate
    SIGNAL C     : STD_LOGIC_VECTOR(4 DOWNTO 0);  -- Carry bits (da C0 a C4)
BEGIN
    -- Carry-In assegnato al primo bit
    C(0) <= Cin;

    -- Generate e Propagate
    G <= A AND B;
    P <= A XOR B;

    -- Carry Look-Ahead Logic
    C(1) <= G(0) OR (P(0) AND C(0));
    C(2) <= G(1) OR (P(1) AND C(1));
    C(3) <= G(2) OR (P(2) AND C(2));
    C(4) <= G(3) OR (P(3) AND C(3));

    -- Somma finale
    Sum <= P XOR C(3 DOWNTO 0);

    -- Carry-Out finale
    Cout <= C(4);

END Behavioral;
