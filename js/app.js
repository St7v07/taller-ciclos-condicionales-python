import {
  reto01, reto02, reto03, reto04, reto05,
  reto06, reto07, reto08, reto09, reto10,
  reto11, reto12, reto13, reto14, reto15,
  reto16, reto17, reto18, reto19, reto20
} from "./retos.js";

document.addEventListener("DOMContentLoaded", () => {
  // Pestañas
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target)?.classList.add("active");
    });
  });

  const mostrarError = (id, err) => {
    document.getElementById(id).innerHTML = `<span class="error-msg">${err.message}</span>`;
  };

  // Reto 01
  document.getElementById("btn-r01")?.addEventListener("click", () => {
    try {
      const edad = parseInt(document.getElementById("r01-edad").value, 10);
      const pico = document.getElementById("r01-pico").value === "true";
      const total = reto01(edad, pico);
      document.getElementById("res-r01").innerHTML = `Total a pagar: <strong>$${total.toLocaleString("es-CO")}</strong>`;
    } catch (e) { mostrarError("res-r01", e); }
  });

  // Reto 02
  document.getElementById("btn-r02")?.addEventListener("click", () => {
    try {
      const a = parseFloat(document.getElementById("r02-a").value);
      const b = parseFloat(document.getElementById("r02-b").value);
      const c = parseFloat(document.getElementById("r02-c").value);
      document.getElementById("res-r02").innerHTML = `Clasificación: <strong>${reto02(a, b, c)}</strong>`;
    } catch (e) { mostrarError("res-r02", e); }
  });

  // Reto 03
  document.getElementById("btn-r03")?.addEventListener("click", () => {
    const pwd = document.getElementById("r03-pwd").value === "true";
    const otp = document.getElementById("r03-otp").value === "true";
    const bloq = document.getElementById("r03-bloq").value === "true";
    const ip = document.getElementById("r03-ip").value === "true";
    const bio = document.getElementById("r03-bio").value === "true";
    const ok = reto03(pwd, otp, bloq, ip, bio);
    document.getElementById("res-r03").innerHTML = ok
      ? `Acceso: <strong>CONCEDIDO (True)</strong>`
      : `Acceso: <span class="error-msg"><strong>DENEGADO (False)</strong></span>`;
  });

  // Reto 04
  document.getElementById("btn-r04")?.addEventListener("click", () => {
    try {
      const anio = parseInt(document.getElementById("r04-anio").value, 10);
      const bis = reto04(anio);
      document.getElementById("res-r04").innerHTML = `Año ${anio}: <strong>${bis ? "ES BISIESTO (True)" : "NO ES BISIESTO (False)"}</strong>`;
    } catch (e) { mostrarError("res-r04", e); }
  });

  // Reto 05
  document.getElementById("btn-r05")?.addEventListener("click", () => {
    try {
      const a = parseFloat(document.getElementById("r05-a").value);
      const b = parseFloat(document.getElementById("r05-b").value);
      const c = parseFloat(document.getElementById("r05-c").value);
      document.getElementById("res-r05").innerHTML = `Tipo de raíces: <strong>${reto05(a, b, c)}</strong>`;
    } catch (e) { mostrarError("res-r05", e); }
  });

  // Reto 06
  document.getElementById("btn-r06")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r06-n").value, 10);
      const m1 = parseInt(document.getElementById("r06-m1").value, 10);
      const m2 = parseInt(document.getElementById("r06-m2").value, 10);
      document.getElementById("res-r06").innerHTML = `Suma exclusiva acumulada: <strong>${reto06(n, m1, m2)}</strong>`;
    } catch (e) { mostrarError("res-r06", e); }
  });

  // Reto 07
  document.getElementById("btn-r07")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r07-n").value, 10);
      const d = parseInt(document.getElementById("r07-d").value, 10);
      document.getElementById("res-r07").innerHTML = `Apariciones del dígito ${d}: <strong>${reto07(n, d)} veces</strong>`;
    } catch (e) { mostrarError("res-r07", e); }
  });

  // Reto 08
  document.getElementById("btn-r08")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r08-n").value, 10);
      const res = reto08(n);
      document.getElementById("res-r08").innerHTML = `Ceros finales: <strong>${res.cerosFinales}</strong><br>${n}! = <strong>${res.factorial}</strong>`;
    } catch (e) { mostrarError("res-r08", e); }
  });

  // Reto 09
  document.getElementById("btn-r09")?.addEventListener("click", () => {
    try {
      const lista = document.getElementById("r09-lista").value
        .split(",")
        .map(x => parseFloat(x.trim()))
        .filter(x => !Number.isNaN(x));
      const res = reto09(lista);
      document.getElementById("res-r09").innerHTML =
        `Mín: <strong>${res.min}</strong> | Máx: <strong>${res.max}</strong> | Media: <strong>${res.media}</strong> | Pares: <strong>${res.pares}</strong>`;
    } catch (e) { mostrarError("res-r09", e); }
  });

  // Reto 10
  document.getElementById("btn-r10")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r10-n").value, 10);
      const k = parseInt(document.getElementById("r10-k").value, 10);
      const matriz = reto10(n, k);
      const htmlFilas = matriz.map(f => `[ ${f.join(", ")} ]`).join("<br>");
      document.getElementById("res-r10").innerHTML = `<strong>${htmlFilas}</strong>`;
    } catch (e) { mostrarError("res-r10", e); }
  });

  // Reto 11
  document.getElementById("btn-r11")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r11-n").value, 10);
      const res = reto11(n);
      document.getElementById("res-r11").innerHTML = `Pasos hasta 1: <strong>${res.pasos}</strong> | Altitud máxima: <strong>${res.maxValor}</strong>`;
    } catch (e) { mostrarError("res-r11", e); }
  });

  // Reto 12
  document.getElementById("btn-r12")?.addEventListener("click", () => {
    try {
      const a = parseInt(document.getElementById("r12-a").value, 10);
      const b = parseInt(document.getElementById("r12-b").value, 10);
      const res = reto12(a, b);
      document.getElementById("res-r12").innerHTML = `MCD: <strong>${res.mcd}</strong> | MCM: <strong>${res.mcm}</strong>`;
    } catch (e) { mostrarError("res-r12", e); }
  });

  // Reto 13
  document.getElementById("btn-r13")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r13-n").value, 10);
      const pal = reto13(n);
      document.getElementById("res-r13").innerHTML = `¿Es palíndromo?: <strong>${pal ? "SÍ (True)" : "NO (False)"}</strong>`;
    } catch (e) { mostrarError("res-r13", e); }
  });

  // Reto 14
  document.getElementById("btn-r14")?.addEventListener("click", () => {
    try {
      const s = parseFloat(document.getElementById("r14-s").value);
      document.getElementById("res-r14").innerHTML = `Raíz aproximada: <strong>${reto14(s)}</strong>`;
    } catch (e) { mostrarError("res-r14", e); }
  });

  // Reto 15
  document.getElementById("btn-r15")?.addEventListener("click", () => {
    try {
      const ini = parseFloat(document.getElementById("r15-ini").value);
      const lim = parseFloat(document.getElementById("r15-lim").value);
      const res = reto15(ini, lim);
      document.getElementById("res-r15").innerHTML = `Períodos: <strong>${res.periodos}</strong> | Masa residual: <strong>${res.masaResidual} g</strong>`;
    } catch (e) { mostrarError("res-r15", e); }
  });

  // Reto 16
  document.getElementById("btn-r16")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r16-n").value, 10);
      const primos = reto16(n);
      document.getElementById("res-r16").innerHTML = `Total (${primos.length}): <strong>[${primos.join(", ")}]</strong>`;
    } catch (e) { mostrarError("res-r16", e); }
  });

  // Reto 17
  document.getElementById("btn-r17")?.addEventListener("click", () => {
    try {
      const s = parseInt(document.getElementById("r17-s").value, 10);
      const terna = reto17(s);
      document.getElementById("res-r17").innerHTML = terna
        ? `Terna pitagórica: <strong>(${terna.join(", ")})</strong>`
        : `Resultado: <strong>None (No existe terna para S = ${s})</strong>`;
    } catch (e) { mostrarError("res-r17", e); }
  });

  // Reto 18
  document.getElementById("btn-r18")?.addEventListener("click", () => {
    try {
      const filasTexto = document.getElementById("r18-matriz").value.trim().split("\n");
      const matriz = filasTexto.map(linea =>
        linea.split(",").map(num => parseInt(num.trim(), 10))
      );
      const valido = reto18(matriz);
      document.getElementById("res-r18").innerHTML = `¿Es cuadrado mágico?: <strong>${valido ? "VÁLIDO (True)" : "INVÁLIDO (False)"}</strong>`;
    } catch (e) { mostrarError("res-r18", e); }
  });

  // Reto 19
  document.getElementById("btn-r19")?.addEventListener("click", () => {
    const n = parseInt(document.getElementById("r19-n").value, 10);
    const feliz = reto19(n);
    document.getElementById("res-r19").innerHTML = `¿Es número feliz?: <strong>${feliz ? "SÍ ES FELIZ (True)" : "CICLO INFINITO (False)"}</strong>`;
  });

  // Reto 20
  document.getElementById("btn-r20")?.addEventListener("click", () => {
    try {
      const n = parseInt(document.getElementById("r20-n").value, 10);
      const pares = reto20(n);
      document.getElementById("res-r20").innerHTML = `Primos gemelos: <strong>[${pares.join(", ")}]</strong>`;
    } catch (e) { mostrarError("res-r20", e); }
  });
});
