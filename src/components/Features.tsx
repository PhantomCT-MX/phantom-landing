import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Diseño Responsivo",
    description:
      "Tu aplicación se adapta a cualquier dispositivo para ofrecer una experiencia perfecta, sin importar el tamaño de pantalla.",
    image: image4,
  },
  {
    title: "Interfaz Intuitiva",
    description:
      "Navegación simple, lógica clara y una experiencia centrada en el usuario para maximizar la usabilidad.",
    image: image3,
  },
  {
    title: "Análisis Potenciado por IA",
    description:
      "Obtén recomendaciones inteligentes, automatiza procesos clave y toma decisiones con datos precisos impulsados por inteligencia artificial.",
    image: image,
  },
];


const featureList: string[] = [
  "Dark/Light",
  "Secciones personalizables",
  "Estadísticas y analítica",
  "Multi-usuario y roles",
  "Integración de pagos",
  "CMS interno (opcional)",
  "Soporte multilingüe",
  "POS y e-commerce",

];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Muchas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Funciones Geniales
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
