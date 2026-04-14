import { CATEGORIAS, BADGES } from '../types';

export const campanias = [
  {
    id: 1,
    titulo: 'Renovación del Gimnasio Club Argentino',
    descripcion: 'Ayudanos a renovar el piso del gimnasio que durante más de 60 años fue testigo del paso de generaciones de deportistas.',
    historia: `Nos acercamos con una solicitud muy especial: renovar el piso de nuestro gimnasio principal, ese mismo que durante más de 60 años fue testigo silencioso del paso de generaciones enteras de deportistas, entrenadores, familias y sueños.

Allí se vivieron los primeros pasos de muchos chicos y chicas que encontraron en el deporte un lugar de pertenencia, de valores, de afecto. En ese mismo piso se festejaron triunfos inolvidables, se abrazaron derrotas con dignidad, y se sembraron historias que siguen vivas en la memoria de quienes alguna vez formaron parte del club.

Cambiar el piso puede parecer una mejora edilicia más, pero para nosotros representa un acto profundamente simbólico: no estamos renovando una superficie, estamos honrando una historia y abriendo paso al futuro.

Por eso, bajo el lema "No es solamente un piso, es una historia", invitamos a todos quienes valoran el deporte como herramienta de transformación social a sumarse a esta campaña.`,
    imagen: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800',
    categoria: CATEGORIAS.DEPORTES,
    montoObjetivo: 72960000,
    montoActual: 45230000,
    cantidadDonantes: 287,
    ubicacion: 'Marcos Juárez, Córdoba',
    creador: {
      id: 1,
      nombre: 'Juan Pablo Holtz',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      cargo: 'Presidente Sub Comisión de Basquetbol'
    },
    fechaCreacion: '2024-01-15',
    fechaLimite: '2024-06-30',
    badges: [BADGES.TENDENCIA],
    donaciones: [
      { id: 1, nombre: 'María González', monto: 50000, fecha: '2024-03-10', mensaje: '¡Éxitos con la campaña!' },
      { id: 2, nombre: 'Carlos Rodríguez', monto: 120000, fecha: '2024-03-09', mensaje: 'Por los recuerdos de mi infancia en ese gimnasio' },
      { id: 3, nombre: 'Ana Martínez', monto: 30000, fecha: '2024-03-08', mensaje: null },
      { id: 4, nombre: 'Roberto Sánchez', monto: 200000, fecha: '2024-03-07', mensaje: 'Siempre apoyando al club' },
      { id: 5, nombre: 'Laura Fernández', monto: 75000, fecha: '2024-03-06', mensaje: '¡Vamos Argentino!' }
    ]
  },
  {
    id: 2,
    titulo: 'Cirugía de Corazón para Matías',
    descripcion: 'Matías tiene 5 años y necesita una cirugía cardíaca urgente. Ayudanos a darle una segunda oportunidad.',
    historia: `Matías es un niño alegre de 5 años que desde su nacimiento ha luchado contra una cardiopatía congénita. Sus padres, trabajadores humildes, han agotado todos sus recursos intentando darle la mejor atención médica posible.

Ahora, Matías necesita una cirugía especializada que solo puede realizarse en Buenos Aires. El costo total del tratamiento, incluyendo traslado, estadía y procedimiento, supera ampliamente las posibilidades de la familia.

Cada día cuenta para Matías. Tu colaboración puede hacer la diferencia entre la esperanza y la incertidumbre. Ayudanos a que Matías pueda seguir sonriendo.`,
    imagen: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    categoria: CATEGORIAS.SALUD,
    montoObjetivo: 15000000,
    montoActual: 12800000,
    cantidadDonantes: 543,
    ubicacion: 'Córdoba Capital',
    creador: {
      id: 2,
      nombre: 'Patricia López',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      cargo: 'Madre de Matías'
    },
    fechaCreacion: '2024-02-01',
    fechaLimite: '2024-04-15',
    badges: [BADGES.URGENTE, BADGES.TENDENCIA],
    donaciones: [
      { id: 1, nombre: 'Anónimo', monto: 500000, fecha: '2024-03-10', mensaje: 'Fuerza Matías!' },
      { id: 2, nombre: 'Fundación Esperanza', monto: 1000000, fecha: '2024-03-09', mensaje: 'Apoyamos esta causa' },
      { id: 3, nombre: 'Pedro Gómez', monto: 25000, fecha: '2024-03-08', mensaje: null }
    ]
  },
  {
    id: 3,
    titulo: 'Becas para Estudiantes de Bajos Recursos',
    descripcion: 'Programa de becas educativas para jóvenes talentosos que no pueden costear sus estudios universitarios.',
    historia: `La educación es el motor del cambio social. Sin embargo, muchos jóvenes talentosos de nuestra comunidad ven truncados sus sueños universitarios por falta de recursos económicos.

Nuestra fundación trabaja desde hace 10 años identificando estudiantes destacados de secundaria que merecen una oportunidad. Con tu ayuda, podemos financiar materiales de estudio, transporte, y cuotas universitarias.

Cada beca otorgada es una inversión en el futuro de nuestra sociedad. Un profesional más que podrá retribuir a su comunidad lo que hoy recibe.`,
    imagen: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    categoria: CATEGORIAS.EDUCACION,
    montoObjetivo: 5000000,
    montoActual: 2100000,
    cantidadDonantes: 89,
    ubicacion: 'Buenos Aires',
    creador: {
      id: 3,
      nombre: 'Fundación Futuro',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150',
      cargo: 'Organización sin fines de lucro'
    },
    fechaCreacion: '2024-01-01',
    fechaLimite: '2024-12-31',
    badges: [],
    donaciones: [
      { id: 1, nombre: 'Empresa Tech SA', monto: 500000, fecha: '2024-03-05', mensaje: 'Apoyamos la educación' },
      { id: 2, nombre: 'María Elena Torres', monto: 15000, fecha: '2024-03-04', mensaje: null }
    ]
  },
  {
    id: 4,
    titulo: 'Comedor Comunitario Los Amigos',
    descripcion: 'Ayudanos a seguir brindando comida caliente a más de 200 familias cada día.',
    historia: `Desde hace 15 años, el Comedor Los Amigos brinda desayuno, almuerzo y merienda a familias en situación de vulnerabilidad del barrio. Actualmente atendemos a más de 200 familias, incluyendo niños, adultos mayores y personas con discapacidad.

La demanda ha crecido significativamente en los últimos meses, y nuestros recursos son limitados. Necesitamos tu ayuda para comprar alimentos, equipamiento de cocina, y mantener las instalaciones en condiciones dignas.

Tu donación se traduce directamente en platos de comida caliente para quienes más lo necesitan.`,
    imagen: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    categoria: CATEGORIAS.ONGS,
    montoObjetivo: 3000000,
    montoActual: 1850000,
    cantidadDonantes: 156,
    ubicacion: 'Rosario, Santa Fe',
    creador: {
      id: 4,
      nombre: 'Marta Villanueva',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      cargo: 'Directora del Comedor'
    },
    fechaCreacion: '2024-02-15',
    fechaLimite: '2024-05-31',
    badges: [BADGES.TENDENCIA],
    donaciones: [
      { id: 1, nombre: 'Supermercado Central', monto: 300000, fecha: '2024-03-10', mensaje: 'Donación mensual' },
      { id: 2, nombre: 'Familia Rodríguez', monto: 20000, fecha: '2024-03-09', mensaje: 'Con cariño para los chicos' }
    ]
  },
  {
    id: 5,
    titulo: 'Reconstrucción Post-Inundación Villa María',
    descripcion: 'Las últimas inundaciones dejaron a decenas de familias sin hogar. Necesitamos ayuda urgente.',
    historia: `Las intensas lluvias de la última semana causaron inundaciones devastadoras en varios barrios de Villa María. Más de 50 familias perdieron todo: sus hogares, muebles, electrodomésticos, ropa y recuerdos.

Estamos organizando la reconstrucción de las viviendas más afectadas y la entrega de kits de emergencia con colchones, frazadas, alimentos y artículos de higiene.

La solidaridad de toda la comunidad es fundamental en estos momentos críticos. Cada peso cuenta para ayudar a estas familias a reconstruir sus vidas.`,
    imagen: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800',
    categoria: CATEGORIAS.EMERGENCIAS,
    montoObjetivo: 8000000,
    montoActual: 6200000,
    cantidadDonantes: 412,
    ubicacion: 'Villa María, Córdoba',
    creador: {
      id: 5,
      nombre: 'Defensa Civil Villa María',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      cargo: 'Organismo oficial'
    },
    fechaCreacion: '2024-03-01',
    fechaLimite: '2024-04-01',
    badges: [BADGES.URGENTE],
    donaciones: [
      { id: 1, nombre: 'Municipalidad de Córdoba', monto: 2000000, fecha: '2024-03-08', mensaje: 'Solidaridad con Villa María' },
      { id: 2, nombre: 'Anónimo', monto: 100000, fecha: '2024-03-07', mensaje: 'Fuerza vecinos' }
    ]
  },
  {
    id: 6,
    titulo: 'Equipamiento para Escuela Rural',
    descripcion: 'Una escuela rural necesita computadoras y materiales didácticos para sus 45 alumnos.',
    historia: `La Escuela Rural N°123 está ubicada a 50km del pueblo más cercano. Sus 45 alumnos, desde nivel inicial hasta secundario, estudian con recursos muy limitados.

Queremos equipar la escuela con computadoras para que los chicos puedan acceder a contenido educativo digital, materiales de arte, instrumentos musicales y libros para la biblioteca.

Tu aporte ayuda a cerrar la brecha educativa entre zonas urbanas y rurales, dando a estos chicos las mismas oportunidades de aprendizaje.`,
    imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    categoria: CATEGORIAS.EDUCACION,
    montoObjetivo: 2500000,
    montoActual: 890000,
    cantidadDonantes: 67,
    ubicacion: 'Santiago del Estero',
    creador: {
      id: 6,
      nombre: 'Cooperadora Escolar',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      cargo: 'Asociación de padres'
    },
    fechaCreacion: '2024-02-20',
    fechaLimite: '2024-08-31',
    badges: [BADGES.NUEVO],
    donaciones: [
      { id: 1, nombre: 'Tech4Good', monto: 400000, fecha: '2024-03-06', mensaje: 'Donación de equipos' }
    ]
  }
];

export const usuarios = [
  {
    id: 1,
    nombre: 'Juan Pablo Holtz',
    email: 'jpholtz@email.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    ubicacion: 'Marcos Juárez, Córdoba',
    fechaRegistro: '2023-06-15',
    campaniasCreadas: [1],
    donacionesRealizadas: [
      { campaniaId: 2, monto: 50000, fecha: '2024-02-15' },
      { campaniaId: 4, monto: 25000, fecha: '2024-03-01' }
    ]
  }
];

// Función para formatear montos en pesos argentinos
export const formatearMonto = (monto) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(monto);
};

// Función para calcular el porcentaje de progreso
export const calcularPorcentaje = (actual, objetivo) => {
  const porcentaje = (actual / objetivo) * 100;
  return Math.min(porcentaje, 100).toFixed(1);
};

// Función para calcular días restantes
export const calcularDiasRestantes = (fechaLimite) => {
  const hoy = new Date();
  const limite = new Date(fechaLimite);
  const diferencia = limite - hoy;
  const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  return dias > 0 ? dias : 0;
};

// Función para formatear fecha
export const formatearFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};
