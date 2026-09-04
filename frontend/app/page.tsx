"use client";

import { useState } from "react";

const API_BASE = "https://libros-api-typescript.onrender.com";

type Endpoint = {
  method: string;
  badgeClass: string;
  path: string;
  desc: string;
};

const ENDPOINTS: Endpoint[] = [
  {
    method: "GET",
    badgeClass: "bg-forest/10 text-forest",
    path: "/libros",
    desc: "Devuelve el catálogo completo de libros registrados.",
  },
  {
    method: "POST",
    badgeClass: "bg-navy/10 text-navy",
    path: "/libros",
    desc: "Registra un libro nuevo en el catálogo.",
  },
  {
    method: "DEL",
    badgeClass: "bg-brass/15 text-brass",
    path: "/libros/:id",
    desc: "Elimina un libro existente por su identificador.",
  },
];

type LibrosResponse = Record<string, unknown> | unknown[] | null;

export default function Home() {
  const [data, setData] = useState<LibrosResponse>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchLibros = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/libros`);
      const json = await res.json();
      setData(json);
    } catch (error) {
      setData({ error: "Error al conectar con la API en Render" });
    } finally {
      setLoading(false);
    }
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(API_BASE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard not available — ignore */
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-serif leading-relaxed relative">
      <div className="hidden md:block fixed top-0 left-[max(0px,calc(50%-460px))] w-[3px] h-full bg-gradient-to-b from-brass via-brass-soft to-transparent opacity-55" />
      <div className="max-w-[760px] mx-auto px-7 pb-10">
        <header className="pt-16 pb-12 border-b border-ink/15">
          <div className="font-mono text-[13px] text-brass mb-4">
            API REST · Node.js / Express / TypeScript
          </div>

          <h1 className="text-[34px] md:text-[52px] font-semibold tracking-tight leading-[1.05] mb-5">
            Libros API
          </h1>

          <p className="text-lg text-ink-soft italic max-w-[46ch] mb-7">
            Una API ligera y pública para gestionar un catálogo de libros —
            construida para ser leída como código de producción, no como un
            ejercicio de curso.
          </p>

          <div className="bg-paper-deep border border-ink/15 rounded p-4 flex items-center justify-between gap-3 flex-wrap">
            <code className="font-mono text-[13px] text-navy break-all">
              {API_BASE}
            </code>
            <button
              onClick={copyUrl}
              className="font-mono text-xs border border-ink text-ink px-3 py-[7px] rounded whitespace-nowrap transition-colors hover:bg-ink hover:text-paper"
            >
              {copied ? "Copiado ✓" : "Copiar URL"}
            </button>
          </div>

          <div className="flex gap-3.5 mt-6 flex-wrap">
            <a
              href="https://github.com/Sebastian09-cell/libros-api-typescript"
              target="_blank"
              className="font-mono text-[13px] inline-flex items-center gap-2 border border-ink bg-ink text-paper px-[18px] py-[11px] rounded transition-colors hover:bg-ink hover:text-paper"
            >
              Ver en GitHub
            </a>
            <a
              href={API_BASE}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] inline-flex items-center gap-2 border border-ink text-ink px-[18px] py-[11px] rounded transition-colors hover:bg-ink hover:text-paper"
            >
              Backend en Render ↗
            </a>
          </div>
        </header>

        {/* Endpoints */}
        <section className="py-12 border-b border-ink/15">
          <div className="font-mono text-xs text-ink-soft mb-6">
            Índice de endpoints
          </div>
          <ul>
            {ENDPOINTS.map((e) => (
              <li
                key={e.method + e.path}
                className="flex items-baseline gap-3.5 py-4 border-b border-dotted border-ink/15 last:border-none flex-wrap"
              >
                <span
                  className={`font-mono text-xs font-semibold px-2 py-[3px] rounded min-w-[52px] text-center ${e.badgeClass}`}
                >
                  {e.method}
                </span>
                <span className="font-mono text-[15px] whitespace-nowrap">
                  {e.path}
                </span>
                <span className="text-ink-soft text-[15px] flex-1">
                  {e.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Playground */}
        <section className="py-12 border-b border-ink/15">
          <div className="font-mono text-xs text-ink-soft mb-6">
            Playground en vivo
          </div>

          <div className="bg-code-bg rounded-md overflow-hidden mt-2">
            <div className="flex items-center justify-between px-[18px] py-3 border-b border-code-text/10">
              <span className="font-mono text-xs text-code-text/55">
                GET /libros
              </span>
              <button
                onClick={fetchLibros}
                disabled={loading}
                className="font-mono text-xs bg-forest text-paper px-4 py-2 rounded disabled:opacity-60"
              >
                {loading ? "Consultando…" : "Ejecutar"}
              </button>
            </div>

            <pre className="px-[18px] py-5 font-mono text-[13px] text-code-text min-h-[90px] whitespace-pre-wrap">
              {data
                ? JSON.stringify(data, null, 2)
                : "// respuesta real de la API desplegada en Render"}
              {!loading && (
                <span className="inline-block w-[7px] h-3.5 bg-brass-soft align-text-bottom animate-pulse" />
              )}
            </pre>
          </div>
        </section>

        {/* Stack */}
        <section className="py-12">
          <div className="font-mono text-xs text-ink-soft mb-6">Stack</div>
          <div className="flex gap-2.5 flex-wrap">
            {["Node.js", "Express", "TypeScript", "Render"].map((t) => (
              <span
                key={t}
                className="font-mono text-xs border border-ink/15 px-3 py-[7px] rounded text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <footer className="pt-10 text-sm text-ink-soft flex justify-between flex-wrap gap-3">
          <span>Construida por Sebastián Torres Delgado</span>
          <a
            href="https://portafolio-pi-nine-20.vercel.app/"
            className="text-navy"
          >
            Volver al portafolio
          </a>
        </footer>
      </div>
    </div>
  );
}
