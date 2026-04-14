import { CampaignForm } from "@/components/campaign-form";
import { Lightbulb, Shield, Users } from "lucide-react";

export default function CrearCampanaPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                Crea tu campana
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Completa los datos y empieza a recibir donaciones de personas que
                quieren ayudarte.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <CampaignForm />
            </div>
          </div>

          {/* Tips Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-card-foreground">
                  Consejos para una campana exitosa
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        Conta tu historia
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Las campanas con historias emotivas y detalladas
                        recaudan hasta 3 veces mas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        Comparti en redes
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Las primeras donaciones suelen venir de personas
                        cercanas. Comparti tu campana!
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        Se transparente
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mantene a tus donantes informados sobre el progreso y
                        uso de los fondos.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-primary/5 p-6">
                <h3 className="font-semibold text-foreground">
                  Necesitas ayuda?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nuestro equipo esta disponible para ayudarte a crear la mejor
                  campana posible.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Contactar soporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
