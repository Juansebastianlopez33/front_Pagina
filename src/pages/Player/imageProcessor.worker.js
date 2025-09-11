// Este archivo se ejecutará en un hilo de segundo plano.

// Función para aplicar filtro medieval (ahora solo acepta imageData)
const applyMedievalFilter = (imageData) => {
    const data = imageData.data;

    // Aplicar efecto sepia y ajustes de color medievales
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const tr = 0.393 * r + 0.769 * g + 0.189 * b;
        const tg = 0.349 * r + 0.686 * g + 0.168 * b;
        const tb = 0.272 * r + 0.534 * g + 0.131 * b;

        data[i] = Math.min(255, tr * 1.1);
        data[i + 1] = Math.min(255, tg * 0.95);
        data[i + 2] = Math.min(255, tb * 0.7);
    }

    // Retorna los datos de la imagen modificados
    return imageData;
};

// Escucha mensajes del hilo principal
self.onmessage = async (event) => {
    const { file } = event.data;

    try {
        const img = await createImageBitmap(file);
        const canvas = new OffscreenCanvas(img.width, img.height);
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);

        // Obtener los datos de la imagen antes de aplicar el filtro
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        // Aplica el filtro en este hilo de segundo plano, pasando los datos directamente
        imageData = applyMedievalFilter(imageData);

        // Volver a colocar los datos procesados en el lienzo
        context.putImageData(imageData, 0, 0);

        // Aplicar viñeta medieval (ahora en el worker, después del filtro principal)
        const gradient = context.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
        );
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(0.7, 'rgba(0,0,0,0.1)');
        gradient.addColorStop(1, 'rgba(139,69,19,0.4)');

        context.globalCompositeOperation = 'multiply';
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Añadir textura de pergamino (ahora en el worker)
        context.globalCompositeOperation = 'overlay';
        context.fillStyle = 'rgba(160,82,45,0.1)';

        for (let x = 0; x < canvas.width; x += 4) {
            for (let y = 0; y < canvas.height; y += 4) {
                if (Math.random() > 0.7) {
                    context.fillStyle = `rgba(139,69,19,${Math.random() * 0.1})`;
                    context.fillRect(x, y, 2, 2);
                }
            }
        }

        context.globalCompositeOperation = 'source-over';

        // Ajustar contraste final (ahora en el worker)
        context.globalCompositeOperation = 'overlay';
        context.fillStyle = 'rgba(101,67,33,0.15)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';


        const blob = await canvas.convertToBlob({ type: file.type, quality: 0.9 });

        // Envía el blob procesado de vuelta al hilo principal
        self.postMessage({ processedFile: blob });

    } catch (error) {
        self.postMessage({ error: error.message });
    }
};