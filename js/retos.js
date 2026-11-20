/**
 * Logica Algoritmica: 20 Retos de Ciclos, Condicionales y Operadores Logicos
 */

// --- BLOQUE 1: CONDICIONALES Y OPERADORES LOGICOS ---

export function reto01(edad, esPico) {
  if (!Number.isInteger(edad) || edad < 0) {
    throw new Error("La edad debe ser un entero mayor o igual a 0.");
  }
  let tarifa = 10000.0;
  if (esPico) {
    tarifa = tarifa * 1.20;
  }
  if (edad < 12 || edad >= 65) {
    tarifa = tarifa * 0.50;
  }
  return Number(tarifa.toFixed(2));
}

export function reto02(a, b, c) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    throw new Error("Ingresa los tres lados del triángulo.");
  }
  if (!(a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a))) {
    return "NO ES TRIANGULO";
  }
  if (a === b && b === c) {
    return "EQUILATERO";
  } else if (a === b || a === c || b === c) {
    return "ISOSCELES";
  } else {
    return "ESCALENO";
  }
}

export function reto03(pwdOk, otpOk, bloqueado, ipExtranjera, biometria) {
  const credencialesBase = pwdOk && otpOk && (!bloqueado);
  const validacionIp = (!ipExtranjera) || biometria;
  return credencialesBase && validacionIp;
}

export function reto04(anio) {
  if (!Number.isInteger(anio) || anio <= 0) {
    throw new Error("Ingresa un año entero positivo.");
  }
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

export function reto05(a, b, c) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    throw new Error("Ingresa los tres coeficientes.");
  }
  if (a === 0) return "LINEAL";
  const delta = (b * b) - (4 * a * c);
  if (delta > 0) return "DOS_REALES";
  if (delta === 0) return "RAIZ_DOBLE";
  return "COMPLEJAS";
}

// --- BLOQUE 2: CICLOS FOR, ACUMULADORES Y MATRICES ---

export function reto06(N, m1, m2) {
  if (!Number.isInteger(N) || !Number.isInteger(m1) || !Number.isInteger(m2) || m1 <= 0 || m2 <= 0) {
    throw new Error("N, m1 y m2 deben ser enteros positivos.");
  }
  let suma = 0;
  for (let i = 1; i < N; i++) {
    const divM1 = (i % m1 === 0);
    const divM2 = (i % m2 === 0);
    if ((divM1 || divM2) && !(divM1 && divM2)) {
      suma += i;
    }
  }
  return suma;
}

export function reto07(N, d) {
  if (!Number.isInteger(N) || N < 1 || N > 1000000) {
    throw new Error("N debe estar entre 1 y 1.000.000.");
  }
  if (!Number.isInteger(d) || d < 0 || d > 9) {
    throw new Error("El dígito d debe estar entre 0 y 9.");
  }
  let contador = 0;
  for (let i = 1; i <= N; i++) {
    let actual = i;
    while (actual > 0) {
      if (actual % 10 === d) {
        contador++;
      }
      actual = Math.floor(actual / 10);
    }
  }
  return contador;
}

export function reto08(n) {
  if (!Number.isInteger(n) || n < 0 || n > 200) {
    throw new Error("Ingresa un entero entre 0 y 200.");
  }
  let factorial = 1n;
  for (let i = 1n; i <= BigInt(n); i++) {
    factorial *= i;
  }

  let cerosFinales = 0;
  let potencia5 = 5;
  while (Math.floor(n / potencia5) > 0) {
    cerosFinales += Math.floor(n / potencia5);
    potencia5 *= 5;
  }
  return { factorial: factorial.toString(), cerosFinales };
}

export function reto09(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("Ingresa al menos un número válido separado por comas.");
  }
  let minimo = numeros[0];
  let maximo = numeros[0];
  let suma = 0;
  let pares = 0;

  for (const num of numeros) {
    if (num < minimo) minimo = num;
    if (num > maximo) maximo = num;
    suma += num;
    if (num % 1 === 0 && num % 2 === 0) {
      pares++;
    }
  }

  const media = Number((suma / numeros.length).toFixed(2));
  return { min: minimo, max: maximo, media, pares };
}

export function reto10(n, k) {
  if (!Number.isInteger(n) || n < 1 || n > 15) {
    throw new Error("El tamaño N debe estar entre 1 y 15.");
  }
  if (!Number.isInteger(k) || k <= 0) {
    throw new Error("El divisor k debe ser un entero positivo.");
  }
  const matriz = [];
  for (let i = 1; i <= n; i++) {
    const fila = [];
    for (let j = 1; j <= n; j++) {
      const producto = i * j;
      fila.push(producto % k === 0 ? 0 : producto);
    }
    matriz.push(fila);
  }
  return matriz;
}

// --- BLOQUE 3: CICLOS WHILE Y METODOS ITERATIVOS ---

export function reto11(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("El número inicial debe ser un entero positivo (>= 1).");
  }
  let pasos = 0;
  let maxValor = n;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    pasos++;
    if (n > maxValor) {
      maxValor = n;
    }
  }
  return { pasos, maxValor };
}

