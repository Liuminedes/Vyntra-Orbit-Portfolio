/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignorar errores de TypeScript/ESLint en build (no tienes TS pero por si acaso)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Permite imágenes locales sin restricciones
    unoptimized: false,
    // Caché corta: al regenerar un archivo con el mismo nombre (ej. /assets/work/*.png),
    // se refleja en máx. 60s sin depender de hard-refresh.
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
