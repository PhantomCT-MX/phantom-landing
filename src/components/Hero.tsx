import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {

  const sendWhatsapp = () => {
    const phoneNumber = "5217712887372"; // Replace with your WhatsApp number
    const message = "¡Hola! Estoy interesado en tus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1>
            <span className="inline bg-gradient-to-r from-[#7F00FF] via-[#9B5DE5] to-[#C100FF] text-transparent bg-clip-text">
              Invisible
            </span>{" "}
            a tus ojos
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#00FFB2] via-[#00E8A1] to-[#00D38F] text-transparent bg-clip-text">
              Poderoso
            </span>{" "}
            por dentro.
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Somos tu equipo detrás del producto: rápido, confiable y listo para
          construir.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={sendWhatsapp} className="w-full md:w-1/3">Contáctanos</Button>

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
