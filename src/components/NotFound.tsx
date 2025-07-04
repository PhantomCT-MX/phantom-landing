import logo from '../assets/logocolor.png';

export const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-background text-foreground overflow-hidden">
      {/* Logo animado: se mueve y parpadea */}
      <img
        src={logo}
        alt="PhantomCT Logo"
        className="absolute w-80 h-80 blur-[1.5px] animate-float animate-pulseGlow pointer-events-none z-0"
        style={{
          top: 'calc(50% - 10rem)',
          left: 'calc(50% - 10rem)',
        }}
      />

      {/* Contenido frontal */}
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#00FFB2] to-[#560bad] text-transparent bg-clip-text mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
        <p className="text-muted-foreground mb-6">
          La ruta que buscas no existe o ha sido movida.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:brightness-110 transition"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};
