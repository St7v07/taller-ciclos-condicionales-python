import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.bloque4_avanzados import reto_16, reto_17, reto_18, reto_19, reto_20

# === PRUEBAS UNITARIAS AUTOMATIZADAS (RETOS 16 AL 20) ===
assert reto_16(20) == [2, 3, 5, 7, 11, 13, 17, 19]
assert reto_16(10) == [2, 3, 5, 7]
print('✅ Reto 16 Superado con éxito!')

assert reto_17(12) == (3, 4, 5)
assert reto_17(1000) == (200, 375, 425)
print('✅ Reto 17 Superado con éxito!')

magico_3 = [[8, 1, 6], [3, 5, 7], [4, 9, 2]]
no_magico = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
assert reto_18(magico_3) == True
assert reto_18(no_magico) == False
print('✅ Reto 18 Superado con éxito!')

assert reto_19(19) == True
assert reto_19(7) == True
assert reto_19(4) == False
assert reto_19(2) == False
print('✅ Reto 19 Superado con éxito!')

assert reto_20(20) == [(3, 5), (5, 7), (11, 13), (17, 19)]
assert reto_20(10) == [(3, 5), (5, 7)]
print('✅ Reto 20 MAESTRO Superado con éxito!')
