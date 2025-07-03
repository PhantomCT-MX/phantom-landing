import { Button } from "./ui/button";

export const Cta = () => {
  const sendWhatsapp = () => {
    const phoneNumber = "5217712887372"; // Replace with your WhatsApp number
    const message = "¡Hola! Estoy interesado en tus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Todas tus
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Conceptos{" "}
            </span>
            en una sola interfaz
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Transformamos tus requerimientos en una solución unificada,
            intuitiva y potente. Desde el backend hasta el diseño final, lo
            reunimos todo en un solo lugar para ti.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">
            Solicita una demo
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={sendWhatsapp}
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};
