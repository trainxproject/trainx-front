import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF6B00' }}>
                <Dumbbell className="w-6 h-6" style={{ color: '#121212' }} />
              </div>
              <div>
                <h2 className="text-[20px] font-bold" style={{ color: '#FF6B00' }}>TrainX</h2>
                <p className="text-[12px] text-muted-foreground">Gestión de Turnos</p>
              </div>
            </div>
            <p className="text-[14px] text-muted-foreground">
              Tu gimnasio de confianza. Entrenamientos personalizados, clases grupales y tecnología de punta para alcanzar tus objetivos.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Clases
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Entrenadores
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Horarios
                </a>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#FF6B00' }} />
                <span className="text-[14px] text-muted-foreground">
                  Av. Principal 123, Ciudad, País
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#FF6B00' }} />
                <span className="text-[14px] text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#FF6B00' }} />
                <span className="text-[14px] text-muted-foreground">
                  info@trainx.com
                </span>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="mt-4 flex gap-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-muted hover:bg-[#FF6B00] transition-colors flex items-center justify-center group"
              >
                <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-[#121212]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-muted hover:bg-[#FF6B00] transition-colors flex items-center justify-center group"
              >
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-[#121212]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-muted hover:bg-[#FF6B00] transition-colors flex items-center justify-center group"
              >
                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-[#121212]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-muted hover:bg-[#FF6B00] transition-colors flex items-center justify-center group"
              >
                <Youtube className="w-4 h-4 text-muted-foreground group-hover:text-[#121212]" />
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[14px] text-muted-foreground">
              © {currentYear} TrainX. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                Política de Cookies
              </a>
              <a href="#" className="text-[14px] text-muted-foreground hover:text-[#FF6B00] transition-colors">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}