"""
Bloque 3: Ciclos while y Metodos Iterativos (Retos 11 al 15)
"""


def reto_11(n: int):
    pasos = 0
    max_valor = n
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        pasos += 1
        if n > max_valor:
            max_valor = n
    return (pasos, max_valor)


def reto_12(a: int, b: int):
    x = a
    y = b
    while y != 0:
        residuo = x % y
        x = y
        y = residuo
    mcd = x
    mcm = (a * b) // mcd
    return (mcd, mcm)


def reto_13(n: int):
    if n < 0:
        return False
    original = n
    invertido = 0
    while n > 0:
        digito = n % 10
        invertido = (invertido * 10) + digito
        n = n // 10
    return invertido == original


def reto_14(S: float, epsilon: float = 1e-6):
    if S == 0:
        return 0.0
    x = S / 2.0
    while True:
        x_siguiente = 0.5 * (x + (S / x))
        diferencia = x_siguiente - x
        if diferencia < 0:
            diferencia = -diferencia
        if diferencia < epsilon:
            return round(x_siguiente, 5)
        x = x_siguiente


def reto_15(m_inicial: float, m_limite: float):
    periodos = 0
    masa = m_inicial
    while masa >= m_limite:
        masa = masa / 2.0
        periodos += 1
    return (periodos, round(masa, 4))
