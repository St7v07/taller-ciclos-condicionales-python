import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.bloque2_ciclos_for import reto_06, reto_07, reto_08, reto_09, reto_10

# === PRUEBAS UNITARIAS AUTOMATIZADAS (RETOS 06 AL 10) ===
assert reto_06(16, 3, 5) == (3 + 6 + 9 + 12 + 5 + 10)
assert reto_06(10, 2, 3) == (2 + 4 + 8 + 3 + 9)
print('✅ Reto 06 Superado con éxito!')

assert reto_07(30, 1) == 13, 'Fallo conteo dígito 1 al 30'
assert reto_07(100, 5) == 20, 'Fallo conteo dígito 5 al 100'
print('✅ Reto 07 Superado con éxito!')

assert reto_08(5) == (120, 1)
assert reto_08(10) == (3628800, 2)
assert reto_08(25) == (15511210043330985984000000, 6)
print('✅ Reto 08 Superado con éxito!')

res = reto_09([10, 5, 8, 20, 3, 12])
assert res['min'] == 3 and res['max'] == 20 and res['media'] == 9.67 and res['pares'] == 4
print('✅ Reto 09 Superado con éxito!')

esperada = [[1, 0, 3], [0, 0, 0], [3, 0, 9]]
assert reto_10(3, 2) == esperada
print('✅ Reto 10 Superado con éxito!')
