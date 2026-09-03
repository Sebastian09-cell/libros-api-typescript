"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchLibros = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://libros-api-typescript.onrender.com/libros",
      );
      const json = await res.json();
      setData(json);
    } catch (error) {
      setData({ error: "Error al conectar con la API en Render" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-12 max-w-4xl mx-auto font-sans">
      {/* Hero / Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-3 text-emerald-400">
          📚 Libros API
        </h1>
        <p className="text-slate-400 mb-6">
          API REST ligera y pública construida con Node.js, Express y
          TypeScript.
        </p>

        {/* URL Base con botón de copiar */}
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <code className="text-emerald-300 font-mono text-sm sm:text-base break-all">
            https://libros-api-typescript.onrender.com
          </code>
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "https://libros-api-typescript.onrender.com",
              )
            }
            className="bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs px-3 py-2 rounded-lg font-medium transition"
          >
            Copiar URL
          </button>
        </div>
      </header>

      {/* Documentación de Endpoints */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-slate-200">
          Endpoints disponibles
        </h2>
        <div className="space-y-3">
          <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-md">
                GET
              </span>
              <code className="text-slate-200 font-mono text-sm">/libros</code>
            </div>
            <span className="text-slate-400 text-sm hidden sm:inline">
              Obtener catálogo completo
            </span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2.5 py-1 rounded-md">
                POST
              </span>
              <code className="text-slate-200 font-mono text-sm">/libros</code>
            </div>
            <span className="text-slate-400 text-sm hidden sm:inline">
              Crear un nuevo libro
            </span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-md">
                DELETE
              </span>
              <code className="text-slate-200 font-mono text-sm">
                /libros/:id
              </code>
            </div>
            <span className="text-slate-400 text-sm hidden sm:inline">
              Eliminar un libro por ID
            </span>
          </div>
        </div>
      </section>

      {/* Probador interactivo (Playground) */}
      <section className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-100">
              Playground en Vivo
            </h2>
            <p className="text-xs text-slate-400">
              Prueba la respuesta real de la API desplegada en Render.
            </p>
          </div>
          <button
            onClick={fetchLibros}
            disabled={loading}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-xl transition shadow-md"
          >
            {loading ? "Consultando..." : "Ejecutar GET /libros"}
          </button>
        </div>

        <pre className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto min-h-[160px]">
          {data
            ? JSON.stringify(data, null, 2)
            : '// Haz clic en "Ejecutar GET /libros" para realizar la petición en tiempo real...'}
        </pre>
      </section>
    </main>
  );
}