export function reto12(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
    throw new Error("Ambos números deben ser enteros positivos.");
  }
  let x = a;
  let y = b;
  while (y !== 0) {
    const residuo = x % y;
    x = y;
    y = residuo;
  }
  const mcd = x;
  const mcm = (a * b) / mcd;
  return { mcd, mcm };
}

export function reto13(n) {
  if (!Number.isInteger(n)) {
    throw new Error("Ingresa un número entero.");
  }
  if (n < 0) return false;
  const original = n;
  let invertido = 0;
  while (n > 0) {
    const digito = n % 10;
    invertido = (invertido * 10) + digito;
    n = Math.floor(n / 10);
  }
  return invertido === original;
}

export function reto14(S, epsilon = 1e-6) {
  if (!Number.isFinite(S) || S < 0) {
    throw new Error("Ingresa un número mayor o igual a 0.");
  }
  if (S === 0) return 0.0;
  let x = S / 2.0;
  while (true) {
    const xSiguiente = 0.5 * (x + (S / x));
    let diferencia = xSiguiente - x;
    if (diferencia < 0) diferencia = -diferencia;
    if (diferencia < epsilon) {
      return Number(xSiguiente.toFixed(5));
    }
    x = xSiguiente;
  }
}

export function reto15(mInicial, mLimite) {
  if (!Number.isFinite(mInicial) || !Number.isFinite(mLimite) || mInicial <= 0 || mLimite <= 0) {
    throw new Error("Las masas deben ser mayores a 0.");
  }
  let periodos = 0;
  let masa = mInicial;
  while (masa >= mLimite) {
    masa = masa / 2.0;
    periodos++;
  }
  return { periodos, masaResidual: Number(masa.toFixed(4)) };
}

// --- BLOQUE 4: ALGORITMOS INTEGRADORES ---

export function reto16(N) {
  if (!Number.isInteger(N) || N < 2 || N > 10000) {
    throw new Error("Ingresa un entero entre 2 y 10.000.");
  }
  const primos = [];
  for (let p = 2; p <= N; p++) {
    let esPrimo = true;
    let d = 2;
    while (d * d <= p) {
      if (p % d === 0) {
        esPrimo = false;
        break;
      }
      d++;
    }
    if (esPrimo) primos.push(p);
  }
  return primos;
}

export function reto17(S) {
  if (!Number.isInteger(S) || S < 3 || S > 5000) {
    throw new Error("Ingresa una suma entera entre 3 y 5.000.");
  }
  for (let a = 1; a <= Math.floor(S / 3); a++) {
    for (let b = a + 1; b <= Math.floor((S - a) / 2); b++) {
      const c = S - a - b;
      if (b < c && (a * a + b * b === c * c)) {
        return [a, b, c];
      }
    }
  }
  return null;
}

export function reto18(matriz) {
  const n = matriz.length;
  if (n === 0) return false;

  const constanteMagica = (n * (n * n + 1)) / 2;
  const totalCeldas = n * n;
  const vistos = new Array(totalCeldas + 1).fill(false);

  for (let i = 0; i < n; i++) {
    if (matriz[i].length !== n) return false;
    let sumaFila = 0;
    for (let j = 0; j < n; j++) {
      const val = matriz[i][j];
      if (!Number.isInteger(val) || val < 1 || val > totalCeldas || vistos[val]) {
        return false;
      }
      vistos[val] = true;
      sumaFila += val;
    }
    if (sumaFila !== constanteMagica) return false;
  }

  for (let j = 0; j < n; j++) {
    let sumaCol = 0;
    for (let i = 0; i < n; i++) {
      sumaCol += matriz[i][j];
    }
    if (sumaCol !== constanteMagica) return false;
  }

  let diagPrincipal = 0;
  let diagSecundaria = 0;
  for (let i = 0; i < n; i++) {
    diagPrincipal += matriz[i][i];
    diagSecundaria += matriz[i][n - 1 - i];
  }

  return diagPrincipal === constanteMagica && diagSecundaria === constanteMagica;
}

export function reto19(n) {
  if (!Number.isInteger(n) || n <= 0) return false;
  const visitados = [];
  while (n !== 1 && !visitados.includes(n)) {
    visitados.push(n);
    let sumaCuadrados = 0;
    let temp = n;
    while (temp > 0) {
      const digito = temp % 10;
      sumaCuadrados += digito * digito;
      temp = Math.floor(temp / 10);
    }
    n = sumaCuadrados;
  }
  return n === 1;
}

export function reto20(N) {
  if (!Number.isInteger(N) || N > 10000) {
    throw new Error("Ingresa un entero máximo de 10.000.");
  }
  if (N < 5) return [];

  const esPrimo = new Array(N + 1).fill(true);
  esPrimo[0] = false;
  esPrimo[1] = false;

  let p = 2;
  while (p * p <= N) {
    if (esPrimo[p]) {
      for (let multiplo = p * p; multiplo <= N; multiplo += p) {
        esPrimo[multiplo] = false;
      }
    }
    p++;
  }

  const gemelos = [];
  for (let i = 2; i <= N - 2; i++) {
    if (esPrimo[i] && esPrimo[i + 2]) {
      gemelos.push(`(${i}, ${i + 2})`);
    }
  }
  return gemelos;
}
