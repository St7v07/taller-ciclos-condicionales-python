import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.bloque3_ciclos_while import reto_11, reto_12, reto_13, reto_14, reto_15

# === PRUEBAS UNITARIAS AUTOMATIZADAS (RETOS 11 AL 15) ===
assert reto_11(6) == (8, 16)
assert reto_11(11) == (14, 52)
print('✅ Reto 11 Superado con éxito!')

assert reto_12(48, 18) == (6, 144)
assert reto_12(101, 10) == (1, 1010)
print('✅ Reto 12 Superado con éxito!')

assert reto_13(12321) == True
assert reto_13(12345) == False
assert reto_13(7) == True
assert reto_13(-121) == False
print('✅ Reto 13 Superado con éxito!')

assert reto_14(25.0) == 5.0
assert reto_14(2.0) == 1.41421
assert reto_14(100.0) == 10.0
print('✅ Reto 14 Superado con éxito!')

assert reto_15(100.0, 10.0) == (4, 6.25)
assert reto_15(80.0, 5.0) == (5, 2.5)
print('✅ Reto 15 Superado con éxito!')
