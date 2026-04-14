import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Solidaridad
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              La plataforma de crowdfunding solidario donde cada donacion
              transforma vidas.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/?category=deportes"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Deportes
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=salud"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Salud
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=educacion"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Educacion
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=ongs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ONGs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Recursos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/como-funciona"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/crear"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Crear campana
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terminos de uso
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Politica de reembolso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>2024 Solidaridad. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
