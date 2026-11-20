"""
Bloque 1: Estructuras Condicionales y Operadores Logicos (Retos 01 al 05)
"""


def reto_01(edad: int, es_pico: bool):
    tarifa = 10000.0
    if es_pico:
        tarifa = tarifa * 1.20
    if edad < 12 or edad >= 65:
        tarifa = tarifa * 0.50
    return round(tarifa, 2)


def reto_02(a: float, b: float, c: float):
    if not (a > 0 and b > 0 and c > 0 and (a + b > c) and (a + c > b) and (b + c > a)):
        return 'NO ES TRIANGULO'
    if a == b and b == c:
        return 'EQUILATERO'
    elif a == b or a == c or b == c:
        return 'ISOSCELES'
    else:
        return 'ESCALENO'


def reto_03(pwd_ok: bool, otp_ok: bool, bloqueado: bool, ip_extranjera: bool, biometria: bool):
    credenciales_base = pwd_ok and otp_ok and (not bloqueado)
    validacion_ip = (not ip_extranjera) or biometria
    if credenciales_base and validacion_ip:
        return True
    else:
        return False


def reto_04(anio: int):
    if (anio % 4 == 0 and anio % 100 != 0) or (anio % 400 == 0):
        return True
    else:
        return False


def reto_05(a: float, b: float, c: float):
    if a == 0:
        return 'LINEAL'
    delta = (b ** 2) - (4 * a * c)
    if delta > 0:
        return 'DOS_REALES'
    elif delta == 0:
        return 'RAIZ_DOBLE'
    else:
        return 'COMPLEJAS'
