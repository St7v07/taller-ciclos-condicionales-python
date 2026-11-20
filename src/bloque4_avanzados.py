"""
Bloque 4: Algoritmos Integradores y Teoria de Numeros (Retos 16 al 20)
"""


def reto_16(N: int):
    primos = []
    for p in range(2, N + 1):
        es_primo = True
        d = 2
        while d * d <= p:
            if p % d == 0:
                es_primo = False
                break
            d += 1
        if es_primo:
            primos.append(p)
    return primos


def reto_17(S: int):
    for a in range(1, (S // 3) + 1):
        for b in range(a + 1, ((S - a) // 2) + 1):
            c = S - a - b
            if b < c and (a * a + b * b == c * c):
                return (a, b, c)
    return None


def reto_18(matriz: list):
    n = len(matriz)
    if n == 0:
        return False

    constante_magica = (n * (n * n + 1)) // 2
    total_celdas = n * n
    vistos = [False] * (total_celdas + 1)

    for i in range(n):
        if len(matriz[i]) != n:
            return False
        suma_fila = 0
        for j in range(n):
            val = matriz[i][j]
            if val < 1 or val > total_celdas or vistos[val]:
                return False
            vistos[val] = True
            suma_fila += val
        if suma_fila != constante_magica:
            return False

    for j in range(n):
        suma_col = 0
        for i in range(n):
            suma_col += matriz[i][j]
        if suma_col != constante_magica:
            return False

    diag_principal = 0
    diag_secundaria = 0
    for i in range(n):
        diag_principal += matriz[i][i]
        diag_secundaria += matriz[i][n - 1 - i]

    if diag_principal != constante_magica or diag_secundaria != constante_magica:
        return False

    return True


def reto_19(n: int):
    if n <= 0:
        return False
    visitados = []
    while n != 1 and n not in visitados:
        visitados.append(n)
        suma_cuadrados = 0
        temp = n
        while temp > 0:
            digito = temp % 10
            suma_cuadrados += digito * digito
            temp = temp // 10
        n = suma_cuadrados
    return n == 1


def reto_20(N: int):
    if N < 5:
        return []

    es_primo = [True] * (N + 1)
    es_primo[0] = False
    es_primo[1] = False

    p = 2
    while p * p <= N:
        if es_primo[p]:
            for multiplo in range(p * p, N + 1, p):
                es_primo[multiplo] = False
        p += 1

    gemelos = []
    for i in range(2, N - 1):
        if es_primo[i] and es_primo[i + 2]:
            gemelos.append((i, i + 2))
    return gemelos
