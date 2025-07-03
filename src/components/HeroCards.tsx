import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import jorhe from "../assets/jorhe.jpg"; // Assuming jorhe is the path to Jorge's image
import jose from "../assets/Cano.jpg";
import logo from "../assets/logo.png"; // Assuming you have a logo image

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">

      {/* PHANTOMCT Logo */}
      <Card className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[140px] h-[140px] z-20 bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-full drop-shadow-xl shadow-neon-green animate-pulse">
        <img
          src={logo}
          alt="PhantomCT Logo"
          className="w-20 h-20 object-contain drop-shadow-[0_0_8px_#00FFB2]"
        />
      </Card>

      {/* José Cano Card */}
      <Card className="absolute w-[340px] -top-[15px] left-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="José Cano" src={jose} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">José Cano</CardTitle>
            <CardDescription className="text-primary">
              Frontend Developer
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          Me enfoco en construir interfaces limpias y experiencias fluidas para
          los usuarios.
        </CardContent>
      </Card>

      {/* Jorge Tolentino Card */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="Jorge Tolentino" src={jorhe} />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Jorge Tolentino</CardTitle>
            <CardDescription className="text-primary">
              Backend Developer
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          Especializado en arquitecturas sólidas, APIs robustas y soluciones
          escalables para el backend.
        </CardContent>
      </Card>
    </div>
  );
};

