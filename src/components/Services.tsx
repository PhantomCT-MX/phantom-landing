import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Colaboración en Código",
    description:
      "Trabaja junto a nuestro equipo en tiempo real, compartiendo avances, mejoras y revisiones directamente en el repositorio.",
    icon: <ChartIcon />,
  },
  {
    title: "Gestión de Proyectos",
    description:
      "Organizamos, planificamos y ejecutamos cada fase del desarrollo con claridad, entregables definidos y fechas concretas.",
    icon: <WalletIcon />,
  },
  {
    title: "Automatización de Tareas",
    description:
      "Agiliza tus flujos de trabajo con procesos automáticos que ahorran tiempo y reducen errores repetitivos.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32" id="services">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Servicios Enfocados en eL{" "}
            </span>
            Cliente
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Nos adaptamos a tus objetivos y necesidades reales. Diseñamos
            soluciones con visión a largo plazo, siempre alineadas contigo.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
