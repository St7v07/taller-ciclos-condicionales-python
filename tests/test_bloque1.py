import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.bloque1_condicionales import reto_01, reto_02, reto_03, reto_04, reto_05

# === PRUEBAS UNITARIAS AUTOMATIZADAS (RETOS 01 AL 05) ===
assert reto_01(10, False) == 5000.0, 'Fallo niño en horario normal'
assert reto_01(70, True) == 6000.0, 'Fallo adulto mayor en pico'
assert reto_01(25, True) == 12000.0, 'Fallo adulto en pico'
assert reto_01(30, False) == 10000.0, 'Fallo adulto normal'
print('✅ Reto 01 Superado con éxito!')

assert reto_02(1, 2, 5) == 'NO ES TRIANGULO'
assert reto_02(5, 5, 5) == 'EQUILATERO'
assert reto_02(5, 5, 8) == 'ISOSCELES'
assert reto_02(3, 4, 5) == 'ESCALENO'
print('✅ Reto 02 Superado con éxito!')

assert reto_03(True, True, False, False, False) == True
assert reto_03(True, True, True, False, False) == False
assert reto_03(True, True, False, True, False) == False
assert reto_03(True, True, False, True, True) == True
print('✅ Reto 03 Superado con éxito!')

assert reto_04(2024) == True
assert reto_04(1900) == False
assert reto_04(2000) == True
assert reto_04(2023) == False
print('✅ Reto 04 Superado con éxito!')

assert reto_05(0, 4, 8) == 'LINEAL'
assert reto_05(1, -5, 6) == 'DOS_REALES'
assert reto_05(1, -2, 1) == 'RAIZ_DOBLE'
assert reto_05(1, 1, 1) == 'COMPLEJAS'
print('✅ Reto 05 Superado con éxito!')
