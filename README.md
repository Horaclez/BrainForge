# BrainForge

Bloc Markdown instantáneo, sin nube ni plugins. Funciona 100 % sin internet.

## Obtener el instalador .exe (con GitHub)
1. Crea un repositorio en GitHub y sube **todo el contenido de esta carpeta** (incluida `.github`).
2. Entra a la pestaña **Actions**. El flujo "Crear instalador de Windows" se ejecuta solo (tarda unos 3 a 5 minutos). También puedes lanzarlo con "Run workflow".
3. Cuando termine, abre la ejecución y descarga **BrainForge-Setup** (Artifacts). Dentro está `BrainForge Setup 1.0.0.exe`.
4. Para una descarga permanente: crea una etiqueta `v1.0.0` (Releases > Draft a new release) y el .exe se adjunta solo a la Release.

Windows puede mostrar "Windows protegió su PC" porque el instalador no está firmado: pulsa **Más información > Ejecutar de todas formas**.

## Uso
- **Abrir carpeta**: eliges una carpeta y tus notas son archivos `.md` reales. La app la recuerda al reiniciarse y detecta cada 5 s los archivos nuevos o cambiados desde fuera (por ejemplo, un `.md` guardado ahí por otra herramienta).
- **Importar / arrastrar** archivos o carpetas: se clasifican solos por tipo.
- **✨ Generar con Gemini** (opcional, necesita internet): pega tu clave de Google AI Studio, describe el tema y se crea un documento con la plantilla elegida. La clave se guarda solo en tu PC. Revisa siempre lo generado.

## Compilar en tu PC (alternativa)
Requiere Node.js y conexión: `npm install` y luego `npm run dist`. El instalador queda en `dist/`.
