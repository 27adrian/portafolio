export interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  repoFrontend?: string;
  repoBackend?: string;
  repository?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "MedAlert",
    subtitle: "Gestión familiar de medicamentos",
    category: "Aplicación móvil",
    description:
      "Aplicación móvil diseñada para ayudar a las familias a gestionar pacientes, medicamentos, horarios, stock y seguimiento de tratamientos.",
    technologies: [
      "Flutter",
      "Dart",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Azure",
    ],
    featured: true,
    repoFrontend: "https://github.com/27adrian/MedAlert-Frontend",
    repoBackend: "https://github.com/27adrian/MedAlert-Backend",
  },

  {
    number: "02",
    title: "ERP Moshell",
    subtitle: "Gestión para manufactura textil",
    category: "Sistema ERP",
    description:
      "Sistema ERP orientado a la gestión de inventario, clientes, proveedores, compras, pedidos y procesos de producción.",
    technologies: ["React", "Laravel", "PHP", "PostgreSQL"],
    repoFrontend: "https://github.com/JuanMartinCavero/erp-frontend-moshell",
    repoBackend: "https://github.com/JuanMartinCavero/erp-backend-moshell",
  },

  {
    number: "03",
    title: "ProyectMega",
    subtitle: "Plataforma de gestión",
    category: "Aplicación web - Intranet",
    description:
      "Plataforma web para gestionar servicios, clientes, cuentas por cobrar, materiales, inventario e ingresos del negocio.",
    technologies: ["React", "Express.js", "MongoDB"],
    repoFrontend: "https://github.com/27adrian/Front-ProyectMega",
    repoBackend: "https://github.com/27adrian/Back-ProyectMega",
  },

  {
    number: "04",
    title: "People Detection",
    subtitle: "Detección y control de aforo",
    category: "Visión por computadora",
    description:
      "Proyecto de visión por computadora para detectar personas y procesar video capturado mediante una cámara.",
    technologies: ["Python", "Computer Vision", "Image Processing"],
    repository: "https://github.com/27adrian/Person_Counter",
  },
];
