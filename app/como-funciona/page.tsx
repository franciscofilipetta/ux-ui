import { Button } from "@/components/ui/button";
import {
  Heart,
  PenLine,
  Share2,
  Banknote,
  ShieldCheck,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: PenLine,
    title: "Crea tu campana",
    description:
      "Completa un formulario simple con tu historia, objetivo de recaudacion y fotos que representen tu causa.",
  },
  {
    icon: Share2,
    title: "Comparti con el mundo",
    description:
      "Difundi tu campana en redes sociales, WhatsApp y entre tus conocidos. Las primeras donaciones vienen de tu circulo cercano.",
  },
  {
    icon: Heart,
    title: "Recibe donaciones",
    description:
      "Las personas pueden donar de forma segura desde cualquier dispositivo. Cada donacion suma para alcanzar tu objetivo.",
  },
  {
    icon: Banknote,
    title: "Retira los fondos",
    description:
      "Una vez alcanzado tu objetivo (o cuando lo necesites), podes retirar los fondos a tu cuenta bancaria.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "100% Seguro",
    description:
      "Todas las transacciones estan protegidas con encriptacion de ultima generacion.",
  },
  {
    icon: Users,
    title: "Comunidad solidaria",
    description:
      "Miles de personas dispuestas a ayudar a causas que lo merecen.",
  },
  {
    icon: Clock,
    title: "Rapido y simple",
    description:
      "Crea tu campana en menos de 5 minutos y empieza a recibir donaciones.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-accent/50 to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Como funciona Solidaridad
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Crear una campana de recaudacion es facil, rapido y seguro.
            Descubri como podes transformar vidas con nuestra plataforma.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            4 pasos para empezar
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute left-1/2 top-0 flex h-6 w-6 -translate-x-1/2 -translate-y-2 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            Por que elegir Solidaridad
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Listo para empezar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Miles de personas ya confiaron en Solidaridad para recaudar fondos
            para sus causas. Ahora es tu turno.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/crear">
              <Button size="lg" className="w-full sm:w-auto">
                Crear mi campana
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explorar campanas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
