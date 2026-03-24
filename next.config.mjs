/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignorar errores de TypeScript/ESLint en build (no tienes TS pero por si acaso)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Permite imágenes locales sin restricciones
    unoptimized: false,
  },
};

export default nextConfig;
