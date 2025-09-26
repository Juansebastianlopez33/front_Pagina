<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';

/**
 * Componente TypingEffect mejorado
 * @param {string} text - El texto que se va a "escribir".
 * @param {number} speed - La velocidad en milisegundos entre cada letra.
 * @param {Function} onComplete - Callback que se ejecuta al finalizar la animación.
 */
function TypingEffect({ text, speed = 150, onComplete }) {
    const [displayedText, setDisplayedText] = useState('');

    // Buena práctica: Usar una ref para el callback.
    // Esto evita que el efecto se reinicie si la función 'onComplete' cambia en cada render del componente padre.
    const onCompleteRef = useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        // Asegurarnos de que el texto sea una cadena para evitar errores
        const targetText = text || '';
        let currentIndex = 0;

        // Limpiar el texto al iniciar para que el efecto empiece de cero
        setDisplayedText('');

        if (targetText.length === 0) {
            if (onCompleteRef.current) {
                onCompleteRef.current();
            }
            return;
        }

        // Iniciar el intervalo para la animación
        const intervalId = setInterval(() => {
            currentIndex++;
            setDisplayedText(targetText.substring(0, currentIndex));

            // Si ya mostramos todo el texto, detenemos el intervalo
            if (currentIndex >= targetText.length) {
                clearInterval(intervalId);
                // Llamamos al callback de onComplete si existe
                if (onCompleteRef.current) {
                    onCompleteRef.current();
=======
import React, { useState, useEffect } from 'react';

// Añadimos la nueva propiedad 'onComplete'
function TypingEffect({ text, speed = 150, onComplete }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayedText('');

        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
                // Cuando termina, llamamos a la función onComplete si existe
                if (onComplete) {
                    onComplete();
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                }
            }
        }, speed);

        return () => {
<<<<<<< HEAD
            clearInterval(intervalId);
        };
    }, [text, speed]); // El efecto se reinicia solo si el texto o la velocidad cambian
=======
            clearInterval(typingInterval);
        };
    }, [text, speed, onComplete]);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    return <span>{displayedText}</span>;
}

export default TypingEffect;