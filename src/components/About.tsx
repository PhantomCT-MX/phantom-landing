import { Statistics } from "./Statistics";
import pilot from "../assets/cohete.avif";

export const About = () => {
  return (
<section
  id="about"
  className="container py-24 sm:py-32 flex items-center justify-center min-h-[60vh]"
>
  <div className="border rounded-lg py-12 w-full flex items-center justify-center">
    <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center justify-center w-full">
      {/* <img
        src={pilot}
        alt=""
        className="w-[300px] object-contain rounded-lg"
      /> */}
      <div className="bg-green-0 flex flex-col justify-center items-center w-full md:w-auto">
        <div className="pb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Sobre{" "}
            </span>
            Nosotros
          </h2>
          <p className="text-xl text-muted-foreground mt-4">
            PHANTOMCT es una empresa de software especializada en el
            desarrollo de plataformas digitales de alto rendimiento. Nos
            enfocamos en crear herramientas invisibles para el usuario, pero
            cruciales para el éxito de tu operación.
          </p>
        </div>

        {/* <Statistics /> */}
      </div>
    </div>
  </div>
</section>
  );
};
