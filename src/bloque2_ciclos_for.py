"""
Bloque 2: Ciclos for, Acumuladores y Matrices (Retos 06 al 10)
"""


def reto_06(N: int, m1: int, m2: int):
    suma = 0
    for i in range(1, N):
        div_m1 = (i % m1 == 0)
        div_m2 = (i % m2 == 0)
        if (div_m1 or div_m2) and not (div_m1 and div_m2):
            suma += i
    return suma


def reto_07(N: int, d: int):
    contador = 0
    for i in range(1, N + 1):
        actual = i
        while actual > 0:
            ultimo_digito = actual % 10
            if ultimo_digito == d:
                contador += 1
            actual = actual // 10
    return contador


def reto_08(n: int):
    factorial = 1
    for i in range(1, n + 1):
        factorial *= i

    ceros_finales = 0
    potencia_5 = 5
    while n // potencia_5 > 0:
        ceros_finales += n // potencia_5
        potencia_5 *= 5

    return (factorial, ceros_finales)


def reto_09(numeros: list):
    minimo = numeros[0]
    maximo = numeros[0]
    suma = 0
    pares = 0

    for num in numeros:
        if num < minimo:
            minimo = num
        if num > maximo:
            maximo = num
        suma += num
        if num % 1 == 0 and num % 2 == 0:
            pares += 1

    media = round(suma / len(numeros), 2)
    return {'min': minimo, 'max': maximo, 'media': media, 'pares': pares}


def reto_10(n: int, k: int):
    matriz = []
    for i in range(1, n + 1):
        fila = []
        for j in range(1, n + 1):
            producto = i * j
            if producto % k == 0:
                fila.append(0)
            else:
                fila.append(producto)
        matriz.append(fila)
    return matriz
