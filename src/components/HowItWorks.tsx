import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "Creamos interfaces accesibles desde cualquier dispositivo y para cualquier usuario, cumpliendo estándares internacionales de accesibilidad web (WCAG)",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Colaboramos con emprendedores, equipos y desarrolladores para impulsar innovación desde la raíz",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Desde MVPs hasta soluciones empresariales: nuestras arquitecturas están preparadas para soportar tráfico, usuarios y funciones en crecimiento constante",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "Integramos mecánicas de juego que aumentan la retención, el engagement y el valor percibido por los usuarios",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Descubre cómo PhantomCT transforma tus ideas en soluciones digitales
        sólidas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
