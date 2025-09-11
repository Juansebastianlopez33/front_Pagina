import React, { useEffect, useState } from "react";
import "./guia_juego.css";

const GuiaJuego = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [curso, setCurso] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem("goe_user");
        if (!storedUser) {
          setError("Usuario no encontrado en localStorage");
          return;
        }

        const userData = JSON.parse(storedUser);
        const username = userData.username;

        const res = await fetch(
          `${API_URL}/auth_juego/get-user-course/${username}`
        );

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || "Error al cargar el curso");
        }

        const data = await res.json();
        setCurso(data.curso);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [API_URL]);

  if (error) {
    return (
      <div className="guia-container">
        <div className="guia-box">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!curso) {
    return (
      <div className="guia-container">
        <div className="guia-box">
          <h2>Cargando Guía...</h2>
          <p>Por favor espera mientras se carga tu curso.</p>
        </div>
      </div>
    );
  }

  const { tema, subtema, dificultad, contenido } = curso;

  return (
    <div className="guia-container">
      <div className="guia-box">
        {/* Título */}
        <h2 className="guia-title">Tema: {tema}</h2>

        {/* Info de subtema/dificultad */}
        <div className="guia-info">
          <p>
            <strong>Subtema:</strong> {subtema}
          </p>
          <p>
            <strong>Dificultad:</strong> {dificultad}
          </p>
        </div>

        {/* Introducción */}
        {contenido?.introduccion && (
          <section className="guia-section">
            <h3 className="guia-section-title">Introducción</h3>
            <p className="guia-section-desc">{contenido.introduccion}</p>
          </section>
        )}

        {/* Conceptos clave */}
        {contenido?.conceptos_clave && (
          <section className="guia-section">
            <h3 className="guia-section-title">Conceptos Clave</h3>
            <ul className="guia-list">
              {contenido.conceptos_clave.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Ejemplos prácticos */}
        {contenido?.ejemplos_practicos && (
          <section className="guia-section">
            <h3 className="guia-section-title">Ejemplos Prácticos</h3>
            {contenido.ejemplos_practicos.map((ej, i) => (
              <div key={i} className="guia-example">
                <pre className="guia-code">
                  <code>{ej.codigo}</code>
                </pre>
                <p className="guia-section-desc">{ej.explicacion}</p>

                {/* Si trae buenas prácticas dentro del ejemplo */}
                {ej.buenas_practicas &&
                  ej.buenas_practicas.map((bp, j) => (
                    <li key={j} className="guia-list">{bp}</li>
                  ))}
              </div>
            ))}
          </section>
        )}

        {/* Errores comunes */}
        {contenido?.errores_comunes && (
          <section className="guia-section">
            <h3 className="guia-section-title">Errores Comunes</h3>
            <ul className="guia-list">
              {contenido.errores_comunes.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Buenas prácticas */}
        {contenido?.buenas_practicas && (
          <section className="guia-section">
            <h3 className="guia-section-title">Buenas Prácticas</h3>
            {Array.isArray(contenido.buenas_practicas) &&
              contenido.buenas_practicas.map((bp, i) =>
                typeof bp === "string" ? (
                  <li key={i} className="guia-list">{bp}</li>
                ) : (
                  <div key={i} className="guia-example">
                    <pre className="guia-code">
                      <code>{bp.codigo}</code>
                    </pre>
                    <p className="guia-section-desc">{bp.explicacion}</p>
                  </div>
                )
              )}
          </section>
        )}

        {/* Aplicaciones */}
        {contenido?.aplicaciones && (
          <section className="guia-section">
            <h3 className="guia-section-title">Aplicaciones</h3>
            {contenido.aplicaciones.map((ap, i) =>
              typeof ap === "string" ? (
                <li key={i} className="guia-list">{ap}</li>
              ) : (
                <div key={i} className="guia-example">
                  <p className="guia-section-desc">
                    <strong>{ap.nombre}:</strong> {ap.descripción}
                  </p>
                </div>
              )
            )}
          </section>
        )}

        {/* Ejemplos extra */}
        {contenido?.ejemplos_extra_texto && (
          <section className="guia-section">
            <h3 className="guia-section-title">Ejemplos Extra</h3>
            {contenido.ejemplos_extra_texto.map((txt, i) => (
              <p key={i} className="guia-section-desc">
                {txt}
              </p>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default GuiaJuego;
